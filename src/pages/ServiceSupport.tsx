import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import IndexHeader from '@/components/index/IndexHeader';
import IndexFooter from '@/components/index/IndexFooter';
import { useNavigate } from 'react-router-dom';

const ServiceSupport = () => {
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
              <Icon name="Headphones" className="text-primary" size={32} />
            </div>
            <h1 className="font-heading text-4xl font-bold text-primary">
              Техническое сопровождение
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Комплексная поддержка проектов на всех стадиях реализации - от начала строительства до ввода в эксплуатацию
            </p>

            <h2 className="font-heading text-2xl font-semibold text-primary mt-8 mb-4">
              Что входит в услугу
            </h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                <span>Авторский надзор за строительством объектов по разработанной документации</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                <span>Технические консультации на всех этапах реализации проекта</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                <span>Контроль соответствия выполненных работ проектной документации</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                <span>Согласование изменений и корректировка проектных решений</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                <span>Участие в приемке выполненных работ</span>
              </li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-primary mt-8 mb-4">
              Формы сопровождения
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 border rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Постоянный надзор</h3>
                <p className="text-muted-foreground">
                  Специалист находится на объекте и осуществляет ежедневный контроль
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Периодические выезды</h3>
                <p className="text-muted-foreground">
                  Плановые инспекции объекта на ключевых этапах строительства
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Дистанционный надзор</h3>
                <p className="text-muted-foreground">
                  Контроль через фото/видео отчеты и онлайн-консультации
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Комбинированный формат</h3>
                <p className="text-muted-foreground">
                  Сочетание различных форм надзора в зависимости от задач
                </p>
              </div>
            </div>

            <h2 className="font-heading text-2xl font-semibold text-primary mt-8 mb-4">
              Задачи авторского надзора
            </h2>
            <div className="space-y-4 mb-8">
              <div className="p-4 border-l-4 border-primary bg-primary/5">
                <h3 className="font-semibold mb-2">Контроль качества</h3>
                <p className="text-muted-foreground">
                  Проверка соответствия выполняемых работ проектным решениям и требованиям нормативов
                </p>
              </div>
              <div className="p-4 border-l-4 border-primary bg-primary/5">
                <h3 className="font-semibold mb-2">Оперативные решения</h3>
                <p className="text-muted-foreground">
                  Быстрое реагирование на возникающие вопросы и корректировка решений при необходимости
                </p>
              </div>
              <div className="p-4 border-l-4 border-primary bg-primary/5">
                <h3 className="font-semibold mb-2">Предотвращение ошибок</h3>
                <p className="text-muted-foreground">
                  Выявление отклонений на ранних стадиях и предотвращение дорогостоящих переделок
                </p>
              </div>
              <div className="p-4 border-l-4 border-primary bg-primary/5">
                <h3 className="font-semibold mb-2">Документальное сопровождение</h3>
                <p className="text-muted-foreground">
                  Ведение журналов авторского надзора, оформление актов и протоколов
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <Icon name="Info" className="text-blue-500" size={24} />
                Преимущества авторского надзора
              </h3>
              <p className="text-muted-foreground">
                Авторский надзор позволяет избежать ошибок при строительстве, сократить сроки и снизить затраты на исправление недочетов. По статистике, объекты с авторским надзором сдаются на 20-30% быстрее.
              </p>
            </div>

            <div className="bg-muted p-8 rounded-lg mt-12">
              <h2 className="font-heading text-2xl font-semibold mb-4">
                Нужно сопровождение проекта?
              </h2>
              <p className="text-muted-foreground mb-6">
                Обеспечьте качественную реализацию проекта с помощью наших специалистов. Гарантируем профессиональный подход на всех этапах.
              </p>
              <Button onClick={() => navigate('/contacts')} size="lg">
                Заказать сопровождение
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

export default ServiceSupport;
