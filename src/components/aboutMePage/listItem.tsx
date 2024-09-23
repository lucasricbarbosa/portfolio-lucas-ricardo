import { motion } from 'framer-motion'

interface listItemProps {
  listName: string
  listContent: string
  delay: number
}

export function ListItem({ listContent, listName, delay }: listItemProps) {
  return (
    <motion.li
      initial={{
        opacity: 0,
        x: -40,
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
      <strong className="font-semibold">{listName}</strong>: {listContent}
    </motion.li>
  )
}
