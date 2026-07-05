import { createContext, useContext, useState, ReactNode } from 'react';
import { DoorModel } from '../types';
import { DOOR_MODELS } from '../data/doors';

interface DoorsContextValue {
  doors: DoorModel[];
  addDoor: (door: DoorModel) => void;
  deleteDoor: (doorId: string) => void;
  resetDefaultDoors: () => void;
}

const DoorsContext = createContext<DoorsContextValue | undefined>(undefined);

const STORAGE_KEY = 'shees_doors';

export function DoorsProvider({ children }: { children: ReactNode }) {
  const [doors, setDoors] = useState<DoorModel[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      } catch (e) {
        console.error('Failed to parse shees_doors', e);
      }
    }
    return DOOR_MODELS;
  });

  const addDoor = (newDoor: DoorModel) => {
    const updated = [...doors, newDoor];
    setDoors(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const deleteDoor = (doorId: string) => {
    const updated = doors.filter((d) => d.id !== doorId);
    setDoors(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const resetDefaultDoors = () => {
    setDoors(DOOR_MODELS);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DOOR_MODELS));
  };

  return (
    <DoorsContext.Provider value={{ doors, addDoor, deleteDoor, resetDefaultDoors }}>
      {children}
    </DoorsContext.Provider>
  );
}

export function useDoors() {
  const ctx = useContext(DoorsContext);
  if (!ctx) {
    throw new Error('useDoors must be used within a DoorsProvider');
  }
  return ctx;
}
