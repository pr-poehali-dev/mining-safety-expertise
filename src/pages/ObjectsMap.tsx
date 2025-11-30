import { useState, useEffect } from 'react';
import IndexHeader from '@/components/index/IndexHeader';
import MapControls from '@/components/objects-map/MapControls';
import MapCanvas from '@/components/objects-map/MapCanvas';
import MapDialogs, { ObjectMarker } from '@/components/objects-map/MapDialogs';

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
        <MapControls
          isEditMode={isEditMode}
          setIsEditMode={setIsEditMode}
          setIsAddDialogOpen={setIsAddDialogOpen}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          objects={objects}
        />

        <MapCanvas
          filteredObjects={filteredObjects}
          isEditMode={isEditMode}
          draggingObject={draggingObject}
          hoveredObject={hoveredObject}
          setHoveredObject={setHoveredObject}
          setSelectedObject={setSelectedObject}
          setIsInfoDialogOpen={setIsInfoDialogOpen}
          setEditingObject={setEditingObject}
          setIsEditDialogOpen={setIsEditDialogOpen}
          handleDeleteObject={handleDeleteObject}
          handleDragStart={handleDragStart}
          handleDragMove={handleDragMove}
          handleDragEnd={handleDragEnd}
          getTypeColor={getTypeColor}
          getTypeLabel={getTypeLabel}
        />

        <MapDialogs
          isAddDialogOpen={isAddDialogOpen}
          setIsAddDialogOpen={setIsAddDialogOpen}
          isEditDialogOpen={isEditDialogOpen}
          setIsEditDialogOpen={setIsEditDialogOpen}
          isInfoDialogOpen={isInfoDialogOpen}
          setIsInfoDialogOpen={setIsInfoDialogOpen}
          newObject={newObject}
          setNewObject={setNewObject}
          editingObject={editingObject}
          setEditingObject={setEditingObject}
          selectedObject={selectedObject}
          handleAddObject={handleAddObject}
          handleEditObject={handleEditObject}
          handleDeleteObject={handleDeleteObject}
          getTypeLabel={getTypeLabel}
          getTypeColor={getTypeColor}
        />
      </main>
    </div>
  );
};

export default ObjectsMap;
