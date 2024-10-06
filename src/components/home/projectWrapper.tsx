import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'

interface ProjectWrapperProps {
  index: number
  projectMockup: string
  projectTitle: string
  projectDescription: string
  projectStacks: string
  projectLink: string
  projectGithubLink: string
}

export function ProjectWrapper({
  index,
  projectMockup,
  projectTitle,
  projectDescription,
  projectStacks,
  projectLink,
  projectGithubLink,
}: ProjectWrapperProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -40 : 80, // Aplica animação apenas nos itens pares
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: true }}
    >
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
      <h3 className="pb-1 pt-6 text-xl font-semibold">{projectTitle}</h3>
      <p className="text-sm font-normal text-muted-foreground">
        {projectStacks}
      </p>
      <span className="block py-3">{projectDescription}</span>
      <div className="flex items-center gap-2">
        <Link to={projectLink}>
          <Button className="text-white">
            <ArrowUpRight /> Visitar
          </Button>
        </Link>
        <Link to={projectGithubLink}>
          <Button variant={'outline'}>
            <Github /> Código fonte
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}
