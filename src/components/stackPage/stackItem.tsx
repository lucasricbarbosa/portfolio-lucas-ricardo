import { Button } from '../ui/button'

interface stackItemProps {
  name: string
  image: string
}

export function StackItem({ image, name }: stackItemProps) {
  return (
    <li className="flex w-full items-center text-sm font-semibold">
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
    </li>
  )
}
