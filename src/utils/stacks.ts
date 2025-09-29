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
        image: 'https://i.imgur.com/Kqxbl5Q.png',
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
        image:
          'https://user-images.githubusercontent.com/38039349/60953119-d3c6f300-a2fc-11e9-9596-4978e5d52180.png',
        url: 'https://www.framer.com/motion/',
      },
      {
        name: 'Zustand',
        image: 'https://avatars.githubusercontent.com/u/72658837?s=200&v=4',
        url: 'https://zustand-demo.pmnd.rs/',
      },
      {
        name: 'i18n',
        image:
          'https://miro.medium.com/v2/resize:fit:806/1*B7NETmU4gIYjuUaAyP9p5g.png',
        url: 'https://www.i18next.com/',
      },
      {
        name: 'Radix',
        image: 'https://avatars.githubusercontent.com/u/75042455?s=280&v=4',
        url: 'https://www.radix-ui.com/',
      },
    ],
  },
  {
    title: 'Testes',
    items: [
      {
        name: 'Cypress',
        image:
          'https://yt3.googleusercontent.com/MHW3vhUeDZZIKMm-T63-zkvPQsYab4OpbyvT8ifxmfz0E-fqIWj9r8tP4qITq2KLWI2eqK7q3A=s900-c-k-c0x00ffffff-no-rj',
        url: 'https://nodejs.org/',
      },
      {
        name: 'Playwright',
        image: 'https://playwright.dev/img/playwright-logo.svg',
        url: 'https://nestjs.com/',
      },
      {
        name: 'Vitest',
        image: 'https://vitest.dev/logo-shadow.svg',
        url: 'https://www.prisma.io/',
      },
    ],
  },
  {
    title: 'Design',
    items: [
      {
        name: 'Adobe Photoshop',
        image:
          'https://s2-techtudo.glbimg.com/4rMDrjzK4ysRN0ISLUzkJg3NdoY=/fit-in/324x299/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/W/I/KJltLYRo67CdyeX5yD2g/screenshot-2023-02-04-at-13.07.18.png',
        url: 'https://nodejs.org/',
      },
      {
        name: 'Adobe XD',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/1200px-Adobe_XD_CC_icon.svg.png',
        url: 'https://nestjs.com/',
      },
      {
        name: 'Figma',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62LVhts8-ERiNmlrfHQShVXasUYH38KKSRw&s',
        url: 'https://www.prisma.io/',
      },
      {
        name: 'Canva',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBQbNiqqZaOQ7ISQi9agBPmkChmcz4PKEbQQ&s',
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
        image: 'https://cdn.worldvectorlogo.com/logos/expressjs.svg',
        url: 'https://nodejs.org/',
      },
      {
        name: 'Javascript',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png',
        url: 'https://nestjs.com/',
      },
      {
        name: 'Typescript',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png',
        url: 'https://www.prisma.io/',
      },
      {
        name: 'Prisma',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLaYNkM-x8BzdMkvxae3kw-zosF1t43WLMvg&s',
        url: 'https://www.prisma.io/',
      },
      {
        name: 'TypeORM',
        image:
          'https://images.seeklogo.com/logo-png/44/1/typeorm-logo-png_seeklogo-443592.png',
        url: 'https://mui.com/',
      },
      {
        name: 'Java',
        image: 'https://cdn.worldvectorlogo.com/logos/java.svg',
        url: 'https://mui.com/',
      },
      {
        name: 'Nest',
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg',
        url: 'https://mui.com/',
      },
      {
        name: 'Socket.IO',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg',
        url: 'https://mui.com/',
      },
    ],
  },
  {
    title: 'Documentação',
    items: [
      {
        name: 'Swagger',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/a/ab/Swagger-logo.png',
        url: 'https://nodejs.org/',
      },
      {
        name: 'Storybook',
        image: 'https://www.svgrepo.com/show/354397/storybook-icon.svg',
        url: 'https://nestjs.com/',
      },
      {
        name: 'GitBook',
        image: 'https://www.svgrepo.com/show/376323/gitbook.svg',
        url: 'https://www.prisma.io/',
      },
    ],
  },
  {
    title: 'Banco de dados',
    items: [
      {
        name: 'MySQL',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb9eimO5lZLpyM-qYudMVu6KTPj4U2RL715g&s',
        url: 'https://nodejs.org/',
      },
      {
        name: 'PostgreSQL',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1163px-Postgresql_elephant.svg.png',
        url: 'https://nestjs.com/',
      },
      {
        name: 'GitBook',
        image: 'https://www.svgrepo.com/show/376323/gitbook.svg',
        url: 'https://www.prisma.io/',
      },
    ],
  },
  {
    title: 'Infraestrutura',
    items: [
      {
        name: 'Docker',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS10zOHBiK2OveAeoSOr2_EPxyim_njN1ZeQw&s',
        url: 'https://nodejs.org/',
      },
      {
        name: 'Firebase',
        image:
          'https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png?hl=pt-br',
        url: 'https://nestjs.com/',
      },
      {
        name: 'Vercel',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFggf9yNRN9xCYku8XMEkSE0LU9uMhkYbehQ&s',
        url: 'https://www.prisma.io/',
      },
      {
        name: 'Render',
        image:
          'https://images.seeklogo.com/logo-png/53/1/render-logo-png_seeklogo-532232.png',
        url: 'https://www.prisma.io/',
      },
      {
        name: 'Google Cloud',
        image:
          'https://images.seeklogo.com/logo-png/33/1/google-cloud-logo-png_seeklogo-336116.png',
        url: 'https://www.prisma.io/',
      },
    ],
  },
  {
    title: 'Versionamento',
    items: [
      {
        name: 'Git',
        image: 'https://git-scm.com/images/logos/logomark-orange@2x.png',
        url: 'https://nodejs.org/',
      },
      {
        name: 'Github',
        image:
          'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',
        url: 'https://nestjs.com/',
      },
      {
        name: 'Gitlab',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNXu0b8AFSG1VWmGyE4jwfha6IWTR3ITZYKg&s',
        url: 'https://www.prisma.io/',
      },
    ],
  },
  {
    title: 'Extensões e plugins',
    items: [
      {
        name: 'Dark Reader',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRzAVZHXCqWUsdcvjtaBRmG1h4C9gDDppnZg&s',
        url: 'https://nodejs.org/',
      },
      {
        name: 'Gitlens',
        image:
          'https://help.gitkraken.com/wp-content/uploads/gitlens-icon-hifidelity.png',
        url: 'https://nestjs.com/',
      },
      {
        name: 'ESLint',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ESLint_logo.svg/2328px-ESLint_logo.svg.png',
        url: 'https://www.prisma.io/',
      },
      {
        name: 'Prettier',
        image: 'https://prettier.io/icon.png',
        url: 'https://www.prisma.io/',
      },
      {
        name: 'Material Icon Theme',
        image:
          'https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/logo.png',
        url: 'https://www.prisma.io/',
      },
      {
        name: 'Omni Theme',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSS7Y65ZIpDokJ6oeWtUsfeVptOb38y_lBZA&s',
        url: 'https://www.prisma.io/',
      },
      {
        name: 'Error Lens',
        image:
          'https://usernamehw.gallerycdn.vsassets.io/extensions/usernamehw/errorlens/3.26.0/1745913515439/Microsoft.VisualStudio.Services.Icons.Default',
        url: 'https://www.prisma.io/',
      },
      {
        name: 'Rest Client',
        image:
          'https://humao.gallerycdn.vsassets.io/extensions/humao/rest-client/0.25.1/1660918934840/Microsoft.VisualStudio.Services.Icons.Default',
        url: 'https://www.prisma.io/',
      },
      {
        name: 'Wappalyzer',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm3FMQKXo2yCIniXcQ3H7EJv0qSwAYXzYksg&s',
        url: 'https://www.prisma.io/',
      },
      {
        name: 'Codeium',
        image:
          'https://images.prismic.io/sacra/Z4WDYZbqstJ99Zrs_codeiumlogo.jpeg?auto=format,compress',
        url: 'https://www.prisma.io/',
      },
    ],
  },
];

export const sortedStacksList = stacksList.map((category) => ({
  ...category,
  items: category.items.sort((a, b) => a.name.localeCompare(b.name)),
}));
