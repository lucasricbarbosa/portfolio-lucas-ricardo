import { Moon, Settings, Sun } from 'lucide-react'

import { useTheme } from '@/components/themes/theme-provider'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { Brazil } from '../flags/brazil'
import { Spain } from '../flags/spain'
import { UnitedStates } from '../flags/united-states'

export function ConfigurationMenu() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="group min-w-10 border md:border-none"
          variant="ghost"
          size="icon"
        >
          <Settings className="size-5 duration-150 group-hover:rotate-90" />
          <span className="sr-only">Opções de visualização</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="text-xs text-muted-foreground">
          Tema
        </DropdownMenuLabel>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <Sun className="mr-2 size-4" /> Claro
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <Moon className="mr-2 size-4" /> Escuro
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuLabel className="text-xs text-muted-foreground">
          Idioma
        </DropdownMenuLabel>
        <DropdownMenuItem>
          <UnitedStates className="mr-2 size-4" /> Inglês
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Brazil className="mr-2 size-4" /> Português
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Spain className="mr-2 size-4" /> Espanhol
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
