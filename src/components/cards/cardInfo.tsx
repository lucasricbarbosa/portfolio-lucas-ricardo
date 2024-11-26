import { motion } from 'framer-motion';

interface CardInfoProps {
  cardInfoTitle: string;
  cardInfoSubtitle: string;
  cardInfoThirdText?: string;
  cardInfoImage: string;
  cardInfoAlt: string;
  delay?: number;
}

export function CardInfo({
  cardInfoSubtitle,
  cardInfoThirdText,
  cardInfoTitle,
  cardInfoImage,
  cardInfoAlt,
  delay,
}: CardInfoProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        // x: index % 2 === 0 ? -80 : 40, // Aplica animação apenas nos itens pares
        x: -80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
          delay,
        },
      }}
      viewport={{ once: true }}
      className="flex items-center gap-2"
    >
      <div className="overflow-hidden rounded border bg-white">
        <img className="size-12" src={cardInfoImage} alt={cardInfoAlt} />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-foreground">
          {cardInfoTitle}
        </h3>
        <p className="text-xs text-muted-foreground">{cardInfoSubtitle}</p>
        <p className="text-xs text-muted-foreground">{cardInfoThirdText}</p>
      </div>
    </motion.div>
  );
}
