import { ArrowUpRight, Github } from 'lucide-react'

import projectMockup from '../../assets/project-mockup.png'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'

export function ProjectWrapper() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div className="group cursor-zoom-in overflow-hidden rounded">
            <img
              className="h-full w-full rounded transition-all duration-300 group-hover:scale-110"
              src={projectMockup}
              alt=""
            />
          </div>
        </DialogTrigger>
        <DialogContent>
          <img className="h-full w-full" src={projectMockup} alt="" />
        </DialogContent>
      </Dialog>
      <h3 className="pb-1 pt-6 text-xl font-semibold">Mentor connect</h3>
      <p className="text-sm font-normal text-muted-foreground">
        UX Design, Case Study
      </p>
      <span className="block py-3">
        Supported students make a mentor-mentee relationship through
        personalized search.
      </span>
      <div className="flex items-center gap-2">
        <Button className="text-white">
          <ArrowUpRight /> Visitar
        </Button>
        <Button variant={'outline'}>
          <Github /> Código fonte
        </Button>
      </div>
    </div>
  )
}
