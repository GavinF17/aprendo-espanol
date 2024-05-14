import Image from 'next/image'

type CardProps = {
  id: string
  englishLabel: string
  spanishLabel: string
  imageUrl?: string
  bgColor?: string
}

function Card({
  id,
  englishLabel,
  spanishLabel,
  imageUrl,
  bgColor,
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
        className={`flex justify-center ${bgColor ?? 'bg-white'} rounded-xl px-4 py-8`}
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
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((c) => (
        <Card key={c.id} {...c} />
      ))}
    </div>
  )
}
