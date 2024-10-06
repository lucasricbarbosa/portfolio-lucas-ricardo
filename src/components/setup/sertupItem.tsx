import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface SetupListItemProps {
  imageName: string
  imageUrl: string
  productLink: string
  delay: number
}

export function SetupItem({
  imageName,
  imageUrl,
  productLink,
  delay,
}: SetupListItemProps) {
  return (
    <motion.li
      className="h-full shadow"
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
    >
      <Link
        className="flex h-full flex-col rounded border px-4 py-5 transition-all duration-500 hover:scale-105 hover:bg-secondary"
        to={productLink}
      >
        <img
          className="aspect-square w-full rounded object-contain transition-all duration-500 hover:scale-105"
          loading="lazy"
          src={imageUrl}
          alt={`Imagem do produto ${imageName}`}
        />
        <span className="mt-5 line-clamp-2 w-full text-center text-sm font-medium">
          {imageName}
        </span>
      </Link>
    </motion.li>
  )
}
