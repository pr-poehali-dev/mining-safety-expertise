import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface ObjectMarker {
  id: number;
  name: string;
  x: number;
  y: number;
  description?: string;
}

const ObjectsMap = () => {
  const navigate = useNavigate();
  const mapRef = useRef<SVGSVGElement>(null);
  const [objects, setObjects] = useState<ObjectMarker[]>([
    { id: 1, name: 'Карьер "Северный"', x: 300, y: 150, description: 'Добыча угля, 2 млн тонн/год' },
    { id: 2, name: 'ОФ "Центральная"', x: 450, y: 200, description: 'Обогащение железной руды' },
    { id: 3, name: 'Шахта "Восточная"', x: 600, y: 250, description: 'Подземная добыча' },
  ]);
  const [newObjectName, setNewObjectName] = useState('');
  const [newObjectDescription, setNewObjectDescription] = useState('');
  const [selectedPosition, setSelectedPosition] = useState<{ x: number; y: number } | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [hoveredObject, setHoveredObject] = useState<number | null>(null);

  const handleMapClick = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!mapRef.current) return;
    
    const rect = mapRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setSelectedPosition({ x, y });
    setIsDialogOpen(true);
  };

  const handleAddObject = () => {
    if (newObjectName && selectedPosition) {
      const newObject: ObjectMarker = {
        id: Date.now(),
        name: newObjectName,
        x: selectedPosition.x,
        y: selectedPosition.y,
        description: newObjectDescription
      };
      setObjects([...objects, newObject]);
      setNewObjectName('');
      setNewObjectDescription('');
      setSelectedPosition(null);
      setIsDialogOpen(false);
    }
  };

  const handleDeleteObject = (id: number) => {
    setObjects(objects.filter(obj => obj.id !== id));
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

      <main className="container py-16">
        <div className="flex flex-col lg:flex-row gap-4 items-start mb-6">
          <div className="flex-1">
            <h1 className="font-heading text-5xl font-bold text-primary mb-2">Карта объектов</h1>
            <p className="text-lg text-muted-foreground">
              Интерактивная карта выполненных проектов и объектов
            </p>
          </div>
          <div className="bg-secondary/10 p-4 rounded-lg">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <Icon name="Info" size={16} />
              Кликните на карту, чтобы добавить новый объект
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-4">
                <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg overflow-hidden border-2 border-primary/20 min-h-[600px]">
                  <svg
                    ref={mapRef}
                    viewBox="0 0 800 500"
                    className="w-full cursor-crosshair"
                    style={{ height: '600px' }}
                    onClick={handleMapClick}
                  >
                    <rect width="800" height="500" fill="#f8fafc" />
                    
                    <g id="central-russia">
                      <path d="M 120 200 L 150 180 L 180 175 L 210 180 L 230 195 L 235 215 L 225 235 L 200 245 L 170 240 L 140 225 Z" 
                        fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" opacity="0.8" />
                      <text x="180" y="215" fontSize="8" fill="#0369a1" textAnchor="middle">Московская</text>
                    </g>
                    
                    <g id="volga">
                      <path d="M 235 215 L 260 210 L 285 215 L 300 230 L 295 250 L 275 260 L 250 255 L 235 240 Z" 
                        fill="#dbeafe" stroke="#0284c7" strokeWidth="1.5" opacity="0.8" />
                      <text x="270" y="235" fontSize="8" fill="#0369a1" textAnchor="middle">Поволжье</text>
                    </g>
                    
                    <g id="ural">
                      <path d="M 300 180 L 330 170 L 360 175 L 380 195 L 375 220 L 360 240 L 330 235 L 310 215 Z" 
                        fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" opacity="0.8" />
                      <text x="345" y="210" fontSize="8" fill="#0369a1" textAnchor="middle">Урал</text>
                    </g>
                    
                    <g id="siberia-west">
                      <path d="M 380 195 L 420 185 L 460 190 L 485 210 L 480 235 L 455 250 L 420 245 L 390 230 Z" 
                        fill="#dbeafe" stroke="#0284c7" strokeWidth="1.5" opacity="0.8" />
                      <text x="440" y="220" fontSize="8" fill="#0369a1" textAnchor="middle">Зап. Сибирь</text>
                    </g>
                    
                    <g id="siberia-central">
                      <path d="M 485 210 L 525 200 L 565 205 L 590 225 L 585 250 L 560 265 L 525 260 L 495 245 Z" 
                        fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" opacity="0.8" />
                      <text x="540" y="235" fontSize="8" fill="#0369a1" textAnchor="middle">Центр. Сибирь</text>
                    </g>
                    
                    <g id="far-east">
                      <path d="M 590 225 L 630 215 L 670 220 L 700 240 L 695 265 L 670 280 L 635 275 L 605 260 Z" 
                        fill="#dbeafe" stroke="#0284c7" strokeWidth="1.5" opacity="0.8" />
                      <text x="650" y="250" fontSize="8" fill="#0369a1" textAnchor="middle">Дальний Восток</text>
                    </g>
                    
                    <g id="north-west">
                      <path d="M 100 150 L 135 140 L 165 145 L 180 165 L 175 185 L 150 195 L 120 190 L 105 170 Z" 
                        fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" opacity="0.8" />
                      <text x="140" y="170" fontSize="8" fill="#0369a1" textAnchor="middle">С-Запад</text>
                    </g>
                    
                    <g id="south">
                      <path d="M 200 245 L 235 240 L 270 250 L 290 270 L 280 290 L 250 300 L 215 295 L 195 275 Z" 
                        fill="#dbeafe" stroke="#0284c7" strokeWidth="1.5" opacity="0.8" />
                      <text x="245" y="275" fontSize="8" fill="#0369a1" textAnchor="middle">Юг России</text>
                    </g>
                    
                    <g id="north">
                      <path d="M 250 130 L 300 120 L 350 125 L 390 140 L 430 145 L 470 150 L 500 155 L 520 145 L 500 130 L 460 120 L 410 115 L 360 110 L 310 105 L 270 115 Z" 
                        fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" opacity="0.8" />
                      <text x="385" y="130" fontSize="8" fill="#0369a1" textAnchor="middle">Север России</text>
                    </g>
                    
                    <g id="sakhalin">
                      <path d="M 710 260 L 720 255 L 725 270 L 720 285 L 710 280 Z" 
                        fill="#dbeafe" stroke="#0284c7" strokeWidth="1.5" opacity="0.8" />
                    </g>
                    
                    {objects.map((obj) => (
                      <g key={obj.id}>
                        <circle
                          cx={obj.x}
                          cy={obj.y}
                          r={hoveredObject === obj.id ? 12 : 8}
                          fill="hsl(var(--secondary))"
                          stroke="white"
                          strokeWidth="2"
                          onMouseEnter={() => setHoveredObject(obj.id)}
                          onMouseLeave={() => setHoveredObject(null)}
                          className="cursor-pointer transition-all"
                          style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}
                        />
                        {hoveredObject === obj.id && (
                          <g>
                            <rect
                              x={obj.x + 15}
                              y={obj.y - 25}
                              width="200"
                              height={obj.description ? 60 : 40}
                              fill="white"
                              stroke="hsl(var(--primary))"
                              strokeWidth="2"
                              rx="4"
                              style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))' }}
                            />
                            <text
                              x={obj.x + 25}
                              y={obj.y - 5}
                              fill="hsl(var(--primary))"
                              fontSize="14"
                              fontWeight="bold"
                            >
                              {obj.name}
                            </text>
                            {obj.description && (
                              <text
                                x={obj.x + 25}
                                y={obj.y + 15}
                                fill="hsl(var(--muted-foreground))"
                                fontSize="12"
                              >
                                {obj.description.substring(0, 25)}...
                              </text>
                            )}
                            <foreignObject x={obj.x + 165} y={obj.y - 20} width="40" height="30">
                              <Button
                                size="sm"
                                variant="ghost"
                                className="h-6 w-6 p-0"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDeleteObject(obj.id);
                                }}
                              >
                                <Icon name="X" size={12} />
                              </Button>
                            </foreignObject>
                          </g>
                        )}
                      </g>
                    ))}
                  </svg>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="List" size={20} />
                  Список объектов ({objects.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {objects.map((obj) => (
                    <div key={obj.id} className="p-3 border rounded-lg hover:bg-accent transition-colors">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm mb-1">{obj.name}</h4>
                          {obj.description && (
                            <p className="text-xs text-muted-foreground">{obj.description}</p>
                          )}
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleDeleteObject(obj.id)}
                        >
                          <Icon name="Trash2" size={14} />
                        </Button>
                      </div>
                    </div>
                  ))}
                  {objects.length === 0 && (
                    <p className="text-sm text-muted-foreground text-center py-4">
                      Нет объектов. Кликните на карту для добавления.
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Добавить новый объект</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="objectName">Название объекта *</Label>
              <Input
                id="objectName"
                placeholder="Например: Карьер 'Северный'"
                value={newObjectName}
                onChange={(e) => setNewObjectName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="objectDescription">Описание (опционально)</Label>
              <Input
                id="objectDescription"
                placeholder="Краткое описание объекта"
                value={newObjectDescription}
                onChange={(e) => setNewObjectDescription(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Отмена
            </Button>
            <Button onClick={handleAddObject} disabled={!newObjectName}>
              <Icon name="Plus" size={16} className="mr-2" />
              Добавить объект
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ObjectsMap;