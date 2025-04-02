export interface StacksProps {
  name: string;
  image: string;
  url: string;
}

export interface CategoryProps {
  title: string;
  items: StacksProps[];
}

const stacksList: CategoryProps[] = [
  {
    title: 'Frontend',
    items: [
      {
        name: 'React',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        url: 'https://react.dev/',
      },
      {
        name: 'Typescript',
        image:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        url: 'https://www.typescriptlang.org/',
      },
      {
        name: 'Next.js',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg',
        url: 'https://nextjs.org/',
      },
      {
        name: 'Javascript',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      {
        name: 'HTML',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      },
      {
        name: 'CSS',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      },
      {
        name: 'Styled Components',
        image: 'https://styled-components.com/logo.png',
        url: 'https://styled-components.com/',
      },
      {
        name: 'Tailwind',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
        url: 'https://tailwindcss.com/',
      },
      {
        name: 'Redux',
        image: 'https://cdn.worldvectorlogo.com/logos/redux.svg',
        url: 'https://redux.js.org/',
      },
      {
        name: 'React Router',
        image: 'https://reactrouter.com/favicon-light.png',
        url: 'https://reactrouter.com/',
      },
      {
        name: 'Tanstack Query',
        image:
          'https://react-query-v3.tanstack.com/_next/static/images/logo-3d90e510d3b4f3fa8b8f0e98489973f0.svg',
        url: 'https://tanstack.com/query/latest',
      },
      {
        name: 'Socket.IO',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg',
        url: 'https://socket.io/',
      },
      {
        name: 'Zod',
        image: 'https://avatars.githubusercontent.com/u/6764390?s=200&v=4',
        url: 'https://zod.dev/',
      },
      {
        name: 'Angular',
        image: 'https://angular.io/assets/images/logos/angular/angular.svg',
        url: 'https://angular.io/',
      },
      {
        name: 'Framer Motion',
        image: 'https://framer.com/images/social/framer-motion.png',
        url: 'https://www.framer.com/motion/',
      },
      {
        name: 'Zustand',
        image: 'https://avatars.githubusercontent.com/u/72658837?s=200&v=4',
        url: 'https://zustand-demo.pmnd.rs/',
      },
      {
        name: 'i18n',
        image: 'https://www.i18next.com/static/favicon/favicon-32x32.png',
        url: 'https://www.i18next.com/',
      },
      {
        name: 'Radix',
        image: 'https://avatars.githubusercontent.com/u/30573078?s=200&v=4',
        url: 'https://www.radix-ui.com/',
      },
    ],
  },
  {
    title: 'Testes',
    items: [
      {
        name: 'Cypress',
        image: 'https://nodejs.org/static/images/logo.svg',
        url: 'https://nodejs.org/',
      },
      {
        name: 'Playwright',
        image: 'https://nestjs.com/img/logo-small.svg',
        url: 'https://nestjs.com/',
      },
      {
        name: 'Vitest',
        image: 'https://cdn.worldvectorlogo.com/logos/prisma-2.svg',
        url: 'https://www.prisma.io/',
      },
    ],
  },
  {
    title: 'Design',
    items: [
      {
        name: 'Adobe Photoshop',
        image: 'https://nodejs.org/static/images/logo.svg',
        url: 'https://nodejs.org/',
      },
      {
        name: 'Adobe XD',
        image: 'https://nestjs.com/img/logo-small.svg',
        url: 'https://nestjs.com/',
      },
      {
        name: 'Figma',
        image: 'https://cdn.worldvectorlogo.com/logos/prisma-2.svg',
        url: 'https://www.prisma.io/',
      },
      {
        name: 'Canva',
        image: 'https://avatars.githubusercontent.com/u/114772946?s=200&v=4',
        url: 'https://shadcn.dev/',
      },
    ],
  },
  {
    title: 'Backend',
    items: [
      {
        name: 'Node.js',
        image: 'https://nodejs.org/static/images/logo.svg',
        url: 'https://nodejs.org/',
      },
      {
        name: 'Express',
        image: 'https://nodejs.org/static/images/logo.svg',
        url: 'https://nodejs.org/',
      },
      {
        name: 'Javascript',
        image: 'https://nestjs.com/img/logo-small.svg',
        url: 'https://nestjs.com/',
      },
      {
        name: 'Typescript',
        image: 'https://cdn.worldvectorlogo.com/logos/prisma-2.svg',
        url: 'https://www.prisma.io/',
      },
      {
        name: 'Prisma',
        image: 'https://avatars.githubusercontent.com/u/114772946?s=200&v=4',
        url: 'https://shadcn.dev/',
      },
      {
        name: 'TypeORM',
        image: 'https://mui.com/static/logo.png',
        url: 'https://mui.com/',
      },
      {
        name: 'Java',
        image: 'https://mui.com/static/logo.png',
        url: 'https://mui.com/',
      },
      {
        name: 'Nest',
        image: 'https://mui.com/static/logo.png',
        url: 'https://mui.com/',
      },
      {
        name: 'Socket.IO',
        image: 'https://mui.com/static/logo.png',
        url: 'https://mui.com/',
      },
    ],
  },
  {
    title: 'Documentação',
    items: [
      {
        name: 'Swagger',
        image: 'https://nodejs.org/static/images/logo.svg',
        url: 'https://nodejs.org/',
      },
      {
        name: 'Storybook',
        image: 'https://nestjs.com/img/logo-small.svg',
        url: 'https://nestjs.com/',
      },
      {
        name: 'GitBook',
        image: 'https://cdn.worldvectorlogo.com/logos/prisma-2.svg',
        url: 'https://www.prisma.io/',
      },
    ],
  },
  {
    title: 'Banco de dados',
    items: [
      {
        name: 'MySQL',
        image: 'https://nodejs.org/static/images/logo.svg',
        url: 'https://nodejs.org/',
      },
      {
        name: 'PostgreSQL',
        image: 'https://nestjs.com/img/logo-small.svg',
        url: 'https://nestjs.com/',
      },
      {
        name: 'GitBook',
        image: 'https://cdn.worldvectorlogo.com/logos/prisma-2.svg',
        url: 'https://www.prisma.io/',
      },
    ],
  },
  {
    title: 'Infraestrutura',
    items: [
      {
        name: 'Docker',
        image: 'https://nodejs.org/static/images/logo.svg',
        url: 'https://nodejs.org/',
      },
      {
        name: 'Firebase',
        image: 'https://nestjs.com/img/logo-small.svg',
        url: 'https://nestjs.com/',
      },
      {
        name: 'Vercel',
        image: 'https://cdn.worldvectorlogo.com/logos/prisma-2.svg',
        url: 'https://www.prisma.io/',
      },
      {
        name: 'Render',
        image: 'https://cdn.worldvectorlogo.com/logos/prisma-2.svg',
        url: 'https://www.prisma.io/',
      },
      {
        name: 'Google Cloud',
        image: 'https://cdn.worldvectorlogo.com/logos/prisma-2.svg',
        url: 'https://www.prisma.io/',
      },
    ],
  },
  {
    title: 'Versionamento',
    items: [
      {
        name: 'Git',
        image: 'https://nodejs.org/static/images/logo.svg',
        url: 'https://nodejs.org/',
      },
      {
        name: 'Github',
        image: 'https://nestjs.com/img/logo-small.svg',
        url: 'https://nestjs.com/',
      },
      {
        name: 'Gitlab',
        image: 'https://cdn.worldvectorlogo.com/logos/prisma-2.svg',
        url: 'https://www.prisma.io/',
      },
    ],
  },
  {
    title: 'Extensões e plugins',
    items: [
      {
        name: 'Dark Reader',
        image: 'https://nodejs.org/static/images/logo.svg',
        url: 'https://nodejs.org/',
      },
      {
        name: 'Gitlens',
        image: 'https://nestjs.com/img/logo-small.svg',
        url: 'https://nestjs.com/',
      },
      {
        name: 'ESLint',
        image: 'https://cdn.worldvectorlogo.com/logos/prisma-2.svg',
        url: 'https://www.prisma.io/',
      },
      {
        name: 'Prettier',
        image: 'https://cdn.worldvectorlogo.com/logos/prisma-2.svg',
        url: 'https://www.prisma.io/',
      },
      {
        name: 'Material Icon Theme',
        image: 'https://cdn.worldvectorlogo.com/logos/prisma-2.svg',
        url: 'https://www.prisma.io/',
      },
      {
        name: 'Omni Theme',
        image: 'https://cdn.worldvectorlogo.com/logos/prisma-2.svg',
        url: 'https://www.prisma.io/',
      },
      {
        name: 'Error Lens',
        image: 'https://cdn.worldvectorlogo.com/logos/prisma-2.svg',
        url: 'https://www.prisma.io/',
      },
      {
        name: 'Night Owl',
        image: 'https://cdn.worldvectorlogo.com/logos/prisma-2.svg',
        url: 'https://www.prisma.io/',
      },
      {
        name: 'Rest Client',
        image: 'https://cdn.worldvectorlogo.com/logos/prisma-2.svg',
        url: 'https://www.prisma.io/',
      },
      {
        name: 'Wappalyzer',
        image: 'https://cdn.worldvectorlogo.com/logos/prisma-2.svg',
        url: 'https://www.prisma.io/',
      },
      {
        name: 'Codeium',
        image: 'https://cdn.worldvectorlogo.com/logos/prisma-2.svg',
        url: 'https://www.prisma.io/',
      },
    ],
  },
];

export const sortedStacksList = stacksList.map((category) => ({
  ...category,
  items: category.items.sort((a, b) => a.name.localeCompare(b.name)),
}));
