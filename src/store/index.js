import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { todoSlice } from './todoSlice'

export const useBoundStore = create(
  persist(
    (...a) => ({
      ...todoSlice(...a),
    }),
    { name: 'todo-store', storage: createJSONStorage(() => localStorage) }
  )
)
