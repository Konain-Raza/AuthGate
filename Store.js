import { create } from 'zustand';

const useStore = create((set) => ({
  name: "login",
  setName: (newName) => set({ name: newName }),
}));

export default useStore;
