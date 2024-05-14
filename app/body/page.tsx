import Cards from '@/app/ui/cards'

type BodyPart = {
  id: string
  englishLabel: string
  spanishLabel: string
}

const bodyParts: BodyPart[] = [
  { id: '', englishLabel: '', spanishLabel: 'la ceja' },
  { id: '', englishLabel: '', spanishLabel: 'el ojo' },
  { id: '', englishLabel: '', spanishLabel: 'la nariz' },
  { id: '', englishLabel: '', spanishLabel: '' },
  { id: '', englishLabel: '', spanishLabel: '' },
]

export default function Page() {
  return (
    <div>
      <h1 className="mb-4 text-xl md:text-2xl">Body Cheatsheet</h1>
      <Cards cards={bodyParts} />
    </div>
  )
}
