import { Helmet } from 'react-helmet-async'

import { BuildTogether } from '@/components/buildTogether'
import { CardInfo } from '@/components/cards/cardInfo'
import { DowloadCVButton } from '@/components/dowloadCVButton'
import { AboutMeHome } from '@/components/home/aboutMeHome'
import { ExpertiseAndLearning } from '@/components/home/expertiseAndLearning'
import { HomeHeaderProfile } from '@/components/home/homeHeaderProfile'
import { Projects } from '@/components/home/projects'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import blLogo from '../../../assets/bl-logo.png'
import etecLogo from '../../../assets/etec-logo.png'
import fsaLogo from '../../../assets/fsa-logo.png'
import rocketseatLogo from '../../../assets/rocketseat-logo.png'

export function Home() {
  return (
    <>
      <Helmet title="Home" />
      <HomeHeaderProfile />

      {/* Sobre mim -=-=-=-==-==-==-==-=-=- */}
      <AboutMeHome />

      {/* Experiências e Educação -=-=-=-==-==-==-==-=-=- */}
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
                delay={0.2}
              />
              <CardInfo
                cardInfoThirdText="2023 - Presente"
                cardInfoTitle="BL Comunicações"
                cardInfoSubtitle="Desenvolvedor Front-End"
                cardInfoAlt="Logotipo da empresa BL Comunicações"
                cardInfoImage={blLogo}
                delay={0.5}
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
              delay={0.7}
            />
            <CardInfo
              cardInfoThirdText="2021 - 2023 (2 anos)"
              cardInfoTitle="Fundação Santo André"
              cardInfoSubtitle="Análise e desenvolvimento de sistemas"
              cardInfoAlt="Logotipo da empresa BL Comunicações"
              cardInfoImage={fsaLogo}
              delay={1}
            />
            <CardInfo
              cardInfoThirdText="2018 - 2020 (3 anos)"
              cardInfoTitle="ETEC Júlio de Mesquita"
              cardInfoSubtitle="Técnico em mecatrônica"
              cardInfoAlt="Logotipo da empresa BL Comunicações"
              cardInfoImage={etecLogo}
              delay={1.2}
            />
          </CardContent>
        </Card>
      </div>

      {/* Projetos -=-=-=-==-==-==-==-=-=- */}
      <Projects />

      {/* Áreas de expertise e Aprendendo -=-=-=-==-==-==-==-=-=- */}
      <ExpertiseAndLearning />

      {/* Construir algo juntos -=-=-=-==-==-==-==-=-=- */}
      <BuildTogether />
    </>
  )
}
