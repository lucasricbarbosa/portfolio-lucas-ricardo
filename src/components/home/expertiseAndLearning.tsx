import frontEndLogo from '@/assets/front-end-development-logo.svg';
import googleLogo from '@/assets/google-logo.svg';
import reactLogo from '@/assets/react-logo.svg';
import uxUiLogo from '@/assets/ux-ui-logo.svg';
import webDevelopmentLogo from '@/assets/web-development-logo.svg';

import { CardInfo } from '../cards/cardInfo';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export function ExpertiseAndLearning() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Áreas de expertise</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-start justify-between gap-3">
          <CardInfo
            cardInfoTitle="Desenvolvimento Front-End"
            cardInfoSubtitle="NextJS, Typescript, React e muito mais"
            cardInfoAlt="Ícone de um link em um computador"
            cardInfoImage={frontEndLogo}
            delay={0.2}
          />
          <CardInfo
            cardInfoTitle="Desenvolvimento Full-Stack"
            cardInfoSubtitle="NextJS, Nest, Prisma e muito mais"
            cardInfoAlt="Ícone de um layput"
            cardInfoImage={webDevelopmentLogo}
            delay={0.5}
          />
          <CardInfo
            cardInfoTitle="UX/UI Designer"
            cardInfoSubtitle="Figma e Photoshop"
            cardInfoAlt="Ícone de um xadrez"
            cardInfoImage={uxUiLogo}
            delay={0.8}
          />
        </CardContent>
      </Card>
      <Card className="h-full">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Aprendendo</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col justify-between gap-3">
          <CardInfo
            cardInfoTitle="Melhoria em performance"
            cardInfoSubtitle="React"
            cardInfoAlt="Logotipo React"
            cardInfoImage={reactLogo}
            delay={0.2}
          />
          <CardInfo
            cardInfoTitle="Implementação em nuvem"
            cardInfoSubtitle="Google"
            cardInfoAlt="Logotipo do Google"
            cardInfoImage={googleLogo}
            delay={0.5}
          />
          <CardInfo
            cardInfoTitle="Websocket"
            cardInfoSubtitle="Nest/Node"
            cardInfoAlt="Logotipo do Socket.io"
            cardInfoImage="https://images.saasworthy.com/tr:w-160,h-0,c-at_max,e-sharpen-1/socketio_30421_logo_1619604506_tdxqo.png"
            delay={0.5}
          />
        </CardContent>
      </Card>
    </div>
  );
}
