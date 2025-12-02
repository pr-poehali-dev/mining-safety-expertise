import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Icon from '@/components/ui/icon';

const IndexHeader = () => {
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 w-full bg-primary shadow-sm">
      <div className="container flex h-24 items-center gap-6">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-4 transition-opacity hover:opacity-80"
        >
          <div className="h-16 w-16 flex-shrink-0">
            <img 
              src="https://cdn.poehali.dev/files/35047487-09a0-4e51-86f1-5e184b7d5afa.png" 
              alt="СПЭК" 
              className="h-full w-full object-contain"
            />
          </div>
          <div className="hidden lg:flex flex-col items-start">
            <span className="font-heading font-bold leading-tight text-white text-sm">Сибирская Проектная</span>
            <span className="font-heading font-bold text-white/90 leading-tight text-sm">Экспертная Компания</span>
          </div>
        </button>
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 flex-1 justify-center">
          <button
            onClick={() => navigate('/')}
            className="text-base font-medium transition-colors hover:text-secondary whitespace-nowrap text-white/90"
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
        <Button 
          variant="secondary" 
          className="ml-auto gap-2"
          onClick={() => setIsSearchOpen(true)}
        >
          <Icon name="Search" size={16} />
          Поиск
        </Button>
      </div>

      <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Поиск по сайту</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="relative">
              <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Введите запрос..."
                className="pl-10"
                autoFocus
              />
            </div>
            <div className="text-sm text-muted-foreground">
              <p className="mb-2 font-medium">Быстрые ссылки:</p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setIsSearchOpen(false);
                    navigate('/services');
                  }}
                  className="text-left p-2 rounded hover:bg-accent transition-colors"
                >
                  Услуги компании
                </button>
                <button
                  onClick={() => {
                    setIsSearchOpen(false);
                    navigate('/about');
                  }}
                  className="text-left p-2 rounded hover:bg-accent transition-colors"
                >
                  О компании
                </button>
                <button
                  onClick={() => {
                    setIsSearchOpen(false);
                    navigate('/certificates');
                  }}
                  className="text-left p-2 rounded hover:bg-accent transition-colors"
                >
                  Квалификация
                </button>
                <button
                  onClick={() => {
                    setIsSearchOpen(false);
                    navigate('/objects-map');
                  }}
                  className="text-left p-2 rounded hover:bg-accent transition-colors"
                >
                  Карта объектов
                </button>
                <button
                  onClick={() => {
                    setIsSearchOpen(false);
                    navigate('/vacancies');
                  }}
                  className="text-left p-2 rounded hover:bg-accent transition-colors"
                >
                  Вакансии
                </button>
                <button
                  onClick={() => {
                    setIsSearchOpen(false);
                    navigate('/contacts');
                  }}
                  className="text-left p-2 rounded hover:bg-accent transition-colors"
                >
                  Контакты
                </button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default IndexHeader;