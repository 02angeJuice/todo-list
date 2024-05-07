export const todoSlice = (set) => ({
  types: ["Fruit", "Vegetable"],
  slots: [],
  todos: [
    { type: "Fruit", name: "Apple" },
    { type: "Vegetable", name: "Broccoli" },
    { type: "Vegetable", name: "Mushroom" },
    { type: "Fruit", name: "Banana" },
    { type: "Vegetable", name: "Tomato" },
    { type: "Fruit", name: "Orange" },
    { type: "Fruit", name: "Mango" },
    { type: "Fruit", name: "Pineapple" },
    { type: "Vegetable", name: "Cucumber" },
    { type: "Fruit", name: "Watermelon" },
    { type: "Vegetable", name: "Carrot" },
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
      const isInTodos = state.todos?.some((item) => item?.name === value?.name)
      const updatedTodos = isInTodos ? state.todos : [...state.todos, value]

      return {
        ...state,
        todos: updatedTodos,
        slots: state.slots?.filter((item) => item?.name !== value?.name),
      }
    }),
})
