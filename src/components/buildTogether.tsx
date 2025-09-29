import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function BuildTogether() {
  return (
    <div className="rounded-lg border bg-card pt-6 text-card-foreground shadow-sm">
      <h2 className="px-6 text-xl font-semibold leading-none tracking-tight">
        Vamos construir algo juntos?
      </h2>
      <p className="px-6 pb-6 pt-3 text-sm">
        Se você tem algum projeto em mente ou gostou do meu trabalho, sinta-se à
        vontade para me enviar uma mensagem.
      </p>
      <div className="flex items-center justify-center gap-3 border-t py-3">
        <Link
          className="rounded border p-[6px] hover:bg-muted"
          to={'https://www.linkedin.com/in/lucas-ricardo-barbosa/'}
        >
          <Linkedin size={24} className="text-card-foreground" />
        </Link>
        <Link
          className="rounded border p-[6px] hover:bg-muted"
          to={'https://github.com/lucasricbarbosa/'}
        >
          <Github size={24} className="text-card-foreground" />
        </Link>
        <Link
          className="rounded border p-[6px] hover:bg-muted"
          to="mailto:lucasricardobarb@gmail.com"
        >
          <Mail size={24} className="text-card-foreground" />
        </Link>
      </div>
    </div>
  );
}
