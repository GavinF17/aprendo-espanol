import Cards from '@/app/ui/cards'

type FoodItem = {
  id: string
  englishLabel: string
  spanishLabel: string
}

const foodItems: FoodItem[] = [
  // fruit & veg
  { id: 'guisantes', englishLabel: 'peas', spanishLabel: 'los guisantes' },
  { id: 'uvas', englishLabel: 'grapes', spanishLabel: 'las uvas' },
  { id: 'sandia', englishLabel: 'watermelon', spanishLabel: 'la sandía' },
  { id: 'limon', englishLabel: 'lemon', spanishLabel: 'el limón' },
  {
    id: 'arandanos',
    englishLabel: 'blueberries',
    spanishLabel: 'los arándanos',
  },
  {
    id: 'frambuesas',
    englishLabel: 'raspberries',
    spanishLabel: 'las frambuesas',
  },
  { id: 'grosellas', englishLabel: 'currants', spanishLabel: 'las grosellas' },
  { id: 'moras', englishLabel: 'blackberries', spanishLabel: 'las moras' },
  { id: 'pina', englishLabel: 'pineapple', spanishLabel: 'piña' },
  { id: 'tomate', englishLabel: 'tomato', spanishLabel: 'el tomate' },
  { id: 'lechuga', englishLabel: 'lettuce', spanishLabel: 'la lechuga' },
]

export default function Page() {
  return (
    <div>
      <h1 className="mb-4 text-xl md:text-2xl">Food & Drink Cheatsheet</h1>
      <Cards
        cards={foodItems.map((c) => ({
          ...c,
          bgImageUrl: `/learning/food/${c.id}.jpg`,
        }))}
      />
    </div>
  )
}
