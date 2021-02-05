import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { reducer } from './reducer';

// Default State
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
};

const Index = () => {
  // Use Reducer
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };

      // Dispatcher
      dispatch({ type: 'ADD_ITEM', payload: newItem });
      setName('');
    } else {
      // Dispatcher
      dispatch({ type: 'NO_VALUE' });
    }
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return (
    <React.Fragment>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <button type="submit">add person</button>
      </form>
      {state.people.map(({ id, name }) => (
        <div key={id} className="item">
          <h4>{name}</h4>
          <button
            onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: id })}
          >
            remove
          </button>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Index;
