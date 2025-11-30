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
                    <rect width="800" height="500" fill="#f0f9ff" />
                    
                    <path
                      d="M 50 180 L 120 160 L 180 140 L 250 130 L 320 140 L 380 150 L 450 145 L 520 150 L 590 155 L 650 160 L 710 170 L 740 190 L 750 220 L 745 250 L 730 280 L 710 310 L 680 330 L 640 340 L 590 345 L 530 350 L 470 345 L 410 340 L 350 330 L 290 320 L 230 300 L 180 280 L 130 260 L 90 230 L 60 200 Z"
                      fill="#3b82f6"
                      opacity="0.7"
                      stroke="#1e40af"
                      strokeWidth="3"
                    />
                    
                    <text x="400" y="260" textAnchor="middle" fill="#1e40af" fontSize="64" fontWeight="bold" opacity="0.15">
                      РОССИЯ
                    </text>
                    
                    <circle cx="200" cy="210" r="3" fill="#94a3b8" opacity="0.5" />
                    <text x="200" y="200" textAnchor="middle" fontSize="10" fill="#64748b">Москва</text>
                    
                    <circle cx="550" cy="240" r="3" fill="#94a3b8" opacity="0.5" />
                    <text x="550" y="230" textAnchor="middle" fontSize="10" fill="#64748b">Новосибирск</text>
                    
                    <circle cx="680" cy="270" r="3" fill="#94a3b8" opacity="0.5" />
                    <text x="680" y="260" textAnchor="middle" fontSize="10" fill="#64748b">Владивосток</text>
                    
                    <line x1="50" y1="250" x2="750" y2="250" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="5,5" opacity="0.4" />
                    <line x1="400" y1="130" x2="400" y2="350" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="5,5" opacity="0.4" />
                    
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