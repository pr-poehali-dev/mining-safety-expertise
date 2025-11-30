import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export interface ObjectMarker {
  id: number;
  name: string;
  x: number;
  y: number;
  description?: string;
  type?: 'project' | 'expertise' | 'research';
  region?: string;
}

interface MapDialogsProps {
  isAddDialogOpen: boolean;
  setIsAddDialogOpen: (open: boolean) => void;
  isEditDialogOpen: boolean;
  setIsEditDialogOpen: (open: boolean) => void;
  isInfoDialogOpen: boolean;
  setIsInfoDialogOpen: (open: boolean) => void;
  newObject: Partial<ObjectMarker>;
  setNewObject: (obj: Partial<ObjectMarker>) => void;
  editingObject: ObjectMarker | null;
  setEditingObject: (obj: ObjectMarker | null) => void;
  selectedObject: ObjectMarker | null;
  handleAddObject: () => void;
  handleEditObject: () => void;
  handleDeleteObject: (id: number) => void;
  getTypeLabel: (type?: string) => string;
  getTypeColor: (type?: string) => string;
}

const MapDialogs = ({
  isAddDialogOpen,
  setIsAddDialogOpen,
  isEditDialogOpen,
  setIsEditDialogOpen,
  isInfoDialogOpen,
  setIsInfoDialogOpen,
  newObject,
  setNewObject,
  editingObject,
  setEditingObject,
  selectedObject,
  handleAddObject,
  handleEditObject,
  handleDeleteObject,
  getTypeLabel,
  getTypeColor
}: MapDialogsProps) => {
  return (
    <>
      {/* Add Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Добавить объект</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Название объекта</Label>
              <Input
                id="name"
                value={newObject.name}
                onChange={(e) => setNewObject({ ...newObject, name: e.target.value })}
                placeholder="Название объекта"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="x">Координата X</Label>
                <Input
                  id="x"
                  type="number"
                  value={newObject.x}
                  onChange={(e) => setNewObject({ ...newObject, x: Number(e.target.value) })}
                />
              </div>
              <div>
                <Label htmlFor="y">Координата Y</Label>
                <Input
                  id="y"
                  type="number"
                  value={newObject.y}
                  onChange={(e) => setNewObject({ ...newObject, y: Number(e.target.value) })}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="type">Тип работ</Label>
              <Select
                value={newObject.type}
                onValueChange={(value) => setNewObject({ ...newObject, type: value as 'project' | 'expertise' | 'research' })}
              >
                <SelectTrigger id="type">
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
              <Label htmlFor="region">Регион</Label>
              <Input
                id="region"
                value={newObject.region}
                onChange={(e) => setNewObject({ ...newObject, region: e.target.value })}
                placeholder="Регион"
              />
            </div>
            <div>
              <Label htmlFor="description">Описание</Label>
              <Textarea
                id="description"
                value={newObject.description}
                onChange={(e) => setNewObject({ ...newObject, description: e.target.value })}
                placeholder="Описание объекта"
                rows={3}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              Отмена
            </Button>
            <Button onClick={handleAddObject}>
              Добавить
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Редактировать объект</DialogTitle>
          </DialogHeader>
          {editingObject && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="edit-name">Название объекта</Label>
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
    </>
  );
};

export default MapDialogs;
