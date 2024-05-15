'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const visibilityOptions = ['Both', 'Spanish', 'English', 'None'] as const
export type VisibilityOption = (typeof visibilityOptions)[number]
const defaultSelectedHide = 'Spanish'
export function useLanguageVisibility() {
  const router = useRouter()
  const pathname = usePathname()
  const search = useSearchParams()

  const selectedHide =
    (search.get('hide') as VisibilityOption) ?? defaultSelectedHide

  const setSelectedHide = (option: VisibilityOption) => {
    const newParams = new URLSearchParams(search)

    if (option === defaultSelectedHide) {
      newParams.delete('hide')
    } else {
      newParams.set('hide', option)
    }

    router.push(`${pathname}?${newParams.toString()}`)
  }

  return {
    visibilityOptions,
    selectedHide,
    setSelectedHide,
    showSpanish: !['Spanish', 'Both'].includes(selectedHide),
    showEnglish: !['English', 'Both'].includes(selectedHide),
  }
}
