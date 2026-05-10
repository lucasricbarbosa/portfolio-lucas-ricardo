import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export function AboutMeHome() {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{t('home.aboutMe.title')}</CardTitle>
        <Link
          className="flex items-center text-xs font-medium text-primary"
          to={`/${lang}/about-me`}
        >
          {t('home.aboutMe.seeMore')} <ChevronRight className="ml-1 size-3" />
        </Link>
      </CardHeader>
      <CardContent>
        <span className="text-muted-foreground">
          {t('home.aboutMe.description')}
        </span>
      </CardContent>
    </Card>
  );
}
