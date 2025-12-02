import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useNavigate } from 'react-router-dom';
import { useState, useMemo } from 'react';
import Icon from '@/components/ui/icon';
import { searchSiteContent } from '@/utils/searchContent';

const IndexHeader = () => {
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const searchResults = useMemo(() => {
    return searchSiteContent(searchQuery);
  }, [searchQuery]);

  const handleSearch = (path: string) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    navigate(path);
  };

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
          <div className="hidden lg:flex flex-col">
            <span className="font-heading font-bold leading-tight text-white text-sm text-left">Сибирская Проектная</span>
            <span className="font-heading font-bold text-white/90 leading-tight text-sm text-left">Экспертная Компания</span>
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="text-sm">
              <p className="mb-2 font-medium text-muted-foreground">
                {searchQuery.trim() ? `Найдено результатов: ${searchResults.length}` : 'Все разделы сайта:'}
              </p>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {searchResults.map((result) => (
                  <button
                    key={result.path}
                    onClick={() => handleSearch(result.path)}
                    className="text-left p-3 rounded hover:bg-accent transition-colors w-full border"
                  >
                    <div className="font-medium mb-1 flex items-center gap-2">
                      <Icon name="FileText" size={16} className="text-primary" />
                      {result.title}
                    </div>
                    {result.excerpt && (
                      <div className="text-xs text-muted-foreground line-clamp-2">
                        {result.excerpt}
                      </div>
                    )}
                  </button>
                ))}
              </div>
              {searchResults.length === 0 && searchQuery.trim() && (
                <p className="text-center py-4 text-muted-foreground">
                  Ничего не найдено. Попробуйте другой запрос.
                </p>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default IndexHeader;