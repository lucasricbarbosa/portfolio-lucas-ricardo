import { motion } from 'framer-motion'

import { Button } from '../ui/button'

interface stackItemProps {
  name: string
  image: string
  delay: number
}

export function StackItem({ image, name, delay }: stackItemProps) {
  return (
    <motion.li
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
      className="flex w-full items-center text-sm font-semibold"
    >
      <Button
        variant={'secondary'}
        className="h-full w-full justify-start bg-muted"
      >
        <div className="relative mr-3 flex size-12 items-center justify-center overflow-hidden rounded">
          <img
            className="z-20 aspect-square size-6 rounded"
            src={image}
            alt=""
          />
          <img
            className="absolute inset-0 top-4 z-0 aspect-square size-12 rounded opacity-60 blur-lg"
            src={image}
            alt=""
          />
        </div>{' '}
        <span>{name}</span>
      </Button>
    </motion.li>
  )
}
