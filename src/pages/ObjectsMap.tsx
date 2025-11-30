import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import RussiaMapSVG from "@/components/objects-map/RussiaMapSVG";

interface ObjectMarker {
  id: number;
  name: string;
  x: number;
  y: number;
  description?: string;
  type?: 'project' | 'expertise' | 'research';
  region?: string;
}

const ObjectsMap = () => {
  const navigate = useNavigate();
  const [objects] = useState<ObjectMarker[]>([
    { id: 1, name: 'Карьер Кузнецкий', x: 180, y: 420, type: 'project', region: 'Кемеровская обл.' },
    { id: 2, name: 'ОФ Абаканская', x: 750, y: 480, type: 'project', region: 'Республика Хакасия' },
    { id: 3, name: 'Шахта Воркутинская', x: 540, y: 340, type: 'expertise', region: 'Республика Коми' },
    { id: 4, name: 'ГОК Удоканский', x: 1250, y: 490, type: 'research', region: 'Забайкальский край' },
    { id: 5, name: 'Карьер Мурманский', x: 200, y: 430, type: 'project', region: 'Мурманская обл.' },
    { id: 6, name: 'ОФ Магаданская', x: 1380, y: 450, type: 'expertise', region: 'Магаданская обл.' },
    { id: 7, name: 'Рудник Полярный', x: 800, y: 350, type: 'research', region: 'Красноярский край' },
    { id: 8, name: 'Карьер Южно-Уральский', x: 380, y: 500, type: 'project', region: 'Челябинская обл.' },
    { id: 9, name: 'ГОК Иркутский', x: 1000, y: 560, type: 'expertise', region: 'Иркутская обл.' },
    { id: 10, name: 'Шахта Ростовская', x: 220, y: 560, type: 'research', region: 'Ростовская обл.' },
    { id: 11, name: 'Карьер Якутский', x: 1200, y: 350, type: 'project', region: 'Республика Саха' },
    { id: 12, name: 'ОФ Белгородская', x: 240, y: 520, type: 'expertise', region: 'Белгородская обл.' },
    { id: 13, name: 'ГОК Норильский', x: 700, y: 280, type: 'project', region: 'Красноярский край' },
    { id: 14, name: 'Шахта Донецкая', x: 240, y: 550, type: 'expertise', region: 'Ростовская обл.' },
    { id: 15, name: 'Карьер Приморский', x: 1350, y: 540, type: 'research', region: 'Приморский край' },
  ]);
  const [hoveredObject, setHoveredObject] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredObjects = selectedType === 'all' 
    ? objects 
    : objects.filter(obj => obj.type === selectedType);

  const getTypeLabel = (type?: string) => {
    switch (type) {
      case 'project': return 'Проектирование';
      case 'expertise': return 'Экспертиза';
      case 'research': return 'Изыскания';
      default: return 'Другое';
    }
  };

  const getTypeColor = (type?: string) => {
    switch (type) {
      case 'project': return 'bg-green-500';
      case 'expertise': return 'bg-red-500';
      case 'research': return 'bg-amber-500';
      default: return 'bg-blue-500';
    }
  };

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

      <main className="container py-8">
        <div className="flex flex-col lg:flex-row gap-4 items-start mb-6">
          <div className="flex-1">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">Карта объектов</h1>
            <p className="text-lg text-muted-foreground">
              География реализованных проектов по всей России
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Button
            variant={selectedType === 'all' ? 'default' : 'outline'}
            onClick={() => setSelectedType('all')}
            className="w-full"
          >
            Все объекты ({objects.length})
          </Button>
          <Button
            variant={selectedType === 'project' ? 'default' : 'outline'}
            onClick={() => setSelectedType('project')}
            className="w-full flex items-center justify-center gap-2"
          >
            <div className="w-3 h-3 rounded-full bg-green-500" />
            Проектирование ({objects.filter(o => o.type === 'project').length})
          </Button>
          <Button
            variant={selectedType === 'expertise' ? 'default' : 'outline'}
            onClick={() => setSelectedType('expertise')}
            className="w-full flex items-center justify-center gap-2"
          >
            <div className="w-3 h-3 rounded-full bg-red-500" />
            Экспертиза ({objects.filter(o => o.type === 'expertise').length})
          </Button>
          <Button
            variant={selectedType === 'research' ? 'default' : 'outline'}
            onClick={() => setSelectedType('research')}
            className="w-full flex items-center justify-center gap-2"
          >
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            Изыскания ({objects.filter(o => o.type === 'research').length})
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-0">
                <div className="relative bg-background rounded-lg overflow-hidden aspect-video">
                  <RussiaMapSVG 
                    objects={filteredObjects}
                    onObjectHover={setHoveredObject}
                    hoveredObject={hoveredObject}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MapPin" size={20} />
                  Список объектов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-[600px] overflow-y-auto pr-2">
                  {filteredObjects.map((obj) => (
                    <div
                      key={obj.id}
                      className={`p-3 rounded-lg border cursor-pointer transition-all ${
                        hoveredObject === obj.id
                          ? 'bg-primary/5 border-primary shadow-sm'
                          : 'bg-background hover:bg-accent'
                      }`}
                      onMouseEnter={() => setHoveredObject(obj.id)}
                      onMouseLeave={() => setHoveredObject(null)}
                    >
                      <div className="flex items-start gap-2">
                        <div className={`w-3 h-3 rounded-full mt-1 flex-shrink-0 ${getTypeColor(obj.type)}`} />
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm mb-1">{obj.name}</div>
                          <Badge variant="outline" className="text-xs mb-1">
                            {getTypeLabel(obj.type)}
                          </Badge>
                          {obj.region && (
                            <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                              <Icon name="MapPin" size={12} />
                              {obj.region}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ObjectsMap;
