import profilePicture from '../../assets/profile-picture.png'
import { Badge } from '../ui/badge'

export function HomeHeaderProfile() {
  return (
    <div>
      <section className="flex items-center gap-5">
        <img
          className="size-24"
          src={profilePicture}
          alt="Foto de perfil do Lucas Ricardo"
        />
        <div className="">
          <span className="text-2xl font-semibold text-foreground sm:text-3xl">
            Lucas Ricardo
          </span>
          <p className="text-sm text-muted-foreground sm:text-base">
            Desenvolvedor Front-End
          </p>
          <div className="hidden flex-wrap items-center gap-1 pt-2 min-[420px]:flex">
            <Badge className="bg-muted font-normal text-foreground">
              ReactJS
            </Badge>
            <Badge className="bg-muted font-normal text-foreground">
              NextJS
            </Badge>
            <Badge className="bg-muted font-normal text-foreground">
              Typescript
            </Badge>
            <Badge className="bg-muted font-normal text-foreground">
              Javascript
            </Badge>
            <Badge className="bg-muted font-normal text-foreground">
              UX/UI Design
            </Badge>
          </div>
        </div>
      </section>
      <div className="flex flex-wrap items-center gap-1 pt-3 min-[420px]:hidden">
        <Badge className="bg-muted font-normal text-foreground">ReactJS</Badge>
        <Badge className="bg-muted font-normal text-foreground">NextJS</Badge>
        <Badge className="bg-muted font-normal text-foreground">
          Typescript
        </Badge>
        <Badge className="bg-muted font-normal text-foreground">
          Javascript
        </Badge>
        <Badge className="bg-muted font-normal text-foreground">
          UX/UI Design
        </Badge>
      </div>
    </div>
  )
}
