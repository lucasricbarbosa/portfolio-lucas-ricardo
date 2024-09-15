import { Outlet } from 'react-router-dom'

import { NavigationMenu } from '@/components/navigationMenu/navigationMenu'

export function AppLayout() {
  return (
    <div className="relative flex flex-col md:flex-row">
      <NavigationMenu />
      <main className="relative mt-10 w-full md:ml-72 md:mt-0">
        <div className="container flex h-full max-w-4xl flex-col justify-center gap-6 py-14">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
