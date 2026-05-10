import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import graduationImg from '@/assets/graduation-img.png';
import profilePicture from '@/assets/profile-picture-2.jpg';
import { ListItem } from '@/components/aboutMePage/listItem';
import { SpotifyMusicPlayer } from '@/components/aboutMePage/spotifyMusicPlayer';
import { BuildTogether } from '@/components/buildTogether';
import { PageTitle } from '@/components/pageTitle';
import { SectionTitle } from '@/components/sectionTitle';
import { Button } from '@/components/ui/button';
import { listItems } from '@/utils/aboutMeListItens';

export function AboutMe() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet title={t('aboutMe.pageTitle')} />
      <PageTitle text={t('aboutMe.pageTitle')} />
      <motion.section
        initial={{ opacity: 0, x: -40 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5 },
        }}
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-5 lg:grid-cols-[3fr_6fr] lg:gap-8"
      >
        <img
          className="h-[360px] w-full max-w-80 rounded object-cover min-[400px]:min-w-80"
          src={profilePicture}
          alt=""
        />
        <section className="flex flex-col gap-5">
          <span className="text-base text-muted-foreground">
            {t('aboutMe.intro1')}
          </span>
          <span className="text-base text-muted-foreground">
            {t('aboutMe.intro2')}
          </span>
          <span className="text-base text-muted-foreground">
            {t('aboutMe.intro3')}
          </span>
          <span className="text-base text-muted-foreground">
            {t('aboutMe.intro4')}
          </span>
        </section>
      </motion.section>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5 },
        }}
        viewport={{ once: true }}
        className="mt-10"
      >
        <SectionTitle text={t('aboutMe.personalSummary')} />
        <ul className="flex list-disc flex-col gap-5 pl-5 first:pt-6">
          {listItems.map((item, index) => (
            <ListItem
              key={index}
              delay={0.15 * index}
              listName={item.name}
              listContent={item.content}
            />
          ))}
        </ul>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5 },
        }}
        viewport={{ once: true }}
        className="mt-10"
      >
        <SectionTitle text={t('aboutMe.academicBackground')} />
        <img
          className="aspect-video rounded object-cover"
          loading="lazy"
          src={graduationImg}
          alt=""
        />
        <p className="w-full pt-2 text-end text-sm italic text-muted-foreground">
          {t('aboutMe.projectCaption')}
        </p>
        <span className="block pt-6">{t('aboutMe.academicDescription')}</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5 },
        }}
        viewport={{ once: true }}
        className="mt-10"
      >
        <SectionTitle text={t('aboutMe.personalInterests')} />
        <span>{t('aboutMe.personalInterestsDescription')}</span>
        <section className="grid grid-cols-1 gap-x-5 pt-6 sm:grid-cols-2">
          <SpotifyMusicPlayer musicLink="0YPuRrM2NwzdtuShUKkts6" />
          <SpotifyMusicPlayer musicLink="37Tmv4NnfQeb0ZgUC4fOJj" />
          <SpotifyMusicPlayer musicLink="6Vfcu5p7cPcoVImKJ4gBhI" />
          <SpotifyMusicPlayer musicLink="5VBwLOZDyDWInNYIUniuZG" />
        </section>
        <section className="my-10">
          <SectionTitle text={t('aboutMe.contactMe')} />
          <span>{t('aboutMe.contactDescription')}</span>
          <nav className="grid grid-cols-1 items-center gap-4 pt-6 md:grid-cols-2 md:gap-5">
            <Button asChild variant={'outline'}>
              <Link
                to={'https://www.linkedin.com/in/lucas-ricardo-barbosa/'}
                className="flex items-center justify-center gap-3 text-sm font-medium"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={20} />
                LinkedIn
              </Link>
            </Button>
            <Button asChild variant={'outline'}>
              <a
                href="mailto:lucasricardobarb@gmail.com"
                className="flex items-center justify-center gap-3 text-sm font-medium"
              >
                <Mail size={20} />
                E-mail
              </a>
            </Button>
          </nav>
        </section>
        <BuildTogether />
      </motion.div>
    </>
  );
}
