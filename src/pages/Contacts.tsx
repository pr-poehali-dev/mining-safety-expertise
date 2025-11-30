import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  const navigate = useNavigate();

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
        <h1 className="font-heading text-5xl font-bold text-primary mb-4">Контакты</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Свяжитесь с нами удобным для вас способом
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Icon name="Phone" className="text-primary" size={24} />
                Телефон
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">+7 (495) 123-45-67</p>
              <p className="text-sm text-muted-foreground mt-2">Пн-Пт: 9:00 - 18:00</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Icon name="Mail" className="text-primary" size={24} />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">info@gorproekt.ru</p>
              <p className="text-sm text-muted-foreground mt-2">Ответим в течение 24 часов</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Icon name="MapPin" className="text-primary" size={24} />
                Адрес
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">Москва, ул. Промышленная, 10</p>
              <p className="text-sm text-muted-foreground mt-2">Офис 205, 2 этаж</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Icon name="Clock" className="text-primary" size={24} />
                Часы работы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">Пн-Пт: 9:00 - 18:00</p>
              <p className="text-sm text-muted-foreground mt-2">Сб-Вс: Выходной</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Contacts;
