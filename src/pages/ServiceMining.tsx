import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import IndexHeader from '@/components/index/IndexHeader';
import IndexFooter from '@/components/index/IndexFooter';
import { useNavigate } from 'react-router-dom';

const ServiceMining = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <IndexHeader />

      <main className="container py-16">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/services')}
          className="mb-8"
        >
          <Icon name="ArrowLeft" size={20} className="mr-2" />
          Назад к услугам
        </Button>

        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon name="Mountain" className="text-primary" size={32} />
            </div>
            <h1 className="font-heading text-4xl font-bold text-primary">
              Проектирование горных производств
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Комплексная разработка проектной документации для горнодобывающих предприятий любого масштаба
            </p>

            <h2 className="font-heading text-2xl font-semibold text-primary mt-8 mb-4">
              Что входит в услугу
            </h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                <span>Разработка технологических схем горных работ</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                <span>Проектирование вентиляции и водоотлива</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                <span>Расчет запасов полезных ископаемых</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                <span>Проектирование систем энергоснабжения горных объектов</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                <span>Разработка планов развития горных работ</span>
              </li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-primary mt-8 mb-4">
              Преимущества работы с нами
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 border rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Опыт более 15 лет</h3>
                <p className="text-muted-foreground">
                  Реализовано свыше 200 проектов для крупнейших горнодобывающих компаний
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Полное соответствие ГОСТам</h3>
                <p className="text-muted-foreground">
                  Вся документация соответствует актуальным требованиям и нормативам
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Современные технологии</h3>
                <p className="text-muted-foreground">
                  Используем передовое ПО для 3D-моделирования и расчетов
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Сопровождение проекта</h3>
                <p className="text-muted-foreground">
                  Авторский надзор на всех этапах реализации проекта
                </p>
              </div>
            </div>

            <div className="bg-muted p-8 rounded-lg mt-12">
              <h2 className="font-heading text-2xl font-semibold mb-4">
                Заинтересовала услуга?
              </h2>
              <p className="text-muted-foreground mb-6">
                Свяжитесь с нами для обсуждения вашего проекта. Мы подготовим индивидуальное коммерческое предложение.
              </p>
              <Button onClick={() => navigate('/contacts')} size="lg">
                Связаться с нами
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </main>

      <IndexFooter />
    </div>
  );
};

export default ServiceMining;
