import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

import { BuildTogether } from '@/components/buildTogether';
import { AboutMeHome } from '@/components/home/aboutMeHome';
import { ExperiencesAndEducation } from '@/components/home/experiencesAndEducation';
import { ExpertiseAndLearning } from '@/components/home/expertiseAndLearning';
import { HomeHeaderProfile } from '@/components/home/homeHeaderProfile';
import { Projects } from '@/components/home/projects';

export function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet title={t('nav.home')} />
      <HomeHeaderProfile />
      <AboutMeHome />
      <ExperiencesAndEducation />
      <Projects />
      <ExpertiseAndLearning />
      <BuildTogether />
    </>
  );
}
