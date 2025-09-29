import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

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
          Meu nome é Lucas Ricardo Barbosa, sou formado em Análise e
          Desenvolvimento de Sistemas e tenho construído minha carreira na área
          de desenvolvimento de software, atuando principalmente como
          desenvolvedor full-stack. Com experiência em diversas tecnologias,
          tais como React, Node, Typescript, Next.js, React Native, entre
          outras.
        </span>
      </CardContent>
    </Card>
  );
}
