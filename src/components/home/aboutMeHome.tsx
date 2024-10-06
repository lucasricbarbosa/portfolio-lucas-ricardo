import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

export function AboutMeHome() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Sobre mim</CardTitle>
        <Link
          className="flex items-center text-xs font-medium text-primary"
          to={'/pt-BR/sobre-mim'}
        >
          Ver mais <ChevronRight className="ml-1 size-3" />
        </Link>
      </CardHeader>
      <CardContent>
        <span className="text-muted-foreground">
          Hello, my name is Lucas Ricardo, I am a dedicated front-end developer,
          with extensive experience in technologies such as NodeJS and ReactJS,
          and a track record with notable clients such as Uber Chip, Correios
          Celular and Carrefour at Pagtel, specializing in robust and
          user-friendly solutions to the user, prioritizing scalability,
          accessibility and optimized performance.
        </span>
      </CardContent>
    </Card>
  )
}
