import { useEffect, useState } from 'react'

interface MySetupProps {
  name: string
  description: string
}

const data = [
  { name: 'Teste', description: 'São Paulo' },
  { name: 'Teste2', description: 'São Paulo' },
  { name: 'Filtro', description: 'São Paulo' },
  { name: 'testando', description: 'São Paulo' },
]

export function MySetup() {
  const [repos, setRepos] = useState<MySetupProps[]>([])
  //   const [filteredSetups, setFilteredSetups] = useState<MySetupProps[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    setRepos(data)
  }, [])

  const filteredRepos =
    search.length > 0 ? repos.filter((repo) => repo.name.includes(search)) : []

  //   useEffect(() => {
  //     if (search.length) {
  //       setFilteredSetups(setups.filter((setup) => setup.name.includes(search)))
  //     }
  //   }, [search])

  return (
    <div>
      <input
        type="text"
        name="search"
        placeholder="Buscar..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />

      {search.length > 0 ? (
        <ul>
          {filteredRepos.map((repo) => {
            return <li key={repo.name}>{repo.name}</li>
          })}
        </ul>
      ) : (
        <ul>
          {repos.map((repo) => {
            return <li key={repo.name}>{repo.name}</li>
          })}
        </ul>
      )}
    </div>
  )
}
