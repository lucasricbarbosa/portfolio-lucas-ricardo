import { Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export function BuildTogether() {
  const { t } = useTranslation();

  return (
    <div className="rounded-lg border bg-card pt-6 text-card-foreground shadow-sm">
      <h2 className="px-6 text-xl font-semibold leading-none tracking-tight">
        {t('home.buildTogether.title')}
      </h2>
      <p className="px-6 pb-6 pt-3 text-sm">
        {t('home.buildTogether.description')}
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
