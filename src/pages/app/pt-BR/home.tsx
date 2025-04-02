import { Helmet } from 'react-helmet-async';

import { BuildTogether } from '@/components/buildTogether';
import { AboutMeHome } from '@/components/home/aboutMeHome';
import { ExperiencesAndEducation } from '@/components/home/experiencesAndEducation';
import { ExpertiseAndLearning } from '@/components/home/expertiseAndLearning';
import { HomeHeaderProfile } from '@/components/home/homeHeaderProfile';
import { Projects } from '@/components/home/projects';

export function Home() {
  return (
    <>
      <Helmet title="Home" />
      <HomeHeaderProfile />

      {/* Sobre mim -=-=-=-==-==-==-==-=-=- */}
      <AboutMeHome />

      {/* Experiências e Educação -=-=-=-==-==-==-==-=-=- */}
      <ExperiencesAndEducation />

      {/* Projetos -=-=-=-==-==-==-==-=-=- */}
      <Projects />

      {/* Áreas de expertise e Aprendendo -=-=-=-==-==-==-==-=-=- */}
      <ExpertiseAndLearning />

      {/* Construir algo juntos -=-=-=-==-==-==-==-=-=- */}
      <BuildTogether />
    </>
  );
}
