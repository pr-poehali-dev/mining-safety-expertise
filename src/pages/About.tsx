import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-20 w-full bg-primary shadow-sm">
        <div className="container flex h-24 items-center gap-6">
          <button onClick={() => navigate('/')} className="flex items-center gap-4">
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
          </button>
          <Button variant="secondary" size="sm" className="ml-auto" onClick={() => navigate('/')}>
            <Icon name="Home" size={16} className="mr-2" />
            На главную
          </Button>
        </div>
      </header>

      <main className="container py-16">
        <h1 className="font-heading text-5xl font-bold text-primary mb-8">О компании</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg text-muted-foreground mb-6">
            Сибирская Проектная Экспертная Компания — ведущая организация в области проектирования горных производств и промышленной безопасности.
          </p>
          
          <h2 className="font-heading text-3xl font-bold text-primary mt-12 mb-6">Наша миссия</h2>
          <p className="text-muted-foreground mb-6">
            Обеспечение высочайших стандартов безопасности и эффективности в горнодобывающей промышленности через инновационные проектные решения и экспертизу.
          </p>

          <h2 className="font-heading text-3xl font-bold text-primary mt-12 mb-6">Наши ценности</h2>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start gap-3">
              <Icon name="CheckCircle" className="text-secondary mt-1 flex-shrink-0" size={20} />
              <span><strong>Профессионализм</strong> — команда высококвалифицированных специалистов с многолетним опытом</span>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="CheckCircle" className="text-secondary mt-1 flex-shrink-0" size={20} />
              <span><strong>Безопасность</strong> — приоритет промышленной безопасности во всех проектах</span>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="CheckCircle" className="text-secondary mt-1 flex-shrink-0" size={20} />
              <span><strong>Инновации</strong> — использование современных технологий и методов проектирования</span>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="CheckCircle" className="text-secondary mt-1 flex-shrink-0" size={20} />
              <span><strong>Качество</strong> — соблюдение всех нормативов и стандартов отрасли</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default About;
