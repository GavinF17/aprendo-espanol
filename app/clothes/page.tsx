import Image from 'next/image'
import Cards from '@/app/ui/cards'

const categories = {
  ropa: {
    category: 'ropa',
    englishLabel: 'clothes',
    spanishLabel: 'la ropa',
  },
  calzado: {
    category: 'ropa',
    englishLabel: 'footwear',
    spanishLabel: 'el calzado',
  },
  accesorios: {
    category: 'ropa',
    englishLabel: 'accessories',
    spanishLabel: 'los accesorios',
  },
}

type Category = keyof typeof categories

type Clothes = {
  id: string
  category: Category
  englishLabel: string
  spanishLabel: string
}

const clothes: Clothes[] = [
  ///////////////
  // la ropa ///
  /////////////
  {
    id: 'camisetaCorta',
    category: 'ropa',
    englishLabel: '(short sleeve) t-shirt',
    spanishLabel: 'la camiseta (de manga corta)',
  },
  {
    id: 'camisa',
    category: 'ropa',
    englishLabel: 'shirt',
    spanishLabel: 'la camisa',
  },
  {
    id: 'chaqueta',
    category: 'ropa',
    englishLabel: 'jacket',
    spanishLabel: 'la chaqueta',
  },
  {
    id: 'sudadera',
    category: 'ropa',
    englishLabel: 'sweatshirt',
    spanishLabel: 'la sudadera',
  },
  {
    id: 'jersey',
    category: 'ropa',
    englishLabel: 'jersey',
    spanishLabel: 'el jersey',
  },
  {
    id: 'anorak',
    category: 'ropa',
    englishLabel: 'anorak',
    spanishLabel: 'el anorak',
  },
  {
    id: 'vestido',
    category: 'ropa',
    englishLabel: 'dress',
    spanishLabel: 'el vestido',
  },
  {
    id: 'chaleco',
    category: 'ropa',
    englishLabel: 'vest',
    spanishLabel: 'el chaleco',
  },
  {
    id: 'falda',
    category: 'ropa',
    englishLabel: 'skirt',
    spanishLabel: 'la falda',
  },
  {
    id: 'gabardina',
    category: 'ropa',
    englishLabel: 'raincoat',
    spanishLabel: 'la gabardina',
  },
  {
    id: 'bleiser',
    category: 'ropa',
    englishLabel: 'blazer',
    spanishLabel: 'el/la bléiser',
  },
  {
    id: 'pijamas',
    category: 'ropa',
    englishLabel: 'pyjamas',
    spanishLabel: 'el pijamas',
  },
  {
    id: 'traje',
    category: 'ropa',
    englishLabel: 'suit',
    spanishLabel: 'el traje',
  },
  {
    id: 'pantalones',
    category: 'ropa',
    englishLabel: 'trousers',
    spanishLabel: 'los pantalones',
  },
  {
    id: 'vaqueros',
    category: 'ropa',
    englishLabel: 'jeans',
    spanishLabel: 'los (pantalones) vaqueros',
  },
  {
    id: 'cortos',
    category: 'ropa',
    englishLabel: 'shorts',
    spanishLabel: 'los pantalones cortos',
  },
  {
    id: 'camisetaLarga',
    category: 'ropa',
    englishLabel: 'long sleeve t-shirt',
    spanishLabel: 'la camiseta de manga larga',
  },
  {
    id: 'camisetaTirantes',
    category: 'ropa',
    englishLabel: 'sleeveless t-shirt',
    spanishLabel: 'la camiseta de tirantes',
  },
  {
    id: 'calzoncillos',
    category: 'ropa',
    englishLabel: 'underpants',
    spanishLabel: 'los calzoncillos',
  },
  {
    id: 'bragas',
    category: 'ropa',
    englishLabel: 'panties',
    spanishLabel: 'las bragas',
  },
  {
    id: 'sujetador',
    category: 'ropa',
    englishLabel: 'bra',
    spanishLabel: 'el sujetador',
  },
  {
    id: 'calcetines',
    category: 'ropa',
    englishLabel: 'socks',
    spanishLabel: 'los calcetines',
  },
  {
    id: 'blusa',
    category: 'ropa',
    englishLabel: 'blouse',
    spanishLabel: 'la blusa',
  },
  {
    id: 'abrigo',
    category: 'ropa',
    englishLabel: 'coat',
    spanishLabel: 'el abrigo',
  },
  {
    id: 'banador',
    category: 'ropa',
    englishLabel: 'swimsuit',
    spanishLabel: 'el bañador',
  },
  {
    id: 'bikini',
    category: 'ropa',
    englishLabel: 'bikini',
    spanishLabel: 'el bikini',
  },
  //////////////////
  // el calzado ///
  ////////////////
  {
    id: 'botas',
    category: 'calzado',
    englishLabel: 'boots',
    spanishLabel: 'las botas',
  },
  {
    id: 'botasAgua',
    category: 'calzado',
    englishLabel: 'water boots',
    spanishLabel: 'las botas de agua/lluvia',
  },
  {
    id: 'futbol',
    category: 'calzado',
    englishLabel: 'football boots',
    spanishLabel: 'las botas de fútbol',
  },
  {
    id: 'deportivas',
    category: 'calzado',
    englishLabel: 'sports / tennis shoes',
    spanishLabel: 'las deportivas / los tenis',
  },
  {
    id: 'tacones',
    category: 'calzado',
    englishLabel: 'high heels',
    spanishLabel: 'los tacones / los zapatos de tacón',
  },
  {
    id: 'zapatos',
    category: 'calzado',
    englishLabel: 'shoes',
    spanishLabel: 'los zapatos',
  },
  {
    id: 'pantuflas',
    category: 'calzado',
    englishLabel: 'house shoes / slippers',
    spanishLabel: 'las zapatillas de casa / las pantuflas',
  },
  {
    id: 'manoletinas',
    category: 'calzado',
    englishLabel: 'ballet flats',
    spanishLabel: 'las manoletinas',
  },
  {
    id: 'alpargatas',
    category: 'calzado',
    englishLabel: 'espadrilles',
    spanishLabel: 'las alpargatas',
  },
  {
    id: 'chanclasHavaianas',
    category: 'calzado',
    englishLabel: 'havaianas flip flops',
    spanishLabel: 'las chanclas havaianas',
  },
  {
    id: 'chanclas',
    category: 'calzado',
    englishLabel: 'flip flops',
    spanishLabel: 'las chanclas',
  },
  {
    id: 'sandalias',
    category: 'calzado',
    englishLabel: 'sandals',
    spanishLabel: 'las sandalias',
  },
  /////////////////////
  // los accesorios //
  ///////////////////
  {
    id: 'bufanda',
    category: 'accesorios',
    englishLabel: 'scarf',
    spanishLabel: 'la bufanda',
  },
  {
    id: 'pulsera',
    category: 'accesorios',
    englishLabel: 'bracelet',
    spanishLabel: 'la pulsera',
  },
  {
    id: 'corbata',
    category: 'accesorios',
    englishLabel: 'tie',
    spanishLabel: 'la corbata',
  },
  {
    id: 'pajarita',
    category: 'accesorios',
    englishLabel: 'bow tie',
    spanishLabel: 'la pajarita',
  },
  {
    id: 'panuelo',
    category: 'accesorios',
    englishLabel: 'handkerchief',
    spanishLabel: 'el pañuelo',
  },
  {
    id: 'cinturon',
    category: 'accesorios',
    englishLabel: 'belt',
    spanishLabel: 'el cinturón',
  },
  {
    id: 'anillo',
    category: 'accesorios',
    englishLabel: 'ring',
    spanishLabel: 'el anillo',
  },
  {
    id: 'collar',
    category: 'accesorios',
    englishLabel: 'necklace',
    spanishLabel: 'el collar',
  },
  {
    id: 'pendientes',
    category: 'accesorios',
    englishLabel: 'earrings',
    spanishLabel: 'los pendientes',
  },
  {
    id: 'lazo',
    category: 'accesorios',
    englishLabel: 'bow',
    spanishLabel: 'el lazo',
  },
  {
    id: 'reloj',
    category: 'accesorios',
    englishLabel: 'watch',
    spanishLabel: 'el reloj',
  },
  {
    id: 'sombrero',
    category: 'accesorios',
    englishLabel: 'hat (wide)',
    spanishLabel: 'el sombrero',
  },
  {
    id: 'gorra',
    category: 'accesorios',
    englishLabel: 'cap',
    spanishLabel: 'la gorra',
  },
  {
    id: 'gorro',
    category: 'accesorios',
    englishLabel: 'hat',
    spanishLabel: 'el gorro',
  },
  {
    id: 'gafas',
    category: 'accesorios',
    englishLabel: 'glasses',
    spanishLabel: 'las gafas',
  },
  {
    id: 'gafasSol',
    category: 'accesorios',
    englishLabel: 'sunglasses',
    spanishLabel: 'las gafas de sol',
  },
  {
    id: 'guantes',
    category: 'accesorios',
    englishLabel: 'gloves',
    spanishLabel: 'los guantes',
  },
  {
    id: 'monedero',
    category: 'accesorios',
    englishLabel: 'purse',
    spanishLabel: 'el monedero',
  },
  {
    id: 'paraguas',
    category: 'accesorios',
    englishLabel: 'umbrella',
    spanishLabel: 'el paraguas',
  },
  {
    id: 'bolso',
    category: 'accesorios',
    englishLabel: 'bag',
    spanishLabel: 'el bolso',
  },
]

export default function Page() {
  return (
    <div>
      <h1 className="mb-4 text-xl md:text-2xl">Clothes Cheatsheet</h1>
      <Cards
        cards={clothes.map((c) => ({
          ...c,
          imageUrl: `/learning/clothes/${c.id}.svg`,
        }))}
      />
    </div>
  )
}
