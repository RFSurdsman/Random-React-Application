import React from 'react';
import { TextContext } from "./ContextAPI";
import './App.css';

interface IProps {
  addItem: (s: string) => void,
  items: string[],
  placeholder?: string
}

const ItemList: React.FC<IProps> = ({ addItem, placeholder, items }) => {
  const [username, setUsername] = React.useState('');
  const [string] = React.useContext(TextContext);

  React.useEffect(() => {
    console.log("Rendering ItemList.");
  });

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addItem(username);
    setUsername('');
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const itemsRender = items.map((item) => {
    return (
      <tr>
        <td style={rowStyle}>
          {item}
        </td>
      </tr>
    )
  });

  const itemsList = <table style={{
    border: '1px solid black',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%'
  }}>
    <tbody>{itemsRender}</tbody>
  </table>;

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>Hello {username}</h1>
        <h3>{string}</h3>
        <p>Enter your name, and submit:</p>
        <input
          value={username}
          style={inputStyle}
          placeholder={placeholder as string}
          type='text'
          onChange={changeHandler} />
        <input type='submit' />
        <h1>Items submitted so far:</h1>
        {itemsList}
      </form>
    </div>
  );
};

const rowStyle = {
  border: '1px solid black'
};

const inputStyle = {
  color: 'red'
};

export default ItemList;