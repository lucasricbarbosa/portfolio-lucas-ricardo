import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';

interface ProjectWrapperProps {
  index: number;
  projectMockup: string;
  projectTitle: string;
  projectDescription: string;
  projectStacks: string;
  projectLink: string;
  projectGithubLink: string;
  isProjectGithubLink?: boolean;
}

export function ProjectWrapper({
  index,
  projectMockup,
  projectTitle,
  projectDescription,
  projectStacks,
  projectLink,
  projectGithubLink,
  isProjectGithubLink,
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
              className="aspect-video h-full w-full rounded object-cover transition-all duration-300 group-hover:scale-110"
              src={projectMockup}
              alt=""
            />
          </div>
        </DialogTrigger>
        <DialogContent className="min-h-[60vh] w-full min-w-[60vw]">
          <img
            className="h-full min-h-[40vh] w-full min-w-[40vw] object-cover"
            src={projectMockup}
            alt=""
          />
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
        {isProjectGithubLink && (
          <Link to={projectGithubLink}>
            <Button variant={'outline'}>
              <Github /> Código fonte
            </Button>
          </Link>
        )}
      </div>
    </motion.div>
  );
}
