import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface IndexHeaderProps {
  activeSection: string;
  scrollToSection: (section: string) => void;
}

const IndexHeader = ({ activeSection, scrollToSection }: IndexHeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-20 w-full bg-primary shadow-sm">
      <div className="container flex h-24 items-center gap-6">
        <div className="flex items-center gap-4">
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
        </div>
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 flex-1 justify-center">
          <button
            onClick={() => scrollToSection('home')}
            className={`text-base font-medium transition-colors hover:text-secondary whitespace-nowrap ${
              activeSection === 'home' ? 'text-secondary' : 'text-white/90'
            }`}
          >
            Главная
          </button>
          <button
            onClick={() => navigate('/about')}
            className="text-base font-medium transition-colors hover:text-secondary whitespace-nowrap text-white/90"
          >
            О компании
          </button>
          <button
            onClick={() => navigate('/services')}
            className="text-base font-medium transition-colors hover:text-secondary whitespace-nowrap text-white/90"
          >
            Услуги
          </button>
          <button
            onClick={() => navigate('/certificates')}
            className="text-base font-medium transition-colors hover:text-secondary whitespace-nowrap text-white/90"
          >
            Квалификация
          </button>
          <button
            onClick={() => navigate('/news')}
            className="text-base font-medium transition-colors hover:text-secondary whitespace-nowrap text-white/90"
          >
            Новости
          </button>
          <button
            onClick={() => navigate('/vacancies')}
            className="text-base font-medium transition-colors hover:text-secondary whitespace-nowrap text-white/90"
          >
            Вакансии
          </button>
          <button
            onClick={() => navigate('/objects-map')}
            className="text-base font-medium transition-colors hover:text-secondary whitespace-nowrap text-white/90"
          >
            Карта объектов
          </button>
          <button
            onClick={() => navigate('/contacts')}
            className="text-base font-medium transition-colors hover:text-secondary whitespace-nowrap text-white/90"
          >
            Контакты
          </button>
        </nav>
        <Button variant="secondary" className="ml-auto">Поиск</Button>
      </div>
    </header>
  );
};

export default IndexHeader;
