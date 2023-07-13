import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'

function AddItem() {
    const history = useHistory();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [recipe, setRecipe] = useState('');
  const [serve, setServe] = useState('');
  const [items, setItems] = useState([])

  const onAddItem = (newItems) => {
    setItems((prevItems)=> [...prevItems, newItems]);
    
    setName('');
    setDescription('');
    setRecipe('');
    setServe('');
    };


  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
        name,
        description,
        recipe,
        serve
    };

    onAddItem(newItem);


    setName('');
    setDescription('');
    setRecipe('');
    setServe('');

    history.push('/');

  };

  return (
    <div>
      <h2>Add Item</h2>
      <form onSubmit={handleSubmit}>
        <label for = 'name'>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label for= 'description'>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </label>
        <br />
        <label>
          Recipe:
          <input
            type="text"
            value={recipe}
            onChange={(e) => setRecipe(e.target.value)}
          />
        </label>
        <br />
        <label>
          Serve:
          <input
            type="text"
            value={serve}
            onChange={(e) => setServe(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddItem;
