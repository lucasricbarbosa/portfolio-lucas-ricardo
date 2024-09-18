import { ChevronRight } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { CardInfo } from '@/components/cards/cardInfo'
import { DowloadCVButton } from '@/components/dowloadCVButton'
import { HomeHeaderProfile } from '@/components/home/homeHeaderProfile'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import blLogo from '../../assets/bl-logo.png'
import etecLogo from '../../assets/etec-logo.png'
import fsaLogo from '../../assets/fsa-logo.png'
import rocketseatLogo from '../../assets/rocketseat-logo.png'

export function Home() {
  return (
    <>
      <Helmet title="Teste" />
      <HomeHeaderProfile />
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Sobre mim</CardTitle>
          <Link
            className="flex items-center text-xs font-medium text-primary"
            to={'/'}
          >
            Ver mais <ChevronRight className="ml-1 size-3" />
          </Link>
        </CardHeader>
        <CardContent>
          <span className="text-muted-foreground">
            Hello, my name is Erick Nathan, I am a dedicated front-end
            developer, with extensive experience in technologies such as NodeJS
            and ReactJS, and a track record with notable clients such as Uber
            Chip, Correios Celular and Carrefour at Pagtel, specializing in
            robust and user-friendly solutions to the user, prioritizing
            scalability, accessibility and optimized performance.
          </span>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Sobre mim</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-start justify-between gap-3">
            <div className="flex max-h-fit flex-col gap-3 pb-4">
              <CardInfo
                cardInfoThirdText="2023 - Presente"
                cardInfoTitle="BL Comunicações"
                cardInfoSubtitle="Desenvolvedor Front-End"
                cardInfoAlt="Logotipo da empresa BL Comunicações"
                cardInfoImage={blLogo}
              />
              <CardInfo
                cardInfoThirdText="2023 - Presente"
                cardInfoTitle="BL Comunicações"
                cardInfoSubtitle="Desenvolvedor Front-End"
                cardInfoAlt="Logotipo da empresa BL Comunicações"
                cardInfoImage={blLogo}
              />
            </div>
            <DowloadCVButton />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Educação</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col justify-between gap-3">
            <CardInfo
              cardInfoThirdText="2023 - Cursando (1 ano)"
              cardInfoTitle="Rocketseat"
              cardInfoSubtitle="Formação full-stack"
              cardInfoAlt="Logotipo da empresa Rocketseat"
              cardInfoImage={rocketseatLogo}
            />
            <CardInfo
              cardInfoThirdText="2021 - 2023 (2 anos)"
              cardInfoTitle="Fundação Santo André"
              cardInfoSubtitle="Análise e desenvolvimento de sistemas"
              cardInfoAlt="Logotipo da empresa BL Comunicações"
              cardInfoImage={fsaLogo}
            />
            <CardInfo
              cardInfoThirdText="2018 - 2020 (3 anos)"
              cardInfoTitle="ETEC Júlio de Mesquita"
              cardInfoSubtitle="Técnico em mecatrônica"
              cardInfoAlt="Logotipo da empresa BL Comunicações"
              cardInfoImage={etecLogo}
            />
          </CardContent>
        </Card>
      </div>
    </>
  )
}
