import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ModeState {
  mode: 'dark' | 'light';
  toggleMode: () => void;
}

export const useMode = create<ModeState>()(
  persist(
    (set) => ({
      mode: 'dark',
      toggleMode: () =>
        set(({ mode }) => ({ mode: mode === 'dark' ? 'light' : 'dark' })),
    }),
    { name: 'mode' }
  )
);
