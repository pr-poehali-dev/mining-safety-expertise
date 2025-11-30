import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import IndexHeader from '@/components/index/IndexHeader';

const Vacancies = () => {

  const vacancies = [
    {
      title: 'Инженер-проектировщик горных работ',
      department: 'Отдел проектирования',
      experience: '3-5 лет',
      employment: 'Полная занятость',
      salary: 'от 120 000 ₽',
      description: 'Разработка проектной документации для горнодобывающих предприятий, расчёты устойчивости бортов карьеров',
      requirements: [
        'Высшее горное образование',
        'Опыт работы в проектировании не менее 3 лет',
        'Знание AutoCAD, Micromine, Surpac',
        'Знание нормативной базы'
      ]
    },
    {
      title: 'Эксперт по промышленной безопасности',
      department: 'Отдел экспертизы',
      experience: '5+ лет',
      employment: 'Полная занятость',
      salary: 'от 150 000 ₽',
      description: 'Проведение экспертизы промышленной безопасности опасных производственных объектов',
      requirements: [
        'Высшее техническое образование',
        'Аттестация в Ростехнадзоре',
        'Опыт работы экспертом не менее 5 лет',
        'Готовность к командировкам'
      ]
    },
    {
      title: 'Инженер-геолог',
      department: 'Отдел изысканий',
      experience: '2-4 года',
      employment: 'Полная занятость',
      salary: 'от 100 000 ₽',
      description: 'Проведение инженерно-геологических изысканий, составление отчётной документации',
      requirements: [
        'Высшее геологическое образование',
        'Опыт полевых работ',
        'Знание GeoniCS, AutoCAD',
        'Навыки камеральной обработки данных'
      ]
    },
    {
      title: 'ГИП (главный инженер проекта)',
      department: 'Отдел проектирования',
      experience: '7+ лет',
      employment: 'Полная занятость',
      salary: 'от 200 000 ₽',
      description: 'Руководство проектными работами, координация работы проектной группы',
      requirements: [
        'Высшее техническое образование',
        'Опыт работы ГИПом не менее 5 лет',
        'Опыт сдачи проектов в экспертизу',
        'Управленческие навыки'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <IndexHeader />

      <main className="container py-16">
        <h1 className="font-heading text-5xl font-bold text-primary mb-4">Вакансии</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Присоединяйтесь к команде профессионалов
        </p>

        <div className="space-y-6">
          {vacancies.map((vacancy, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                  <div>
                    <CardTitle className="text-2xl mb-2">{vacancy.title}</CardTitle>
                    <CardDescription className="text-base">{vacancy.department}</CardDescription>
                  </div>
                  <Badge className="bg-secondary text-secondary-foreground w-fit">{vacancy.salary}</Badge>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Icon name="Briefcase" size={14} />
                    {vacancy.employment}
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Icon name="Clock" size={14} />
                    Опыт: {vacancy.experience}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{vacancy.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Требования:</h4>
                  <ul className="space-y-2">
                    {vacancy.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Icon name="CheckCircle2" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full md:w-auto">
                  <Icon name="Send" size={16} className="mr-2" />
                  Откликнуться на вакансию
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Vacancies;