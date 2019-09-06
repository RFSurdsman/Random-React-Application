import React from 'react';
import Error from './Error';
import ServerAPI from './ServerAPI';

const About: React.FC = () => {
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
      <button onClick={refreshContacts}>Refresh</button>
      {contactsMarkUp()}
    </div>
  );
}

export default About;