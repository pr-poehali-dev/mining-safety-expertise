import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import RussiaMapSVG from "@/components/objects-map/RussiaMapSVG";
import IndexHeader from '@/components/index/IndexHeader';

interface ObjectMarker {
  id: number;
  name: string;
  x: number;
  y: number;
  description?: string;
  type?: 'project' | 'expertise' | 'research';
  region?: string;
}

const STORAGE_KEY = 'objects-map-data';

const defaultObjects: ObjectMarker[] = [
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
];

const loadObjectsFromStorage = (): ObjectMarker[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : defaultObjects;
  } catch {
    return defaultObjects;
  }
};

const ObjectsMap = () => {
  const [objects, setObjects] = useState<ObjectMarker[]>(loadObjectsFromStorage);
  const [hoveredObject, setHoveredObject] = useState<number | null>(null);
  const [selectedObject, setSelectedObject] = useState<ObjectMarker | null>(null);
  const [isInfoDialogOpen, setIsInfoDialogOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [draggingObject, setDraggingObject] = useState<number | null>(null);
  const [mapRect, setMapRect] = useState<DOMRect | null>(null);
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingObject, setEditingObject] = useState<ObjectMarker | null>(null);
  const [newObject, setNewObject] = useState<Partial<ObjectMarker>>({
    name: '',
    x: 700,
    y: 400,
    type: 'project',
    region: '',
    description: ''
  });

  const filteredObjects = objects
    .filter(obj => selectedType === 'all' || obj.type === selectedType)
    .filter(obj => {
      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase();
      return (
        obj.name.toLowerCase().includes(query) ||
        obj.region?.toLowerCase().includes(query) ||
        obj.description?.toLowerCase().includes(query)
      );
    });

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

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(objects));
  }, [objects]);

  const handleAddObject = () => {
    if (!newObject.name) return;
    const obj: ObjectMarker = {
      id: Date.now(),
      name: newObject.name,
      x: newObject.x || 700,
      y: newObject.y || 400,
      type: (newObject.type as 'project' | 'expertise' | 'research') || 'project',
      region: newObject.region,
      description: newObject.description
    };
    setObjects([...objects, obj]);
    setNewObject({ name: '', x: 700, y: 400, type: 'project', region: '', description: '' });
    setIsAddDialogOpen(false);
  };

  const handleEditObject = () => {
    if (!editingObject) return;
    setObjects(objects.map(obj => obj.id === editingObject.id ? editingObject : obj));
    setEditingObject(null);
    setIsEditDialogOpen(false);
  };

  const handleDeleteObject = (id: number) => {
    setObjects(objects.filter(obj => obj.id !== id));
  };

  const handleResetToDefault = () => {
    if (confirm('Вы уверены? Все изменения будут сброшены к исходному состоянию.')) {
      setObjects(defaultObjects);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultObjects));
    }
  };

  const openEditDialog = (obj: ObjectMarker) => {
    setEditingObject({ ...obj });
    setIsEditDialogOpen(true);
  };

  const handleDragStart = (e: React.MouseEvent, objId: number) => {
    e.preventDefault();
    setDraggingObject(objId);
    const mapElement = (e.target as HTMLElement).closest('.map-container');
    if (mapElement) {
      setMapRect(mapElement.getBoundingClientRect());
    }
  };

  const handleDragMove = (e: React.MouseEvent) => {
    if (draggingObject === null || !mapRect) return;
    
    const x = ((e.clientX - mapRect.left) / mapRect.width) * 1500;
    const y = ((e.clientY - mapRect.top) / mapRect.height) * 700;
    
    setObjects(objects.map(obj => 
      obj.id === draggingObject 
        ? { ...obj, x: Math.max(0, Math.min(1500, x)), y: Math.max(0, Math.min(700, y)) }
        : obj
    ));
  };

  const handleDragEnd = () => {
    setDraggingObject(null);
    setMapRect(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <IndexHeader />

      <main className="container py-8">
        <div className="flex flex-col lg:flex-row gap-4 items-start mb-6">
          <div className="flex-1">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">Карта объектов</h1>
            <p className="text-lg text-muted-foreground">
              География реализованных проектов по всей России
            </p>
          </div>
          <div className="flex gap-2">
            <Button 
              variant={isEditMode ? "default" : "outline"} 
              onClick={() => setIsEditMode(!isEditMode)} 
              className="gap-2"
            >
              <Icon name="Edit" size={16} />
              {isEditMode ? 'Готово' : 'Редактировать'}
            </Button>
            <Button variant="outline" onClick={handleResetToDefault} className="gap-2">
              <Icon name="RotateCcw" size={16} />
              Сбросить
            </Button>
            <Button onClick={() => setIsAddDialogOpen(true)} className="gap-2">
              <Icon name="Plus" size={18} />
              Добавить
            </Button>
          </div>
        </div>

        <div className="mb-6">
          <div className="relative max-w-md">
            <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Поиск по названию, региону или описанию..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
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

        <div className="max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-4">
              <div 
                className="relative rounded-lg overflow-hidden map-container"
                onMouseMove={isEditMode ? handleDragMove : undefined}
                onMouseUp={isEditMode ? handleDragEnd : undefined}
                onMouseLeave={isEditMode ? handleDragEnd : undefined}
              >
                <img 
                  src="https://cdn.poehali.dev/files/73dddc8d-5a17-4785-a7f2-5a3372646b73.png"
                  alt="Карта России с объектами"
                  className="w-full h-auto"
                />
                {filteredObjects.map((obj) => (
                  <div
                    key={obj.id}
                    className="absolute"
                    style={{
                      left: `${(obj.x / 1500) * 100}%`,
                      top: `${(obj.y / 700) * 100}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    {isEditMode ? (
                      <div className="flex items-center gap-1 bg-white rounded-full shadow-lg p-1">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-7 w-7 p-0 rounded-full"
                          onClick={() => {
                            setEditingObject({ ...obj });
                            setIsEditDialogOpen(true);
                          }}
                          title="Редактировать"
                        >
                          <Icon name="Edit" size={14} />
                        </Button>
                        <div 
                          className={`w-4 h-4 rounded-full cursor-move ${getTypeColor(obj.type)} ${draggingObject === obj.id ? 'ring-2 ring-white shadow-lg scale-125' : ''}`}
                          onMouseDown={(e) => handleDragStart(e, obj.id)}
                          title="Перетащить"
                        />
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-7 w-7 p-0 rounded-full text-destructive hover:text-destructive"
                          onClick={() => {
                            if (confirm(`Удалить объект "${obj.name}"?`)) {
                              handleDeleteObject(obj.id);
                            }
                          }}
                          title="Удалить"
                        >
                          <Icon name="Trash2" size={14} />
                        </Button>
                      </div>
                    ) : (
                      <div
                        className={`w-4 h-4 rounded-full cursor-pointer transition-all ${getTypeColor(obj.type)} ${
                          hoveredObject === obj.id ? 'scale-150 ring-4 ring-white shadow-lg' : 'scale-100'
                        }`}
                        onMouseEnter={() => setHoveredObject(obj.id)}
                        onMouseLeave={() => setHoveredObject(null)}
                        onClick={() => {
                          setSelectedObject(obj);
                          setIsInfoDialogOpen(true);
                        }}
                        title={`${obj.name} - ${getTypeLabel(obj.type)}`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Добавить объект на карту</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="add-name">Название объекта *</Label>
              <Input
                id="add-name"
                value={newObject.name}
                onChange={(e) => setNewObject({ ...newObject, name: e.target.value })}
                placeholder="Например: Карьер Северный"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="add-x">Координата X</Label>
                <Input
                  id="add-x"
                  type="number"
                  value={newObject.x}
                  onChange={(e) => setNewObject({ ...newObject, x: Number(e.target.value) })}
                />
              </div>
              <div>
                <Label htmlFor="add-y">Координата Y</Label>
                <Input
                  id="add-y"
                  type="number"
                  value={newObject.y}
                  onChange={(e) => setNewObject({ ...newObject, y: Number(e.target.value) })}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="add-type">Тип работ</Label>
              <Select
                value={newObject.type}
                onValueChange={(value) => setNewObject({ ...newObject, type: value as 'project' | 'expertise' | 'research' })}
              >
                <SelectTrigger id="add-type">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="project">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      Проектирование
                    </div>
                  </SelectItem>
                  <SelectItem value="expertise">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      Экспертиза
                    </div>
                  </SelectItem>
                  <SelectItem value="research">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-amber-500" />
                      Изыскания
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="add-region">Регион</Label>
              <Input
                id="add-region"
                value={newObject.region}
                onChange={(e) => setNewObject({ ...newObject, region: e.target.value })}
                placeholder="Например: Кемеровская обл."
              />
            </div>
            <div>
              <Label htmlFor="add-description">Описание</Label>
              <Textarea
                id="add-description"
                value={newObject.description}
                onChange={(e) => setNewObject({ ...newObject, description: e.target.value })}
                placeholder="Краткое описание объекта"
                rows={3}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              Отмена
            </Button>
            <Button onClick={handleAddObject} disabled={!newObject.name}>
              Добавить
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Редактировать объект</DialogTitle>
          </DialogHeader>
          {editingObject && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="edit-name">Название объекта *</Label>
                <Input
                  id="edit-name"
                  value={editingObject.name}
                  onChange={(e) => setEditingObject({ ...editingObject, name: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="edit-x">Координата X</Label>
                  <Input
                    id="edit-x"
                    type="number"
                    value={editingObject.x}
                    onChange={(e) => setEditingObject({ ...editingObject, x: Number(e.target.value) })}
                  />
                </div>
                <div>
                  <Label htmlFor="edit-y">Координата Y</Label>
                  <Input
                    id="edit-y"
                    type="number"
                    value={editingObject.y}
                    onChange={(e) => setEditingObject({ ...editingObject, y: Number(e.target.value) })}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="edit-type">Тип работ</Label>
                <Select
                  value={editingObject.type}
                  onValueChange={(value) => setEditingObject({ ...editingObject, type: value as 'project' | 'expertise' | 'research' })}
                >
                  <SelectTrigger id="edit-type">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="project">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        Проектирование
                      </div>
                    </SelectItem>
                    <SelectItem value="expertise">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        Экспертиза
                      </div>
                    </SelectItem>
                    <SelectItem value="research">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-amber-500" />
                        Изыскания
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="edit-region">Регион</Label>
                <Input
                  id="edit-region"
                  value={editingObject.region}
                  onChange={(e) => setEditingObject({ ...editingObject, region: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="edit-description">Описание</Label>
                <Textarea
                  id="edit-description"
                  value={editingObject.description}
                  onChange={(e) => setEditingObject({ ...editingObject, description: e.target.value })}
                  rows={3}
                />
              </div>
            </div>
          )}
          <DialogFooter className="flex-row gap-2 sm:justify-between">
            <Button
              variant="destructive"
              onClick={() => {
                if (editingObject && confirm(`Удалить объект "${editingObject.name}"?`)) {
                  handleDeleteObject(editingObject.id);
                  setIsEditDialogOpen(false);
                  setEditingObject(null);
                }
              }}
              className="gap-2"
            >
              <Icon name="Trash2" size={16} />
              Удалить
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                Отмена
              </Button>
              <Button onClick={handleEditObject}>
                Сохранить
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Info Dialog */}
      <Dialog open={isInfoDialogOpen} onOpenChange={setIsInfoDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${getTypeColor(selectedObject?.type)}`} />
              {selectedObject?.name}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label className="text-sm font-medium text-muted-foreground">Тип объекта</Label>
              <p className="text-base mt-1">{selectedObject && getTypeLabel(selectedObject.type)}</p>
            </div>
            {selectedObject?.region && (
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Регион</Label>
                <p className="text-base mt-1">{selectedObject.region}</p>
              </div>
            )}
            {selectedObject?.description && (
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Описание</Label>
                <p className="text-base mt-1">{selectedObject.description}</p>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsInfoDialogOpen(false)}
            >
              Закрыть
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ObjectsMap;