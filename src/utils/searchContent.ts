export interface SearchResult {
  title: string;
  path: string;
  excerpt: string;
  relevance: number;
}

export const searchableContent = [
  {
    title: 'Главная',
    path: '/',
    content: 'СПЭК Сибирская Проектная Экспертная Компания проектирование экспертиза изыскания консалтинг геология строительство'
  },
  {
    title: 'О компании',
    path: '/about',
    content: `О компании СПЭК Сибирская Проектная Экспертная Компания специализируется на проектировании объектов горнодобывающей промышленности 
    экспертизе промышленной безопасности инженерных изысканиях авторском надзоре ведущая компания проектная организация опытные специалисты
    инженеры проектировщики геологи эксперты высокая квалификация сертификаты лицензии команда профессионалов разработка проектов`
  },
  {
    title: 'Услуги',
    path: '/services',
    content: 'Услуги компании проектирование экспертиза изыскания сопровождение консультации'
  },
  {
    title: 'Проектирование горных производств',
    path: '/services/mining',
    content: `Проектирование горных производств разработка проектной документации карьеры разрезы шахты 
    технологические схемы вентиляция водоотлив расчет запасов полезных ископаемых план горных работ 
    буровзрывные работы транспорт отвалы хвостохранилища обогащение дробление добыча угля руды 
    открытая разработка подземная разработка промышленная безопасность экологическая безопасность`
  },
  {
    title: 'Экспертиза промышленной безопасности',
    path: '/services/expertise',
    content: `Экспертиза промышленной безопасности опасные производственные объекты ОПО проверка документации 
    соответствие нормативам Ростехнадзор анализ рисков техническое заключение декларация безопасности 
    оценка состояния зданий сооружений оборудования технические устройства экспертное заключение 
    аттестация экспертов независимая экспертиза промбезопасность`
  },
  {
    title: 'Инженерные изыскания',
    path: '/services/survey',
    content: `Инженерные изыскания геологические изыскания геодезические работы экологические исследования 
    инженерно-геологические изыскания гидрогеологические исследования топографическая съемка 
    геотехническое заключение испытания грунтов буровые работы лабораторные исследования 
    изучение участка оценка территории строительство проектирование анализ почвы грунтовые воды`
  },
  {
    title: 'Техническое сопровождение',
    path: '/services/support',
    content: `Техническое сопровождение авторский надзор консультации контроль качества строительства 
    проверка соответствия проекту инспекция объекта выезды на стройку документальное сопровождение 
    журнал авторского надзора акты протоколы корректировка проектных решений приемка работ 
    технический надзор строительный контроль сопровождение проекта`
  },
  {
    title: 'Квалификация',
    path: '/certificates',
    content: `Квалификация сертификаты лицензии свидетельства СРО допуски аккредитация разрешительная документация 
    право проектирования экспертизы изысканий профессиональные стандарты аттестованные специалисты 
    документы компетенции достижения награды`
  },
  {
    title: 'Новости',
    path: '/news',
    content: 'Новости компании события проекты достижения информация анонсы пресс-релизы'
  },
  {
    title: 'Вакансии',
    path: '/vacancies',
    content: `Вакансии работа в СПЭК карьера трудоустройство открытые позиции требуются инженер проектировщик 
    геолог эксперт специалист должность вакантные места прием на работу резюме собеседование 
    условия работы зарплата компенсации льготы офис команда коллектив`
  },
  {
    title: 'Карта объектов',
    path: '/objects-map',
    content: `Карта объектов реализованные проекты выполненные работы портфолио география деятельности 
    завершенные объекты строительство предприятия карьеры шахты промышленные объекты 
    производственные комплексы успешные проекты опыт работы`
  },
  {
    title: 'Контакты',
    path: '/contacts',
    content: `Контакты связь телефон адрес email почта офис расположение как связаться написать позвонить 
    обратная связь форма связи заявка консультация встреча местонахождение где находимся`
  }
];

export function searchSiteContent(query: string): SearchResult[] {
  if (!query.trim()) {
    return searchableContent.map(item => ({
      title: item.title,
      path: item.path,
      excerpt: '',
      relevance: 0
    }));
  }

  const normalizedQuery = query.toLowerCase().trim();
  const queryWords = normalizedQuery.split(/\s+/);

  const results = searchableContent
    .map(item => {
      const normalizedContent = item.content.toLowerCase();
      const normalizedTitle = item.title.toLowerCase();
      
      let relevance = 0;
      const matchedPhrases: string[] = [];

      if (normalizedTitle.includes(normalizedQuery)) {
        relevance += 100;
      }

      if (normalizedContent.includes(normalizedQuery)) {
        relevance += 50;
        const index = normalizedContent.indexOf(normalizedQuery);
        const start = Math.max(0, index - 40);
        const end = Math.min(normalizedContent.length, index + normalizedQuery.length + 40);
        matchedPhrases.push(item.content.substring(start, end));
      }

      queryWords.forEach(word => {
        if (word.length < 3) return;
        
        if (normalizedTitle.includes(word)) {
          relevance += 20;
        }
        
        const wordMatches = (normalizedContent.match(new RegExp(word, 'g')) || []).length;
        relevance += wordMatches * 5;

        if (wordMatches > 0 && matchedPhrases.length < 3) {
          const index = normalizedContent.indexOf(word);
          const start = Math.max(0, index - 40);
          const end = Math.min(normalizedContent.length, index + word.length + 40);
          matchedPhrases.push(item.content.substring(start, end));
        }
      });

      const excerpt = matchedPhrases.length > 0
        ? '...' + matchedPhrases[0].trim() + '...'
        : item.content.substring(0, 100) + '...';

      return {
        title: item.title,
        path: item.path,
        excerpt,
        relevance
      };
    })
    .filter(result => result.relevance > 0)
    .sort((a, b) => b.relevance - a.relevance);

  return results;
}
