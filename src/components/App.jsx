import { Component } from 'react';
import { Section } from './Section/Section';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  addContact = contact => {
    this.setState(prevState => prevState.contacts.push(contact));
  };

  render() {
    return (
      <div>
        <Section title="Phonebook">
          <form>
            <label>Name</label>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <button onClick={e => this.addContact('vv')}>Add contact</button>
          </form>
        </Section>
      </div>
    );
  }
}
