import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon in React-Leaflet
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

interface ObjectMarker {
  id: number;
  name: string;
  position: [number, number];
  description?: string;
}

const ObjectsMap = () => {
  const navigate = useNavigate();
  const [objects, setObjects] = useState<ObjectMarker[]>([
    { id: 1, name: 'Карьер "Северный"', position: [55.7558, 37.6173], description: 'Добыча угля, 2 млн тонн/год' },
    { id: 2, name: 'ОФ "Центральная"', position: [56.8389, 60.6057], description: 'Обогащение железной руды' },
    { id: 3, name: 'Шахта "Восточная"', position: [53.9007, 27.5590], description: 'Подземная добыча' },
  ]);
  const [newObjectName, setNewObjectName] = useState('');
  const [newObjectDescription, setNewObjectDescription] = useState('');
  const [selectedPosition, setSelectedPosition] = useState<[number, number] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        setSelectedPosition([e.latlng.lat, e.latlng.lng]);
        setIsDialogOpen(true);
      },
    });
    return null;
  };

  const handleAddObject = () => {
    if (newObjectName && selectedPosition) {
      const newObject: ObjectMarker = {
        id: Date.now(),
        name: newObjectName,
        position: selectedPosition,
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
              <CardContent className="p-0">
                <div className="h-[600px] rounded-lg overflow-hidden">
                  <MapContainer
                    center={[55.7558, 37.6173]}
                    zoom={5}
                    style={{ height: '100%', width: '100%' }}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <MapClickHandler />
                    {objects.map((obj) => (
                      <Marker key={obj.id} position={obj.position}>
                        <Popup>
                          <div className="p-2">
                            <h3 className="font-semibold mb-1">{obj.name}</h3>
                            {obj.description && (
                              <p className="text-sm text-muted-foreground mb-2">{obj.description}</p>
                            )}
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => handleDeleteObject(obj.id)}
                            >
                              <Icon name="Trash2" size={14} className="mr-1" />
                              Удалить
                            </Button>
                          </div>
                        </Popup>
                      </Marker>
                    ))}
                  </MapContainer>
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
                          <Icon name="X" size={14} />
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
            {selectedPosition && (
              <p className="text-sm text-muted-foreground">
                Координаты: {selectedPosition[0].toFixed(4)}, {selectedPosition[1].toFixed(4)}
              </p>
            )}
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
