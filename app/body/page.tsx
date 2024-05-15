import Cards from '@/app/ui/cards/cards'

type BodyPart = {
  id: string
  englishLabel: string
  spanishLabel: string
}

const bodyParts: BodyPart[] = [
  { id: 'ceja', englishLabel: 'eyebrow', spanishLabel: 'la ceja' },
  { id: 'ojo', englishLabel: 'eye', spanishLabel: 'el ojo' },
  { id: 'nariz', englishLabel: 'nose', spanishLabel: 'la nariz' },
  { id: 'boca', englishLabel: 'mouth', spanishLabel: 'la boca' },
  { id: 'labios', englishLabel: 'lips', spanishLabel: 'los labios' },
  { id: 'dientes', englishLabel: 'teeth', spanishLabel: 'los dientes' },
  { id: 'lengua', englishLabel: 'tongue', spanishLabel: 'la lengua' },
  { id: 'pecho', englishLabel: 'chest', spanishLabel: 'el pecho' },
  { id: 'estomago', englishLabel: 'stomach', spanishLabel: 'el estómago' },
  { id: 'pierna', englishLabel: 'chest', spanishLabel: 'la pierna' },
  { id: 'rodilla', englishLabel: 'knee', spanishLabel: 'la rodilla' },
  { id: 'pie', englishLabel: 'foot', spanishLabel: 'el pie' },
  { id: 'talon', englishLabel: 'heel', spanishLabel: 'el talón' },
  { id: 'tobillo', englishLabel: '', spanishLabel: 'el tobillo' },
  { id: 'dedoPie', englishLabel: 'toe', spanishLabel: 'el dedo del pie' },
  { id: 'pelo', englishLabel: 'hair', spanishLabel: 'el pelo / cabello' },
  { id: 'cabeza', englishLabel: 'head', spanishLabel: 'la cabeza' },
  { id: 'oreja', englishLabel: 'ear', spanishLabel: 'la oreja' },
  { id: 'cuello', englishLabel: 'neck', spanishLabel: 'el cuello' },
  { id: 'hombro', englishLabel: 'shoulder', spanishLabel: 'el hombro' },
  { id: 'espalda', englishLabel: 'back', spanishLabel: 'la espalda' },
  { id: 'brazo', englishLabel: 'arm', spanishLabel: 'el brazo' },
  { id: 'codo', englishLabel: 'elbow', spanishLabel: 'el codo' },
  { id: 'mano', englishLabel: 'hand', spanishLabel: 'la mano' },
  { id: 'dedo', englishLabel: 'finger', spanishLabel: 'el dedo' },
]

export default function Page() {
  return (
    <div>
      <h1 className="mb-4 text-xl md:text-2xl">Body Cheatsheet</h1>
      <Cards cards={bodyParts} />
    </div>
  )
}
