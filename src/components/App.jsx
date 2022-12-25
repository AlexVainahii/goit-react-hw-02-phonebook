import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  addContact = (name, number) => {
    this.state.contacts.find(
      option => option.name.toLowerCase() === name.toLowerCase()
    )
      ? alert(`${name} is already in contacts list`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, { id: nanoid(), name, number }],
        }));
  };

  render() {
    const { addContact } = this;
    const { contacts } = this.state;
    return (
      <div>
        <Section title="Phonebook">
          <ContactForm onSubmit={addContact} />
        </Section>
        <Section title="Contacts">
          {contacts.length > 0 && <ContactList contacts={contacts} />}
        </Section>
      </div>
    );
  }
}
