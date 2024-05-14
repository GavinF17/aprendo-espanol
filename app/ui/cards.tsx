'use client'

import Image from 'next/image'
import { useState } from 'react'
import clsx from 'clsx'

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
  return (
    <div id={id} className="rounded-xl bg-gray-50 p-2">
      <div className="p-4">
        <h3 className="flex gap-2 ml-2 text-sm font-medium">
          <Image src="/flag-gb.svg" alt="Flag GB" width={20} height={20} />
          {englishLabel}
        </h3>
        <h3 className="flex gap-2 ml-2 text-sm font-medium">
          <Image src="/flag-es.svg" alt="Flag ES" width={20} height={20} />
          {spanishLabel}
        </h3>
      </div>
      <div
        className={clsx(
          `flex justify-center ${bgColor ?? 'bg-white'} rounded-xl px-4 py-8`,
          { 'bg-cover bg-center': bgImageUrl },
        )}
        style={{ backgroundImage: bgImageUrl && `url(${bgImageUrl})` }}
      >
        {imageUrl && (
          <Image
            src={`/learning/clothes/${id}.svg`}
            alt={`${spanishLabel} image`}
            width={100}
            height={100}
          />
        )}
      </div>
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
