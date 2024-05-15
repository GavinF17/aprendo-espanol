'use client'
import React from 'react'
import clsx from 'clsx'
import { EyeSlashIcon } from '@heroicons/react/24/outline'

export default function VisibilityClick({
  defaultShown = true,
  children,
}: {
  defaultShown?: boolean
  children?: React.ReactNode
}) {
  const [shown, setShown] = React.useState(defaultShown)

  const toggleShown = () => setShown(!shown)

  const hidden = !shown && !defaultShown

  return (
    <span className="relative cursor-pointer" onClick={toggleShown}>
      {hidden && (
        <button className="absolute w-full h-full min-w-28">
          <span
            className="left-0 top-0 absolute w-full h-full blur-sm bg-repeat-x"
            style={{
              backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3Csvg height='100%25' width='91' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='5' y='15'%3Etext is hidden %3C/text%3E%3C/svg%3E")`,
            }}
          />
          <EyeSlashIcon
            height="100%"
            className="text-gray-600 absolute -right-6 top-0"
          />
        </button>
      )}
      <span
        className={clsx('', {
          ['opacity-0']: hidden,
        })}
      >
        {children}
      </span>
    </span>
  )
}
