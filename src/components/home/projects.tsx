import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { homeProjects } from '@/utils/homeProjects';

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ProjectWrapper } from './projectWrapper';

export function Projects() {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Projetos</CardTitle>
        <Link
          className="flex items-center text-xs font-medium text-primary"
          to={'/'}
        >
          Ver todos <ChevronRight className="ml-1 size-3" />
        </Link>
      </CardHeader>
      <CardContent className="flex flex-col items-start justify-between gap-3">
        <div className="grid grid-cols-1 gap-x-6 gap-y-16 lg:grid-cols-2">
          {homeProjects.map((project, index) => (
            <ProjectWrapper
              projectDescription={project.projectDescription}
              projectGithubLink={project.projectGithubLink}
              projectLink={project.projectLink}
              projectMockup={project.projectMockup}
              projectStacks={project.projectStacks}
              projectTitle={project.projectTitle}
              key={index * Math.random()}
              index={index}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
