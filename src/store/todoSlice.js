export const todoSlice = (set) => ({
  isTouch: false,
  types: ['Fruit', 'Vegetable'],
  slots: [],
  todos: [
    { type: 'Fruit', name: 'Apple' },
    { type: 'Vegetable', name: 'Broccoli' },
    { type: 'Vegetable', name: 'Mushroom' },
    { type: 'Fruit', name: 'Banana' },
    { type: 'Vegetable', name: 'Tomato' },
    { type: 'Fruit', name: 'Orange' },
    { type: 'Fruit', name: 'Mango' },
    { type: 'Fruit', name: 'Pineapple' },
    { type: 'Vegetable', name: 'Cucumber' },
    { type: 'Fruit', name: 'Watermelon' },
    { type: 'Vegetable', name: 'Carrot' },
  ],

  addSlots: (value) =>
    set((state) => {
      return {
        ...state,
        todos: state.todos?.filter((item) => item?.name !== value?.name),
        slots: [...state.slots, value],
      }
    }),
  removeSlots: (value) =>
    set((state) => {
      return {
        ...state,
        todos: [...state.todos, value],
        slots: state.slots?.filter((item) => item?.name !== value?.name),
      }
    }),
  autoRemoveSlots: () =>
    set((state) => {
      const newSlots = [...state.slots]
      const item = newSlots?.shift()

      if (item) {
        return {
          ...state,
          slots: newSlots,
          todos: [...state.todos, item],
        }
      } else {
        return state
      }
    }),
  setTouch: (value) =>
    set((state) => {
      return { ...state, isTouch: value }
    }),
})
