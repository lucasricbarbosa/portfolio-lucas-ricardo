interface CardInfoProps {
  cardInfoTitle: string
  cardInfoSubtitle: string
  cardInfoThirdText?: string
  cardInfoImage: string
  cardInfoAlt: string
}

export function CardInfo({
  cardInfoSubtitle,
  cardInfoThirdText,
  cardInfoTitle,
  cardInfoImage,
  cardInfoAlt,
}: CardInfoProps) {
  return (
    <div className="flex items-center gap-2">
      <img
        className="size-12 rounded border"
        src={cardInfoImage}
        alt={cardInfoAlt}
      />
      <div>
        <h3 className="text-sm font-semibold text-foreground">
          {cardInfoTitle}
        </h3>
        <p className="text-xs text-muted-foreground">{cardInfoSubtitle}</p>
        <p className="text-xs text-muted-foreground">{cardInfoThirdText}</p>
      </div>
    </div>
  )
}
