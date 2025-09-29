import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
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
  return (
    <>
      <Helmet title="Sobre mim" />
      <PageTitle text="Sobre mim" />
      <motion.section
        initial={{
          opacity: 0,
          x: -40,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.5,
          },
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
            Meu nome é Lucas, sou formado em ADS e tenho 22 anos.
          </span>
          <span className="text-base text-muted-foreground">
            Sou um programador Front-end com em média 2 anos de experiência com
            essas tecnologias: HTML, CSS, JavaScript, TypeScript, Tailwind CSS,
            ReactJS, Next.js, Tailwind CSS, Git e GitHub e muito mais...
          </span>
          <span className="text-base text-muted-foreground">
            Ao longo da minha trajetória como programador e engenheiro
            full-stack e front-end, adquiri experiência em metodologias ágeis
            como Scrum e Kanban. Estou disponível para contribuir com minha
            expertise em JS, TS, React, Next.js e Node.js para a sua equipe.
          </span>
          <span className="text-base text-muted-foreground">
            Sou movido por desafios e sempre busco novas formas de melhorar
            minhas habilidades e expandir meu conhecimento.
          </span>
        </section>
      </motion.section>
      <motion.div
        initial={{
          opacity: 0,
          x: -40,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.5,
          },
        }}
        viewport={{ once: true }}
        className="mt-10"
      >
        <SectionTitle text="Resumo pessoal e profissional" />
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
        initial={{
          opacity: 0,
          x: -40,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.5,
          },
        }}
        viewport={{ once: true }}
        className="mt-10"
      >
        <SectionTitle text="Formação acadêmica" />
        <img
          className="aspect-video rounded object-cover"
          loading="lazy"
          src={graduationImg}
          alt=""
        />
        <p className="w-full pt-2 text-end text-sm italic text-muted-foreground">
          Apresentação projeto SAPEX
        </p>
        <span className="block pt-6">
          Sou formado em Análise e Desenvolvimento de Sistemas, onde tive a
          oportunidade de aprender desde a lógica de programação até o
          desenvolvimento de aplicações completas. Foi um período em que pude
          experimentar bastante, colocar a mão na massa em projetos práticos e
          despertar ainda mais meu interesse por criar soluções tecnológicas que
          realmente fazem a diferença.
        </span>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          x: -40,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.5,
          },
        }}
        viewport={{ once: true }}
        className="mt-10"
      >
        <SectionTitle text="Interesses pessoais" />
        <span>
          Fora do âmbito profissional, tenho uma grande paixão por música, que
          me acompanha no dia a dia e muitas vezes serve como inspiração durante
          minhas sessões de programação. Além disso, gosto bastante de futebol e
          videogames, que considero ótimas formas de lazer e também de manter a
          mente ativa. Essas atividades equilibram minha rotina, trazendo
          momentos de descontração e criatividade.
        </span>
        <section className="grid grid-cols-1 gap-x-5 pt-6 sm:grid-cols-2">
          <SpotifyMusicPlayer musicLink="0YPuRrM2NwzdtuShUKkts6" />
          <SpotifyMusicPlayer musicLink="37Tmv4NnfQeb0ZgUC4fOJj" />
          <SpotifyMusicPlayer musicLink="6Vfcu5p7cPcoVImKJ4gBhI" />
          <SpotifyMusicPlayer musicLink="5VBwLOZDyDWInNYIUniuZG" />
        </section>
        <section className="my-10">
          <SectionTitle text="Entre em contato comigo" />
          <span>
            Fora do âmbito profissional, tenho uma grande paixão por música, que
            me acompanha no dia a dia e muitas vezes serve como inspiração
            durante minhas sessões de programação. Além disso, gosto bastante de
            futebol e videogames, que considero ótimas formas de lazer e também
            de manter a mente ativa. Essas atividades equilibram minha rotina,
            trazendo momentos de descontração e criatividade.
          </span>
          <nav className="grid grid-cols-1 items-center gap-4 pt-6 md:grid-cols-2 md:gap-5">
            <Button asChild className="" variant={'outline'}>
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
            <Button asChild className="" variant={'outline'}>
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
