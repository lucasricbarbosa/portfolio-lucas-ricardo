import { Search } from 'lucide-react'
import { useEffect, useState } from 'react'

import { PageTitle } from '@/components/pageTitle'
import { SetupItem } from '@/components/setup/sertupItem'
import { setupItens } from '@/utils/setupItens'

interface MySetupProps {
  name: string
  imageUrl: string
  productLink: string
}

export function MySetup() {
  const [repos, setRepos] = useState<MySetupProps[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    setRepos(setupItens)
  }, [])

  const filteredRepos =
    search.length > 0
      ? repos.filter((repo) =>
          repo.name.toLowerCase().includes(search.toLowerCase()),
        )
      : []

  return (
    <div>
      <PageTitle text="Setup" />
      <span className="text-muted-foreground">
        Essa é uma lista de equipamentos e itens do meu setup que uso no dia a
        dia. Essa lista também possui itens que recomendo. Conforme for
        atualizando meu setup, atualizarei a lista também.
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

      {search.length > 0 ? (
        <ul className="grid grid-cols-2 gap-8 pt-10 md:grid-cols-3 lg:grid-cols-4">
          {filteredRepos.map((repo, index) => {
            return (
              <SetupItem
                productLink={repo.productLink}
                key={(repo.name, index)}
                imageName={repo.name}
                imageUrl={repo.imageUrl}
                delay={0.3 * index}
              />
            )
          })}
        </ul>
      ) : (
        <ul className="grid grid-cols-2 gap-8 pt-10 md:grid-cols-3 lg:grid-cols-4">
          {repos.map((repo, index) => {
            return (
              <SetupItem
                productLink={repo.productLink}
                key={(repo.name, index)}
                imageName={repo.name}
                imageUrl={repo.imageUrl}
                delay={0.07 * index}
              />
            )
          })}
        </ul>
      )}
    </div>
  )
}
