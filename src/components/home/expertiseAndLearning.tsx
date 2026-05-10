import { useTranslation } from 'react-i18next';

import frontEndLogo from '@/assets/front-end-development-logo.svg';
import googleLogo from '@/assets/google-logo.svg';
import reactLogo from '@/assets/react-logo.svg';
import uxUiLogo from '@/assets/ux-ui-logo.svg';
import webDevelopmentLogo from '@/assets/web-development-logo.svg';

import { CardInfo } from '../cards/cardInfo';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export function ExpertiseAndLearning() {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>{t('home.expertise.title')}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-start justify-between gap-3">
          <CardInfo
            cardInfoTitle={t('expertise.frontEnd.title')}
            cardInfoSubtitle={t('expertise.frontEnd.subtitle')}
            cardInfoAlt={t('expertise.frontEnd.alt')}
            cardInfoImage={frontEndLogo}
            delay={0.2}
          />
          <CardInfo
            cardInfoTitle={t('expertise.fullStack.title')}
            cardInfoSubtitle={t('expertise.fullStack.subtitle')}
            cardInfoAlt={t('expertise.fullStack.alt')}
            cardInfoImage={webDevelopmentLogo}
            delay={0.5}
          />
          <CardInfo
            cardInfoTitle={t('expertise.uxui.title')}
            cardInfoSubtitle={t('expertise.uxui.subtitle')}
            cardInfoAlt={t('expertise.uxui.alt')}
            cardInfoImage={uxUiLogo}
            delay={0.8}
          />
        </CardContent>
      </Card>
      <Card className="h-full">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>{t('home.learning.title')}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col justify-between gap-3">
          <CardInfo
            cardInfoTitle={t('learning.performance.title')}
            cardInfoSubtitle={t('learning.performance.subtitle')}
            cardInfoAlt={t('learning.performance.alt')}
            cardInfoImage={reactLogo}
            delay={0.2}
          />
          <CardInfo
            cardInfoTitle={t('learning.cloud.title')}
            cardInfoSubtitle={t('learning.cloud.subtitle')}
            cardInfoAlt={t('learning.cloud.alt')}
            cardInfoImage={googleLogo}
            delay={0.5}
          />
          <CardInfo
            cardInfoTitle={t('learning.websocket.title')}
            cardInfoSubtitle={t('learning.websocket.subtitle')}
            cardInfoAlt={t('learning.websocket.alt')}
            cardInfoImage="https://images.saasworthy.com/tr:w-160,h-0,c-at_max,e-sharpen-1/socketio_30421_logo_1619604506_tdxqo.png"
            delay={0.5}
          />
        </CardContent>
      </Card>
    </div>
  );
}
