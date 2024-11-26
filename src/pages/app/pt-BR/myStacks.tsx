import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';

import { PageTitle } from '@/components/pageTitle';
import { SectionTitle } from '@/components/sectionTitle';
import { StackItem } from '@/components/stackPage/stackItem';
import { stacksList, StacksProps } from '@/utils/stacks';

export function MyStacks() {
  const [frontendStacks, setFrontendStacks] = useState<StacksProps[]>([]);
  const [backendStacks, setBackendStacks] = useState<StacksProps[]>([]);
  const [search, setSearch] = useState('');

  console.log('renderizou');

  useEffect(() => {
    setFrontendStacks(stacksList.frontend);
    setBackendStacks(stacksList.backend);
  }, []);

  const filteredFrontendStacks = search.length
    ? frontendStacks.filter((project) =>
        project.name.toLowerCase().includes(search.toLowerCase()),
      )
    : frontendStacks;

  const filteredBackendStacks = search.length
    ? backendStacks.filter((project) =>
        project.name.toLowerCase().includes(search.toLowerCase()),
      )
    : backendStacks;

  return (
    <>
      <div>
        <PageTitle text="Minhas tecnologias" />
        <span className="block">
          Essa página lista os{' '}
          <strong className="font-semibold">
            {filteredBackendStacks.length + filteredFrontendStacks.length}{' '}
          </strong>
          principais projetos que venho desenvolvendo durante a minha jornada
          como programador.{' '}
        </span>
        <div className="mt-6 flex w-full items-center justify-between rounded border bg-transparent px-4 py-2 text-sm font-normal">
          <input
            className="w-full bg-transparent outline-none"
            type="text"
            name="search"
            placeholder="Buscar"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <Search size={20} />
        </div>
      </div>

      {filteredFrontendStacks.length ? (
        <div className="mt-10">
          <SectionTitle text="Frontend" />
          <ul className="grid grid-cols-4 gap-2">
            {filteredFrontendStacks.map((project, index) => (
              <StackItem
                image={project.image}
                name={project.name}
                key={(project.name, index)}
                delay={0.07 * index}
              />
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}

      {filteredBackendStacks.length ? (
        <div className="mt-10">
          <SectionTitle text="Backend" />
          <ul className="grid grid-cols-4 gap-2">
            {filteredBackendStacks.map((project, index) => (
              <StackItem
                image={project.image}
                name={project.name}
                key={(project.name, index)}
                delay={0.07 * index}
              />
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
