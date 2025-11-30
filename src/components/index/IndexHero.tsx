import { Button } from "@/components/ui/button";

interface IndexHeroProps {
  scrollToSection: (section: string) => void;
}

const IndexHero = ({ scrollToSection }: IndexHeroProps) => {
  return (
    <section id="home" className="relative py-16 bg-white border-b">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              Предоставление комплексных инжиниринговых услуг для предприятий
              горной промышленности
            </h1>
            <p className="text-lg text-muted-foreground">
              Полный цикл работ: проектирование, экспертиза промышленной
              безопасности, инженерные изыскания
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => scrollToSection("services")}>
                Наши услуги
              </Button>
              <Button size="lg" variant="outline">
                Портфолио проектов
              </Button>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8">
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="text-3xl font-bold font-heading text-primary mb-2">
                  Основана в 2009 году
                </div>
                <div className="text-muted-foreground"></div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="text-3xl font-bold font-heading text-primary mb-2">
                  200+
                </div>
                <div className="text-muted-foreground">
                  реализованных проектов
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="text-3xl font-bold font-heading text-primary mb-2">
                  50+
                </div>
                <div className="text-muted-foreground">
                  специалистов в штате
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndexHero;
