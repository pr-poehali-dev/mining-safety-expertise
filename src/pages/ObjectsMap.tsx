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
                    <rect width="800" height="500" fill="url(#mapGradient)" />
                    <defs>
                      <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#e0f2fe', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#bae6fd', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    
                    <path
                      d="M 100 100 L 700 100 L 700 150 L 650 200 L 700 250 L 700 400 L 600 450 L 400 450 L 300 400 L 200 400 L 150 350 L 100 300 Z"
                      fill="hsl(var(--primary))"
                      opacity="0.1"
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                    />
                    
                    <text x="400" y="280" textAnchor="middle" fill="hsl(var(--primary))" fontSize="48" fontWeight="bold" opacity="0.1">
                      РОССИЯ
                    </text>
                    
                    <line x1="100" y1="250" x2="700" y2="250" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="5,5" opacity="0.3" />
                    <line x1="400" y1="100" x2="400" y2="450" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="5,5" opacity="0.3" />
                    
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