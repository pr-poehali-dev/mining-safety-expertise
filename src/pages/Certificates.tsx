import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Certificates = () => {
  const navigate = useNavigate();

  const certificates = [
    { title: 'Лицензия на проектирование', number: 'ПД-123456', date: '01.2024', type: 'license' },
    { title: 'Аттестат аккредитации ЭПБ', number: 'АА-789012', date: '03.2024', type: 'attestation' },
    { title: 'СРО проектировщиков', number: 'СРО-П-456789', date: '02.2024', type: 'sro' },
    { title: 'ISO 9001:2015', number: 'ISO-9001-2024', date: '04.2024', type: 'iso' },
    { title: 'Допуск к работам повышенной опасности', number: 'ДП-345678', date: '05.2024', type: 'permit' },
    { title: 'Сертификат промышленной безопасности', number: 'ПБ-901234', date: '06.2024', type: 'safety' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-20 w-full bg-primary shadow-sm">
        <div className="container flex h-24 items-center gap-6">
          <button onClick={() => navigate('/')} className="flex items-center gap-4">
            <div className="h-16 w-16 flex-shrink-0">
              <img 
                src="https://cdn.poehali.dev/files/35047487-09a0-4e51-86f1-5e184b7d5afa.png" 
                alt="СПЭК" 
                className="h-full w-full object-contain"
              />
            </div>
            <div className="hidden lg:flex flex-col">
              <span className="font-heading font-bold leading-tight text-white text-base">Сибирская Проектная</span>
              <span className="font-heading font-bold text-white/90 leading-tight text-base">Экспертная Компания</span>
            </div>
          </button>
          <Button variant="secondary" size="sm" className="ml-auto" onClick={() => navigate('/')}>
            <Icon name="Home" size={16} className="mr-2" />
            На главную
          </Button>
        </div>
      </header>

      <main className="container py-16">
        <h1 className="font-heading text-5xl font-bold text-primary mb-4">Квалификация и сертификаты</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Наши лицензии и аккредитации подтверждают высокий уровень компетенций
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Icon name="Award" className="text-primary flex-shrink-0" size={32} />
                  <Badge variant="secondary">{cert.date}</Badge>
                </div>
                <CardTitle className="text-lg">{cert.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="FileText" size={16} />
                    <span>№ {cert.number}</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать копию
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Certificates;
