import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import IndexHeader from '@/components/index/IndexHeader';
import IndexFooter from '@/components/index/IndexFooter';
import { useNavigate } from 'react-router-dom';

const ServiceSurvey = () => {
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
              <Icon name="Search" className="text-primary" size={32} />
            </div>
            <h1 className="font-heading text-4xl font-bold text-primary">
              Инженерные изыскания
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Комплекс работ по изучению природных условий и факторов техногенного воздействия для проектирования и строительства
            </p>

            <h2 className="font-heading text-2xl font-semibold text-primary mt-8 mb-4">
              Виды изысканий
            </h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                <span>Инженерно-геологические изыскания - изучение геологического строения участка</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                <span>Инженерно-геодезические изыскания - создание топографических планов местности</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                <span>Гидрогеологические исследования - оценка грунтовых вод и их влияния</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                <span>Инженерно-экологические изыскания - оценка экологического состояния территории</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                <span>Геофизические исследования - изучение физических свойств грунтов</span>
              </li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-primary mt-8 mb-4">
              Этапы работ
            </h2>
            <div className="space-y-4 mb-8">
              <div className="flex gap-4 p-4 border rounded-lg">
                <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Подготовительный этап</h3>
                  <p className="text-muted-foreground">Сбор и анализ имеющихся материалов, разработка программы изысканий</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 border rounded-lg">
                <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Полевые работы</h3>
                  <p className="text-muted-foreground">Проведение буровых работ, отбор проб, геодезическая съемка</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 border rounded-lg">
                <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Лабораторные исследования</h3>
                  <p className="text-muted-foreground">Анализ отобранных проб грунтов и подземных вод</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 border rounded-lg">
                <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Камеральная обработка</h3>
                  <p className="text-muted-foreground">Составление технического отчета с выводами и рекомендациями</p>
                </div>
              </div>
            </div>

            <h2 className="font-heading text-2xl font-semibold text-primary mt-8 mb-4">
              Наше оборудование
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="p-4 border rounded-lg text-center">
                <Icon name="Radar" className="text-primary mx-auto mb-2" size={32} />
                <h3 className="font-semibold">Буровые установки</h3>
                <p className="text-sm text-muted-foreground">Современная техника для всех типов грунтов</p>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <Icon name="Compass" className="text-primary mx-auto mb-2" size={32} />
                <h3 className="font-semibold">Геодезическое оборудование</h3>
                <p className="text-sm text-muted-foreground">Высокоточные тахеометры и GPS</p>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <Icon name="FlaskConical" className="text-primary mx-auto mb-2" size={32} />
                <h3 className="font-semibold">Лаборатория</h3>
                <p className="text-sm text-muted-foreground">Полный цикл исследований</p>
              </div>
            </div>

            <div className="bg-muted p-8 rounded-lg mt-12">
              <h2 className="font-heading text-2xl font-semibold mb-4">
                Нужны изыскания?
              </h2>
              <p className="text-muted-foreground mb-6">
                Закажите инженерные изыскания у профессионалов. Гарантируем точность данных и соблюдение сроков.
              </p>
              <Button onClick={() => navigate('/contacts')} size="lg">
                Заказать изыскания
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

export default ServiceSurvey;
