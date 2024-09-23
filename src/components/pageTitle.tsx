import { motion } from 'framer-motion'

interface pageTitleProps {
  text: string
}

export function PageTitle({ text }: pageTitleProps) {
  return (
    <>
      <motion.h2
        initial={{
          opacity: 0,
          x: -40,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.5,
          },
        }}
        viewport={{ once: true }}
        className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0"
      >
        {text}
      </motion.h2>
    </>
  )
}
