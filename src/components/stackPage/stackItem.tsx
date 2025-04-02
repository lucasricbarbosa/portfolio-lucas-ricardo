import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { Button } from '../ui/button';

interface StackItemProps {
  name: string;
  image: string;
  delay: number;
  url: string;
}

export function StackItem({ image, name, delay, url }: StackItemProps) {
  return (
    <motion.li
      initial={{
        opacity: 0,
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
      <Link to={url} className="block w-full" target="_blank">
        <Button
          variant={'secondary'}
          className="h-16 w-full justify-start bg-muted/50"
        >
          <div className="relative mr-3 flex size-12 min-h-12 min-w-12 items-center justify-center overflow-hidden rounded">
            <img
              className="z-20 aspect-square size-6 min-h-6 min-w-6 rounded"
              src={image}
              alt=""
            />
            <img
              className="absolute inset-0 top-4 z-0 aspect-square size-12 rounded opacity-90 blur-lg"
              src={image}
              alt=""
            />
          </div>{' '}
          <span className="whitespace-normal break-words text-left text-xs md:text-sm">
            {name}
          </span>
        </Button>
      </Link>
    </motion.li>
  );
}
