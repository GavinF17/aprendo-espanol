'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import clsx from 'clsx'
import VisibilityClick from '@/app/ui/visibility-click'
import {
  useLanguageVisibility,
  VisibilityOption,
} from '@/app/ui/cards/use-hidden-language'

type CardProps = {
  id: string
  englishLabel: string
  spanishLabel: string
  imageUrl?: string
  bgColor?: string
  bgImageUrl?: string
}

function Card({
  id,
  englishLabel,
  spanishLabel,
  imageUrl,
  bgColor,
  bgImageUrl,
}: CardProps) {
  const { showSpanish, showEnglish } = useLanguageVisibility()

  return (
    <div id={id} className="rounded-xl bg-gray-50 p-2">
      {showSpanish}
      {showEnglish}
      <div className="p-4">
        <h3 className="flex gap-2 ml-2 text-sm font-medium">
          <Image src="/flag-gb.svg" alt="Flag GB" width={20} height={20} />
          <VisibilityClick defaultShown={showEnglish}>
            {englishLabel}
          </VisibilityClick>
        </h3>
        <h3 className="flex gap-2 ml-2 text-sm font-medium">
          <Image src="/flag-es.svg" alt="Flag ES" width={20} height={20} />
          <VisibilityClick defaultShown={showSpanish}>
            {spanishLabel}
          </VisibilityClick>
        </h3>
      </div>
      <div
        className={clsx(
          `flex justify-center ${bgColor ?? 'bg-white'} rounded-xl px-4 py-8 min-h-36`,
          {
            'bg-cover bg-center': bgImageUrl,
            [`${bgColor}`]: bgColor && showEnglish,
            'bg-white': !bgColor || !showEnglish,
          },
        )}
        style={{
          backgroundImage:
            showEnglish && bgImageUrl ? `url(${bgImageUrl})` : undefined,
        }}
      >
        {imageUrl && (
          <Image
            src={`/learning/clothes/${id}.svg`}
            alt={`${spanishLabel} image`}
            width={100}
            height={100}
            className={clsx({ ['opacity-0']: !showEnglish })}
          />
        )}
      </div>
    </div>
  )
}

function VisibilityOptions() {
  const { visibilityOptions, selectedHide, setSelectedHide } =
    useLanguageVisibility()

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedHide(value as VisibilityOption)
  }

  return (
    <div className="mb-5">
      <h3 className="text-gray-900">Hide Language</h3>
      <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex">
        {visibilityOptions.map((option) => (
          <li
            key={option}
            className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r"
          >
            <div className="flex items-center ps-3">
              <input
                id={`${option}-checkbox-list`}
                type="checkbox"
                value={option}
                checked={
                  selectedHide === option ||
                  (selectedHide === 'Both' && option !== 'None')
                }
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <label
                htmlFor={`${option}-checkbox-list`}
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
              >
                {option} {option === 'Spanish' && '(Default)'}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Cards({ cards }: { cards: CardProps[] }) {
  const [search, setSearch] = useState<string>('')

  return (
    <div>
      <input
        placeholder="Search"
        className="peer block rounded-md border border-gray-200 p-2 mb-5 text-sm outline-2 placeholder:text-gray-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <VisibilityOptions />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards
          .filter(
            ({ englishLabel, spanishLabel }) =>
              englishLabel
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase()) ||
              spanishLabel
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase()),
          )
          .map((c) => (
            <Card key={c.id} {...c} />
          ))}
      </div>
    </div>
  )
}
