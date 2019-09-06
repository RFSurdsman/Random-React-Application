import React from 'react';
import Error from './Error';
import ServerAPI from './ServerAPI';
import { CounterContext, TextContext } from './ContextAPI';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCounter } from './CounterRedux';

const About: React.FC = () => {
  const [counter, setCounter] = React.useContext(CounterContext);
  const [string, setString] = React.useContext(TextContext);

  const reduxCounter = useSelector(state => state);
  const dispatch = useDispatch();
  React.useEffect(() => {
    console.log("Rendering About (should see 3 of these when click refresh)");
  });

  try {
    var { isLoading, data: contacts, refreshData: refreshContacts } = ServerAPI.useGetContacts();
  } catch (error) {
    return <Error errorDetails={error.message} />
  }

  const contactsMarkUp = () => {
    if (isLoading) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div>
          {contacts!.map((contact) => {
            return (
              <div>
                <h3>{contact.name}: {contact.email}</h3>
              </div>
            )
          })}
        </div>
      )
    }
  };

  return (
    <div>
      <h1>Contact List</h1>
      <h2>Context API Counter: {counter}</h2>
      <h2>Context API String: {string}</h2>
      <h2>Redux Counter: {reduxCounter}</h2>
      <button onClick={() => {
        refreshContacts();
        setCounter(counter + 1);
        setString(' * ' + string + ' * ');
        dispatch(incrementCounter());
      }}>Refresh</button>
      {contactsMarkUp()}
    </div>
  );
}

export default About;