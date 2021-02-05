// Reducer Function
export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const newItems = [...state.people, action.payload];
      return {
        ...state,
        people: newItems,
        isModalOpen: true,
        modalContent: 'item added',
      };
    case 'REMOVE_ITEM':
      const newPeople = state.people.filter(
        (person) => person.id !== action.payload
      );
      return { ...state, people: newPeople };
    case 'NO_VALUE':
      return {
        ...state,
        isModalOpen: true,
        modalContent: 'enter name',
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        isModalOpen: false,
      };
    default:
      throw new Error('no matching action type');
  }
};
