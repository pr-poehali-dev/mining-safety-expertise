import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const IndexSections = () => {
  const services = [
    {
      icon: "Mountain",
      title: "Проектирование горных производств",
      description:
        "Разработка проектной документации для карьеров, шахт и обогатительных фабрик",
    },
    {
      icon: "ShieldCheck",
      title: "Экспертиза промышленной безопасности",
      description:
        "Проведение независимой экспертизы опасных производственных объектов",
    },
    {
      icon: "Search",
      title: "Инженерные изыскания",
      description:
        "Комплекс работ по изучению природных условий и особенностей участка",
    },
  ];

  const certificates = [
    {
      title: "Лицензия на проектирование",
      number: "ПД-123456",
      date: "01.2024",
    },
    {
      title: "Аттестат аккредитации ЭПБ",
      number: "АА-789012",
      date: "03.2024",
    },
    { title: "СРО проектировщиков", number: "СРО-345678", date: "06.2023" },
    { title: "Сертификат ISO 9001", number: "ISO-901234", date: "12.2023" },
    { title: "Лицензия на изыскания", number: "ИЗ-567890", date: "09.2023" },
    { title: "Членство в НОП", number: "НОП-234567", date: "02.2024" },
  ];

  const news = [
    {
      title: "Завершён проект комплексных изысканий",
      date: "15.11.2024",
      content:
        "Успешно выполнены инженерно-геологические изыскания на участке 500 га",
    },
    {
      title: "Получена новая лицензия",
      date: "10.11.2024",
      content:
        "Компания получила расширенную лицензию на проектирование объектов I уровня",
    },
    {
      title: "Участие в конференции",
      date: "05.11.2024",
      content:
        "Наши эксперты выступили на отраслевой конференции по промбезопасности",
    },
  ];

  const vacancies = [
    {
      title: "Главный инженер проекта",
      department: "Проектный отдел",
      experience: "От 5 лет",
      salary: "От 150 000 руб.",
    },
    {
      title: "Эксперт по промышленной безопасности",
      department: "Отдел экспертизы",
      experience: "От 7 лет",
      salary: "От 180 000 руб.",
    },
    {
      title: "Инженер-геолог",
      department: "Отдел изысканий",
      experience: "От 3 лет",
      salary: "От 100 000 руб.",
    },
  ];

  return (
    <>
      <section id="about" className="py-16 bg-background">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold mb-8">О компании</h2>
          <div className="max-w-4xl">
            <p className="text-lg mb-4">
              <strong>Сибирская Проектная Экспертная Компания</strong> —
              инжиниринговая компания, специализирующаяся на проектировании
              горных производств и промышленной безопасности.
            </p>
            <p className="text-muted-foreground mb-6">
              Мы предоставляем полный комплекс услуг: от инженерных изысканий и
              разработки проектной документации до проведения экспертизы
              промышленной безопасности опасных производственных объектов.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center p-4 bg-white rounded-lg border">
                <div className="text-2xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">лет опыта</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border">
                <div className="text-2xl font-bold text-primary mb-1">200+</div>
                <div className="text-sm text-muted-foreground">проектов</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border">
                <div className="text-2xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">
                  специалистов
                </div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border">
                <div className="text-2xl font-bold text-primary mb-1">30+</div>
                <div className="text-sm text-muted-foreground">регионов РФ</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-white border-t border-b">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold mb-8">Услуги</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-lg border hover:border-secondary transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon
                    name={service.icon}
                    className="text-primary"
                    size={24}
                  />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certificates" className="py-16 bg-background">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold mb-8">
            Квалификация и лицензии
          </h2>
          <Tabs defaultValue="licenses" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="licenses">Лицензии и допуски</TabsTrigger>
              <TabsTrigger value="team">Команда экспертов</TabsTrigger>
            </TabsList>
            <TabsContent value="licenses" className="mt-8">
              <div className="grid md:grid-cols-2 gap-4">
                {certificates.map((cert, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon
                              name="Award"
                              className="text-primary"
                              size={20}
                            />
                          </div>
                          <div>
                            <CardTitle className="text-base mb-1">
                              {cert.title}
                            </CardTitle>
                            <CardDescription className="text-sm">
                              № {cert.number}
                            </CardDescription>
                          </div>
                        </div>
                        <Badge variant="outline">{cert.date}</Badge>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="team" className="mt-8">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: "Аттестованные эксперты ЭПБ", count: "12" },
                  { name: "Инженеры-проектировщики", count: "25" },
                  { name: "Специалисты по изысканиям", count: "15" },
                ].map((item, index) => (
                  <Card key={index}>
                    <CardHeader className="text-center">
                      <CardTitle className="text-3xl font-bold text-primary mb-2">
                        {item.count}
                      </CardTitle>
                      <CardDescription>{item.name}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Экспертный совет</CardTitle>
                  <CardDescription>
                    В составе компании — кандидаты технических наук, действующие
                    члены научно-технических советов, эксперты промышленной
                    безопасности с опытом работы более 20 лет
                  </CardDescription>
                </CardHeader>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="news" className="py-16 bg-white border-t border-b">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold mb-8">
            Новости компании
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {news.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Icon name="Calendar" size={16} />
                    {item.date}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="vacancies" className="py-16 bg-background">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold mb-8">
            Открытые вакансии
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {vacancies.map((vacancy, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">
                        {vacancy.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">
                          <Icon name="Briefcase" size={14} className="mr-1" />
                          {vacancy.department}
                        </Badge>
                        <Badge variant="outline">
                          <Icon name="Clock" size={14} className="mr-1" />
                          {vacancy.experience}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <span className="font-semibold text-primary">
                        {vacancy.salary}
                      </span>
                      <Button>Откликнуться</Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-white border-t">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold mb-8">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Свяжитесь с нами</CardTitle>
                <CardDescription>
                  Мы ответим на все ваши вопросы
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Phone" className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-medium">+7 (495) 123-45-67</div>
                    <div className="text-sm text-muted-foreground">
                      Пн-Пт: 9:00 - 18:00
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <Icon name="Mail" className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-medium">info@gorproekt.ru</div>
                    <div className="text-sm text-muted-foreground">
                      Ответим в течение 24 часов
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-medium">
                      Москва, ул. Промышленная, д. 10
                    </div>
                    <div className="text-sm text-muted-foreground">
                      БЦ "Индустрия", офис 501
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Оставьте заявку</CardTitle>
                <CardDescription>
                  Мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Телефон"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Сообщение"
                      rows={4}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndexSections;
