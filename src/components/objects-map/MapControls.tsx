import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { ObjectMarker } from "./MapDialogs";

interface MapControlsProps {
  isEditMode: boolean;
  setIsEditMode: (mode: boolean) => void;
  setIsAddDialogOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedType: string;
  setSelectedType: (type: string) => void;
  objects: ObjectMarker[];
}

const MapControls = ({
  isEditMode,
  setIsEditMode,
  setIsAddDialogOpen,
  searchQuery,
  setSearchQuery,
  selectedType,
  setSelectedType,
  objects
}: MapControlsProps) => {
  return (
    <>
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
    </>
  );
};

export default MapControls;
