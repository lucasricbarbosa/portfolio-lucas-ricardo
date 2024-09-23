import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import profilePicture from '@/assets/big-profile-picture.png'
import graduationImg from '@/assets/graduation-img.png'
import { ListItem } from '@/components/aboutMePage/listItem'
import { SpotifyMusicPlayer } from '@/components/aboutMePage/spotifyMusicPlayer'
import { BuildTogether } from '@/components/buildTogether'
import { PageTitle } from '@/components/pageTitle'
import { SectionTitle } from '@/components/sectionTitle'
import { Button } from '@/components/ui/button'
import { listItems } from '@/utils/aboutMeListItens'

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
          className="h-full w-full max-w-80 rounded object-cover min-[400px]:min-w-80"
          src={profilePicture}
          alt=""
        />
        <section className="flex flex-col gap-5">
          <span className="text-base text-muted-foreground">
            Meu nome é João, mais conhecido como Biro e tenho 31 anos.
          </span>
          <span className="text-base text-muted-foreground">
            Sou um programador Front-end com em média 2 anos de experiência com
            essas tecnologias: HTML, CSS, JavaScript, TypeScript, Tailwind CSS,
            ReactJS, Next.js, Tailwind CSS, Git e GitHub e muito mais...
          </span>
          <span className="text-base text-muted-foreground">
            Ao longo da minha trajetória como instrutor técnico e programador
            front-end, adquiri experiência em metodologias ágeis como Scrum e
            Kanban. Estou disponível para contribuir com minha expertise em JS,
            TS, React, Next.js e Node.js para a sua equipe.
          </span>
          <span className="text-base text-muted-foreground">
            Além disso, gosto de construir projetos pessoais e produzir
            conteúdos para minhas redes sociais.
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
          Fora do âmbito profissional, sou um entusiasta de várias formas de
          arte e entretenimento. A música, em particular, ocupa um lugar
          especial no meu coração. Encontro consolo nos ritmos melódicos e na
          profundidade lírica de diversos gêneros, muitas vezes utilizando-a
          como fonte de inspiração durante minhas sessões de programação. Você
          pode conferir mais sobre meu gosto musical no meu perfil do Last.fm.
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
          Fora do âmbito profissional, sou um entusiasta de várias formas de
          arte e entretenimento. A música, em particular, ocupa um lugar
          especial no meu coração. Encontro consolo nos ritmos melódicos e na
          profundidade lírica de diversos gêneros, muitas vezes utilizando-a
          como fonte de inspiração durante minhas sessões de programação. Você
          pode conferir mais sobre meu gosto musical no meu perfil do Last.fm.
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
            Fora do âmbito profissional, sou um entusiasta de várias formas de
            arte e entretenimento. A música, em particular, ocupa um lugar
            especial no meu coração. Encontro consolo nos ritmos melódicos e na
            profundidade lírica de diversos gêneros, muitas vezes utilizando-a
            como fonte de inspiração durante minhas sessões de programação. Você
            pode conferir mais sobre meu gosto musical no meu perfil do Last.fm.
          </span>
          <nav className="grid grid-cols-1 items-center gap-4 pt-6 md:grid-cols-3 md:gap-5">
            <Button asChild className="" variant={'outline'}>
              <Link
                to={'/'}
                className="flex items-center justify-center gap-3 text-sm font-medium"
              >
                <Linkedin size={20} />
                LinkedIn
              </Link>
            </Button>
            <Button asChild className="" variant={'outline'}>
              <Link
                to={'/'}
                className="flex items-center justify-center gap-3 text-sm font-medium"
              >
                <Linkedin size={20} />
                LinkedIn
              </Link>
            </Button>
            <Button asChild className="" variant={'outline'}>
              <Link
                to={'/'}
                className="flex items-center justify-center gap-3 text-sm font-medium"
              >
                <Linkedin size={20} />
                LinkedIn
              </Link>
            </Button>
          </nav>
        </section>
        <BuildTogether />
      </motion.div>
    </>
  )
}
