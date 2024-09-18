import { Download } from 'lucide-react'

import { Button } from './ui/button'

export function DowloadCVButton() {
  return (
    <Button className="w-full bg-primary text-sm font-medium text-white">
      Baixar meu currículo <Download className="ml-2 size-4" />
    </Button>
  )
}
