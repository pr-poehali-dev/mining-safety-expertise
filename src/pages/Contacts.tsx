import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import IndexHeader from '@/components/index/IndexHeader';

const Contacts = () => {

  return (
    <div className="min-h-screen bg-background">
      <IndexHeader />

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