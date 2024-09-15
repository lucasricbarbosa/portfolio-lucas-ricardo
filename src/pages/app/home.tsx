import { Helmet } from 'react-helmet-async'

import { ConfigurationMenu } from '@/components/themes/configurationMenu'

export function Home() {
  return (
    <>
      <Helmet title="Teste" />
      <h1>dashboard</h1>
      <ConfigurationMenu />
    </>
  )
}
