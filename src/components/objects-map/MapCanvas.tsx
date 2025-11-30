import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { ObjectMarker } from "./MapDialogs";

interface MapCanvasProps {
  filteredObjects: ObjectMarker[];
  isEditMode: boolean;
  draggingObject: number | null;
  hoveredObject: number | null;
  setHoveredObject: (id: number | null) => void;
  setSelectedObject: (obj: ObjectMarker) => void;
  setIsInfoDialogOpen: (open: boolean) => void;
  setEditingObject: (obj: ObjectMarker) => void;
  setIsEditDialogOpen: (open: boolean) => void;
  handleDeleteObject: (id: number) => void;
  handleDragStart: (e: React.MouseEvent, objId: number) => void;
  handleDragMove: (e: React.MouseEvent) => void;
  handleDragEnd: () => void;
  getTypeColor: (type?: string) => string;
  getTypeLabel: (type?: string) => string;
}

const MapCanvas = ({
  filteredObjects,
  isEditMode,
  draggingObject,
  hoveredObject,
  setHoveredObject,
  setSelectedObject,
  setIsInfoDialogOpen,
  setEditingObject,
  setIsEditDialogOpen,
  handleDeleteObject,
  handleDragStart,
  handleDragMove,
  handleDragEnd,
  getTypeColor,
  getTypeLabel
}: MapCanvasProps) => {
  return (
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
  );
};

export default MapCanvas;
