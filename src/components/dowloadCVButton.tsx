import { Download } from 'lucide-react';

import { Button } from './ui/button';

export function DowloadCVButton() {
  const handleDownload = () => {
    const link = document.createElement('a');

    link.href = 'public/curriculo-full-lucas-ricardo.pdf';

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
      Baixar meu currículo <Download className="ml-2 size-4" />
    </Button>
  );
}
