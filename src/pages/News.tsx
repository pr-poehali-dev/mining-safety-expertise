import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const News = () => {
  const navigate = useNavigate();

  const news = [
    {
      title: 'Завершён проект модернизации обогатительной фабрики',
      description: 'Успешно сдан проект по модернизации технологической линии крупного горно-обогатительного комбината',
      date: '15 ноября 2024',
      category: 'Проекты'
    },
    {
      title: 'Получена новая лицензия на проектирование',
      description: 'СПЭК получила расширенную лицензию на проектирование объектов I и II уровней ответственности',
      date: '8 ноября 2024',
      category: 'Достижения'
    },
    {
      title: 'Участие в международной конференции',
      description: 'Наши специалисты выступили на конференции "Горное дело 2024" с докладом о современных методах проектирования',
      date: '1 ноября 2024',
      category: 'События'
    },
    {
      title: 'Запуск нового направления - экологический аудит',
      description: 'Компания расширяет спектр услуг: теперь предлагаем комплексный экологический аудит горных предприятий',
      date: '25 октября 2024',
      category: 'Новости'
    },
    {
      title: 'Успешная экспертиза крупного карьера',
      description: 'Проведена комплексная экспертиза промышленной безопасности карьера с объёмом добычи 5 млн тонн в год',
      date: '18 октября 2024',
      category: 'Проекты'
    },
    {
      title: 'Обновление команды специалистов',
      description: 'В штат компании приняты 5 новых инженеров с опытом работы в ведущих горнодобывающих компаниях',
      date: '10 октября 2024',
      category: 'Новости'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Проекты': 'bg-blue-100 text-blue-800',
      'Достижения': 'bg-green-100 text-green-800',
      'События': 'bg-purple-100 text-purple-800',
      'Новости': 'bg-orange-100 text-orange-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

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
        <h1 className="font-heading text-5xl font-bold text-primary mb-4">Новости компании</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Актуальные события и достижения СПЭК
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {news.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <Badge className={getCategoryColor(item.category)}>{item.category}</Badge>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Icon name="Calendar" size={14} />
                    {item.date}
                  </span>
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription className="text-base mt-2">{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="p-0 h-auto text-primary">
                  Читать далее <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default News;
