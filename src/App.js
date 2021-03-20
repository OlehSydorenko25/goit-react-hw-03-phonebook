import React, { Component } from 'react';
import Container from './сomponents/Container/Container'
import ContactForm from './сomponents/ContactForm/ContactForm'
import Filter from './сomponents/Filter/Filter'
import ContactList from './сomponents/ContactList/ContactList'

import './index.css'

class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(contacts)

    if (parsedContacts) {
      this.setState({contacts: parsedContacts})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value
    })
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  addContact = ({name, number}, idContact) => {
    const contact = { id: idContact, name, number }

    const arrName = this.state.contacts.map( contact => contact.name)
      
    if (arrName.includes(name)) {
      alert (name + ' is already in contacts')
      return
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact]
    }))
  }

  render() {
    const { contacts, filter } = this.state

    const normalizedContacts = filter.toLowerCase()

    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedContacts))

    return (
      <Container>
        
        <h1>Phonebook</h1>

        <ContactForm onSubmit={this.addContact}/>

        <h2>Contacts</h2>

        <Filter value={filter} onChange={this.changeFilter}/>

        <ContactList contactList={visibleContacts} onDeleteContact={this.deleteContact}/>
        
      </Container>
    );
  }
}
 
export default App;

