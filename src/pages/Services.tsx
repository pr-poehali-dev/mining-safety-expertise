import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import IndexHeader from '@/components/index/IndexHeader';
import IndexFooter from '@/components/index/IndexFooter';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Проектирование горных производств",
      description: "Разработка проектной документации для горнодобывающих предприятий",
      icon: "Mountain",
      link: "/services/mining"
    },
    {
      title: "Экспертиза промышленной безопасности",
      description: "Комплексная оценка соответствия требованиям промышленной безопасности",
      icon: "ShieldCheck",
      link: "/services/expertise"
    },
    {
      title: "Инженерные изыскания",
      description: "Геологические и геодезические изыскания для строительства",
      icon: "Search",
      link: "/services/survey"
    },
    {
      title: "Техническое сопровождение",
      description: "Авторский надзор и консультационная поддержка проектов",
      icon: "Headphones",
      link: "/services/support"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <IndexHeader />

      <main className="container py-16">
        <h1 className="font-heading text-5xl font-bold text-primary mb-4">Наши услуги</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Полный спектр услуг для горнодобывающей промышленности
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={service.icon as any} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-primary"
                  onClick={() => navigate(service.link)}
                >
                  Подробнее <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <IndexFooter />
    </div>
  );
};

export default Services;