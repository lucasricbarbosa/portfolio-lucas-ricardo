import profilePicture from '../../assets/profile-picture.png'
import { Badge } from '../ui/badge'

export function HomeHeaderProfile() {
  return (
    <section className="flex items-center gap-5">
      <img
        className="size-24"
        src={profilePicture}
        alt="Foto de perfil do Lucas Ricardo"
      />
      <div className="">
        <span className="text-3xl font-semibold text-foreground">
          Lucas Ricardo
        </span>
        <p className="text-muted-foreground">Desenvolvedor Front-End</p>
        <div className="flex items-center gap-1 pt-2">
          <Badge className="bg-muted font-normal text-foreground">Teste</Badge>
          <Badge className="bg-muted font-normal text-foreground">Teste</Badge>
          <Badge className="bg-muted font-normal text-foreground">Teste</Badge>
          <Badge className="bg-muted font-normal text-foreground">Teste</Badge>
          <Badge className="bg-muted font-normal text-foreground">Teste</Badge>
        </div>
      </div>
    </section>
  )
}
