import { CardInfo } from '@/components/cards/cardInfo';
import { DowloadCVButton } from '@/components/dowloadCVButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { studies } from '@/utils/studies';
import { workplaces } from '@/utils/workplaces';

export function ExperiencesAndEducation() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Sobre mim</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-start justify-between gap-3">
          <div className="flex max-h-fit flex-col gap-3 pb-4">
            {workplaces.map((workplace, index) => (
              <CardInfo
                key={index}
                cardInfoThirdText={workplace.cardInfoThirdText}
                cardInfoTitle={workplace.cardInfoTitle}
                cardInfoSubtitle={workplace.cardInfoSubtitle}
                cardInfoAlt={workplace.cardInfoAlt}
                cardInfoImage={workplace.cardInfoImage}
                delay={workplace.delay}
              />
            ))}
          </div>
          <DowloadCVButton />
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Educação</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col justify-between gap-3">
          {studies.map((study, index) => (
            <CardInfo
              key={index}
              cardInfoThirdText={study.cardInfoThirdText}
              cardInfoTitle={study.cardInfoTitle}
              cardInfoSubtitle={study.cardInfoSubtitle}
              cardInfoAlt={study.cardInfoAlt}
              cardInfoImage={study.cardInfoImage}
              delay={study.delay}
            />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
