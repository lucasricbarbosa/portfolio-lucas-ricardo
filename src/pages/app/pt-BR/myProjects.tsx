import { ProjectWrapper } from '@/components/home/projectWrapper'
import { PageTitle } from '@/components/pageTitle'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { backEndProjects } from '@/utils/backEndProjects'
import { frontEndProjects } from '@/utils/frontEndProjects'
import { uxUiDesignProjects } from '@/utils/uxUiDesignProjects'

export function MyProjects() {
  return (
    <>
      <PageTitle text="Meus projetos" />
      <Card className="overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Front-End</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-start justify-between gap-3">
          <div className="grid grid-cols-1 gap-x-6 gap-y-16 lg:grid-cols-2">
            {frontEndProjects.map((project, index) => (
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
      <Card className="overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Back-End</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-start justify-between gap-3">
          <div className="grid grid-cols-1 gap-x-6 gap-y-16 lg:grid-cols-2">
            {backEndProjects.map((project, index) => (
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
      <Card className="overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>UX/UI Design</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-start justify-between gap-3">
          <div className="grid grid-cols-1 gap-x-6 gap-y-16 lg:grid-cols-2">
            {uxUiDesignProjects.map((project, index) => (
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
    </>
  )
}
