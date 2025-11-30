import { Separator } from '@/components/ui/separator';

const IndexFooter = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://cdn.poehali.dev/files/35047487-09a0-4e51-86f1-5e184b7d5afa.png" 
                alt="СПЭК" 
                className="h-12 w-12 object-contain"
              />
              <div className="flex flex-col">
                <span className="font-heading text-sm font-bold leading-tight">Сибирская Проектная</span>
                <span className="font-heading text-sm font-bold leading-tight text-white/90">Экспертная Компания</span>
              </div>
            </div>
            <p className="text-white/80 text-sm">
              Проектирование горных производств и промышленная безопасность
            </p>
          </div>
          <div>
            <h3 className="font-heading font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Проектирование</li>
              <li>Экспертиза ПБ</li>
              <li>Инженерные изыскания</li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading font-semibold mb-4">Компания</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>О нас</li>
              <li>Портфолио</li>
              <li>Вакансии</li>
              <li>Новости</li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>+7 (495) 123-45-67</li>
              <li>info@gorproekt.ru</li>
              <li>Москва, ул. Промышленная, 10</li>
            </ul>
          </div>
        </div>
        <Separator className="bg-white/20 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© 2024 Сибирская Проектная Экспертная Компания. Все права защищены.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Правовая информация</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default IndexFooter;
