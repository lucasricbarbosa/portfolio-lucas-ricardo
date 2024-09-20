import profilePicture from '../assets/big-profile-picture.png'

interface pageTitleProps {
  text: string
}

export function PageTitle({ text }: pageTitleProps) {
  return (
    <>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {text}
      </h2>
      <section className="grid grid-cols-1 gap-8 lg:grid-cols-[3fr_6fr]">
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
      </section>
    </>
  )
}
