import Cards from '@/app/ui/cards/cards'

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
  //
  { id: 'zanahorias', englishLabel: 'carrots', spanishLabel: 'las zanahorias' },
  { id: 'naranjas', englishLabel: 'oranges', spanishLabel: 'las naranjas' },
  { id: 'patatas', englishLabel: 'potatoes', spanishLabel: 'las patatas' },
  {
    id: 'judiasVerdes',
    englishLabel: 'green beans',
    spanishLabel: 'las judías verdes',
  },
  { id: 'peras', englishLabel: 'pears', spanishLabel: 'las peras' },
  { id: 'platanos', englishLabel: 'bananas', spanishLabel: 'los plátanos' },
  { id: 'manzanas', englishLabel: 'apples', spanishLabel: 'las manzanas' },
  { id: 'fresas', englishLabel: 'strawberries', spanishLabel: 'las fresas' },
  // { id: '', englishLabel: '', spanishLabel: '' },
  { id: 'yogur', englishLabel: 'yoghurt', spanishLabel: 'el yogur' },
  { id: 'pan', englishLabel: 'bread', spanishLabel: 'el pan' },
  { id: 'huevo', englishLabel: 'egg', spanishLabel: 'el huevo' },
  { id: 'churros', englishLabel: 'churros', spanishLabel: 'los churros' },
  { id: 'mantequilla', englishLabel: 'butter', spanishLabel: 'la mantequilla' },
  { id: 'marmelada', englishLabel: 'marmalade', spanishLabel: 'la marmelada' },
  { id: 'cereales', englishLabel: 'cereal', spanishLabel: 'los cereales' },
  { id: 'bolleria', englishLabel: 'pastries', spanishLabel: 'la bollería' },
  { id: 'tostada', englishLabel: 'toast', spanishLabel: 'la tostada' },
  { id: 'queso', englishLabel: 'cheese', spanishLabel: 'el queso' },
  { id: 'fruta', englishLabel: 'fruit', spanishLabel: 'la fruta' },
  { id: 'ensalada', englishLabel: 'salad', spanishLabel: 'le ensalada' },
  { id: 'pollo', englishLabel: 'chicken', spanishLabel: 'el pollo' },
  { id: 'pescado', englishLabel: 'fish', spanishLabel: 'el pescado' },
  { id: 'helado', englishLabel: 'ice cream', spanishLabel: 'el helado' },
  { id: 'flan', englishLabel: 'custard', spanishLabel: 'el flan' },
  { id: 'pastel', englishLabel: 'cake', spanishLabel: 'el pastel' },
  {
    id: 'tortilla',
    englishLabel: 'tortilla / omelette',
    spanishLabel: 'la tortilla',
  },
  { id: 'sopa', englishLabel: 'soup', spanishLabel: 'la sopa' },
  { id: 'paella', englishLabel: 'paella', spanishLabel: 'la paella' },
  { id: 'filete', englishLabel: 'steak', spanishLabel: 'el filete' },
  {
    id: 'gazpacho',
    englishLabel: 'gazpacho (cold soup)',
    spanishLabel: 'el gazpacho',
  },
  { id: 'tapas', englishLabel: 'tapas', spanishLabel: 'la tapas' },
  { id: 'agua', englishLabel: 'water', spanishLabel: 'agua' },
  { id: 'vinoTinto', englishLabel: 'red wine', spanishLabel: 'vino tinto' },
  { id: 'vinoBlanco', englishLabel: 'white wine', spanishLabel: 'vino blanco' },
  { id: 'cerveza', englishLabel: 'beer', spanishLabel: 'cerveza' },
  { id: 'te', englishLabel: 'tea', spanishLabel: 'el té' },
  { id: 'cafe', englishLabel: 'coffee', spanishLabel: 'el café' },
  {
    id: 'chocolate',
    englishLabel: 'chocolate (drink)',
    spanishLabel: 'el chocolate',
  },
  {
    id: 'leche',
    englishLabel: 'milk',
    spanishLabel: 'la leche',
  },
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
