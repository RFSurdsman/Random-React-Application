import React from 'react';
import './App.css';
import ItemList from './ItemList';
import About from './About';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ContextAPIProvider, TextContext } from "./ContextAPI";
import { Provider as ReduxProvider } from 'react-redux';
import { createStore } from 'redux';
import counterReducer from './CounterRedux';

const store = createStore(counterReducer);

const App: React.FC = () => {
  const [items, setItems] = React.useState<string[]>(['Initial item 1', 'Initial item 2']);

  const addItem = (s: string) => {
    setItems([...items, s]);
  };

  const clearItemList = () => {
    setItems([]);
  };

  const buttonStyle = {
    padding: '5px'
  };

  const placeHolderText = items.length + " Items In The List";

  React.useEffect(() => {
    console.log("Rendering App.");
  });

  return (
    <ReduxProvider store={store}>
      <ContextAPIProvider>
        <div className="App">
          <Router>
            <h1>My Ultimate React Website</h1>
            <h2>
              <TextContext.Consumer>
                {item => item}
              </TextContext.Consumer>
            </h2>
            <Link style={buttonStyle} to="/">
              <button type="button">
                Home
            </button>
            </Link>

            <Link style={buttonStyle} to="/itemList">
              <button type="button">
                View Item List
            </button>
            </Link>


            <Link style={buttonStyle} to="/about">
              <button type="button">
                View About Page!
            </button>
            </Link>

            <br />

            <button onClick={clearItemList}>
              Clear Global Item List
          </button>

            <Route path="/" exact render={() =>
              <h1>Welcome to home</h1>
            } />

            <Route path="/itemList" exact render={() => <ItemList addItem={addItem} items={items} placeholder={placeHolderText} />} />
            <Route path="/about" exact render={() => <About />} />

          </Router>
        </div>
      </ContextAPIProvider>
    </ReduxProvider>
  );
}

export default App;