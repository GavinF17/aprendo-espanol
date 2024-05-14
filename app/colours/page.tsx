import Cards from '@/app/ui/cards'

type Colour = {
  id: string
  englishLabel: string
  spanishLabel: string
  bgColor: string
}

const colours: Colour[] = [
  {
    id: 'rojo',
    englishLabel: 'red',
    spanishLabel: 'rojo',
    bgColor: 'bg-red-500',
  },
  {
    id: 'amarillo',
    englishLabel: 'yellow',
    spanishLabel: 'amarillo',
    bgColor: 'bg-yellow-400',
  },
  {
    id: 'naranja',
    englishLabel: 'orange',
    spanishLabel: 'naranja',
    bgColor: 'bg-orange-500',
  },
  {
    id: 'rosa',
    englishLabel: 'pink',
    spanishLabel: 'rosa',
    bgColor: 'bg-pink-500',
  },
  {
    id: 'morado',
    englishLabel: 'purple',
    spanishLabel: 'morado',
    bgColor: 'bg-purple-600',
  },
  {
    id: 'violeta',
    englishLabel: 'violet',
    spanishLabel: 'violeta',
    bgColor: 'bg-violet-500',
  },
  {
    id: 'verde',
    englishLabel: 'green',
    spanishLabel: 'verde',
    bgColor: 'bg-green-500',
  },
  {
    id: 'rosaFucsia',
    englishLabel: 'fuchsia',
    spanishLabel: 'rosa fucsia',
    bgColor: 'bg-fuchsia-500',
  },
  {
    id: 'azul',
    englishLabel: 'blue',
    spanishLabel: 'azul',
    bgColor: 'bg-blue-500',
  },
  {
    id: 'azulCeleste',
    englishLabel: 'light blue',
    spanishLabel: 'azul celeste',
    bgColor: 'bg-blue-300',
  },
  {
    id: 'azulOscuro',
    englishLabel: 'dark blue',
    spanishLabel: 'azul oscuro',
    bgColor: 'bg-blue-800',
  },
  {
    id: 'azulClaro',
    englishLabel: 'light blue',
    spanishLabel: 'azul claro',
    bgColor: 'bg-blue-200',
  },
  {
    id: 'negro',
    englishLabel: 'black',
    spanishLabel: 'negro',
    bgColor: 'bg-black',
  },
  {
    id: 'blanco',
    englishLabel: 'white',
    spanishLabel: 'blanco',
    bgColor: 'bg-white',
  },
  {
    id: 'gris',
    englishLabel: 'gray',
    spanishLabel: 'gris',
    bgColor: 'bg-gray-500',
  },
  {
    id: 'marron',
    englishLabel: 'brown',
    spanishLabel: 'marrón',
    bgColor: 'bg-yellow-900',
  },
]

export default function Page() {
  return (
    <div>
      <h1 className="mb-4 text-xl md:text-2xl">Colours Cheatsheet</h1>
      <Cards cards={colours} />
    </div>
  )
}
