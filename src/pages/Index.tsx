import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const services = [
    {
      icon: 'Mountain',
      title: 'Проектирование горных производств',
      description: 'Разработка проектной документации для карьеров, шахт и обогатительных фабрик',
    },
    {
      icon: 'ShieldCheck',
      title: 'Экспертиза промышленной безопасности',
      description: 'Проведение независимой экспертизы опасных производственных объектов',
    },
    {
      icon: 'Search',
      title: 'Инженерные изыскания',
      description: 'Комплекс работ по изучению природных условий и особенностей участка',
    },
  ];

  const portfolio = [
    {
      title: 'Горно-обогатительный комбинат',
      location: 'Курская область',
      year: '2023',
      image: 'https://cdn.poehali.dev/projects/db431dda-a896-493b-8d5f-c8ce3ef9966e/files/090d9f2c-d939-4016-8e1a-9cb94e30dc8c.jpg',
      type: 'Проектирование',
    },
    {
      title: 'Экспертиза опасного производства',
      location: 'Челябинская область',
      year: '2024',
      image: 'https://cdn.poehali.dev/projects/db431dda-a896-493b-8d5f-c8ce3ef9966e/files/54741029-4333-4960-afaa-7eb8681b486d.jpg',
      type: 'Экспертиза',
    },
    {
      title: 'Инженерные изыскания',
      location: 'Красноярский край',
      year: '2024',
      image: 'https://cdn.poehali.dev/projects/db431dda-a896-493b-8d5f-c8ce3ef9966e/files/977ee279-ed46-4493-b9ff-ce74834469f9.jpg',
      type: 'Изыскания',
    },
  ];

  const certificates = [
    { title: 'Лицензия на проектирование', number: 'ПД-123456', date: '01.2024' },
    { title: 'Аттестат аккредитации ЭПБ', number: 'АА-789012', date: '03.2024' },
    { title: 'СРО проектировщиков', number: 'СРО-345678', date: '06.2023' },
    { title: 'Сертификат ISO 9001', number: 'ISO-901234', date: '12.2023' },
    { title: 'Лицензия на изыскания', number: 'ИЗ-567890', date: '09.2023' },
    { title: 'Членство в НОП', number: 'НОП-234567', date: '02.2024' },
  ];

  const news = [
    {
      title: 'Завершён проект комплексных изысканий',
      date: '15.11.2024',
      content: 'Успешно выполнены инженерно-геологические изыскания на участке 500 га',
    },
    {
      title: 'Получена новая лицензия',
      date: '10.11.2024',
      content: 'Компания получила расширенную лицензию на проектирование объектов I уровня',
    },
    {
      title: 'Участие в конференции',
      date: '05.11.2024',
      content: 'Наши эксперты выступили на отраслевой конференции по промбезопасности',
    },
  ];

  const vacancies = [
    {
      title: 'Главный инженер проекта',
      department: 'Проектный отдел',
      experience: 'От 5 лет',
      salary: 'От 150 000 руб.',
    },
    {
      title: 'Эксперт по промышленной безопасности',
      department: 'Отдел экспертизы',
      experience: 'От 7 лет',
      salary: 'От 180 000 руб.',
    },
    {
      title: 'Инженер-геолог',
      department: 'Отдел изысканий',
      experience: 'От 3 лет',
      salary: 'От 100 000 руб.',
    },
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/55c85bd5-dd2e-4641-94a3-c905f750a895.JPG" 
              alt="ГорПроект" 
              className="h-10 w-10 object-contain"
            />
            <span className="font-heading text-xl font-bold text-primary">ГорПроект</span>
          </div>
          <nav className="hidden md:flex gap-6">
            {['home', 'about', 'services', 'portfolio', 'certificates', 'news', 'vacancies', 'contacts'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item === 'home' && 'Главная'}
                {item === 'about' && 'О компании'}
                {item === 'services' && 'Услуги'}
                {item === 'portfolio' && 'Портфолио'}
                {item === 'certificates' && 'Квалификация'}
                {item === 'news' && 'Новости'}
                {item === 'vacancies' && 'Вакансии'}
                {item === 'contacts' && 'Контакты'}
              </button>
            ))}
          </nav>
          <Button>Оставить заявку</Button>
        </div>
      </header>

      <main>
        <section id="home" className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
          <div className="container relative z-10 text-center text-white animate-fade-in">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Проектирование горных производств
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Полный цикл работ: проектирование, экспертиза промышленной безопасности, инженерные изыскания
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button size="lg" variant="secondary" onClick={() => scrollToSection('services')}>
                Наши услуги
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary">
                Портфолио проектов
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
              <div className="text-center animate-scale-in">
                <div className="text-4xl font-bold font-heading mb-2">15+</div>
                <div className="text-white/80">лет на рынке</div>
              </div>
              <div className="text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <div className="text-4xl font-bold font-heading mb-2">200+</div>
                <div className="text-white/80">реализованных проектов</div>
              </div>
              <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-4xl font-bold font-heading mb-2">50+</div>
                <div className="text-white/80">специалистов в штате</div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-muted/30">
          <div className="container">
            <h2 className="font-heading text-4xl font-bold text-center mb-12">О компании</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="space-y-6">
                <p className="text-lg">
                  <strong>ГорПроект</strong> — ведущая инжиниринговая компания, специализирующаяся на проектировании горных производств и промышленной безопасности.
                </p>
                <p className="text-muted-foreground">
                  Мы предоставляем полный комплекс услуг: от инженерных изысканий и разработки проектной документации до проведения экспертизы промышленной безопасности опасных производственных объектов.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="px-4 py-2">Опыт 15+ лет</Badge>
                  <Badge variant="secondary" className="px-4 py-2">200+ проектов</Badge>
                  <Badge variant="secondary" className="px-4 py-2">Все лицензии</Badge>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <Icon name="Award" className="text-primary mb-2" size={32} />
                    <CardTitle className="text-2xl">15+</CardTitle>
                    <CardDescription>лет опыта</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <Icon name="Users" className="text-primary mb-2" size={32} />
                    <CardTitle className="text-2xl">50+</CardTitle>
                    <CardDescription>специалистов</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <Icon name="FolderCheck" className="text-primary mb-2" size={32} />
                    <CardTitle className="text-2xl">200+</CardTitle>
                    <CardDescription>проектов</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <Icon name="MapPin" className="text-primary mb-2" size={32} />
                    <CardTitle className="text-2xl">30+</CardTitle>
                    <CardDescription>регионов РФ</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container">
            <h2 className="font-heading text-4xl font-bold text-center mb-4">Наши услуги</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Полный комплекс инжиниринговых услуг для горнодобывающей и перерабатывающей промышленности
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon name={service.icon} className="text-primary" size={28} />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                    <Button variant="link" className="mt-4 px-0">
                      Подробнее <Icon name="ArrowRight" size={16} className="ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-20 bg-muted/30">
          <div className="container">
            <h2 className="font-heading text-4xl font-bold text-center mb-4">Портфолио проектов</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Реализованные проекты в различных отраслях промышленности
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {portfolio.map((project, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge>{project.type}</Badge>
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <Icon name="MapPin" size={14} />
                      {project.location}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="certificates" className="py-20">
          <div className="container">
            <h2 className="font-heading text-4xl font-bold text-center mb-4">Квалификация и лицензии</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Все необходимые разрешительные документы и сертификаты для выполнения работ
            </p>
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
                              <Icon name="Award" className="text-primary" size={20} />
                            </div>
                            <div>
                              <CardTitle className="text-base mb-1">{cert.title}</CardTitle>
                              <CardDescription className="text-sm">№ {cert.number}</CardDescription>
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
                    { name: 'Аттестованные эксперты ЭПБ', count: '12' },
                    { name: 'Инженеры-проектировщики', count: '25' },
                    { name: 'Специалисты по изысканиям', count: '15' },
                  ].map((item, index) => (
                    <Card key={index}>
                      <CardHeader className="text-center">
                        <CardTitle className="text-3xl font-bold text-primary mb-2">{item.count}</CardTitle>
                        <CardDescription>{item.name}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Экспертный совет</CardTitle>
                    <CardDescription>
                      В составе компании — кандидаты технических наук, действующие члены научно-технических советов, эксперты промышленной безопасности с опытом работы более 20 лет
                    </CardDescription>
                  </CardHeader>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="news" className="py-20 bg-muted/30">
          <div className="container">
            <h2 className="font-heading text-4xl font-bold text-center mb-12">Новости компании</h2>
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

        <section id="vacancies" className="py-20">
          <div className="container">
            <h2 className="font-heading text-4xl font-bold text-center mb-4">Открытые вакансии</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Присоединяйтесь к команде профессионалов
            </p>
            <div className="max-w-4xl mx-auto space-y-4">
              {vacancies.map((vacancy, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl mb-2">{vacancy.title}</CardTitle>
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
                        <span className="font-semibold text-primary">{vacancy.salary}</span>
                        <Button>Откликнуться</Button>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 bg-muted/30">
          <div className="container">
            <h2 className="font-heading text-4xl font-bold text-center mb-12">Контакты</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Свяжитесь с нами</CardTitle>
                  <CardDescription>Мы ответим на все ваши вопросы</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-medium">+7 (495) 123-45-67</div>
                      <div className="text-sm text-muted-foreground">Пн-Пт: 9:00 - 18:00</div>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-medium">info@gorproekt.ru</div>
                      <div className="text-sm text-muted-foreground">Ответим в течение 24 часов</div>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-medium">Москва, ул. Промышленная, д. 10</div>
                      <div className="text-sm text-muted-foreground">БЦ "Индустрия", офис 501</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Оставьте заявку</CardTitle>
                  <CardDescription>Мы свяжемся с вами в ближайшее время</CardDescription>
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
      </main>

      <footer className="bg-primary text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Mountain" size={28} />
                <span className="font-heading text-xl font-bold">ГорПроект</span>
              </div>
              <p className="text-white/80 text-sm">
                Проектирование горных производств и промышленная безопасность
              </p>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Проектирование</li>
                <li>Экспертиза ПБ</li>
                <li>Инженерные изыскания</li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Вакансии</li>
                <li>Новости</li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@gorproekt.ru</li>
                <li>Москва, ул. Промышленная, 10</li>
              </ul>
            </div>
          </div>
          <Separator className="bg-white/20 mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© 2024 ГорПроект. Все права защищены.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Правовая информация</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;