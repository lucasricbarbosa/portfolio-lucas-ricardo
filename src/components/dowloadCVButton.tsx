import { Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { Button } from './ui/button';

export function DowloadCVButton() {
  const { t } = useTranslation();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/curriculo-full-lucas-ricardo.pdf';
    link.download = 'curriculo-lucas-ricardo.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      onClick={handleDownload}
      className="w-full bg-primary text-sm font-medium text-white"
    >
      {t('cv.download')} <Download className="ml-2 size-4" />
    </Button>
  );
}
