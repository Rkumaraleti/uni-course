import { useState } from 'react'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [filter, setFilter] = useState('');

  const addPerson = (newPerson) => {
    if ((persons.some(person => person.name === newPerson.name))) {
      alert(`${newPerson.name} is already added to the phonebook`);
    } else if ((persons.some(person => person.number === newPerson.number))) {
      alert(`${newPerson.number} is already added to the phonebook`);
    } else {
      setPersons(persons.concat({ ...newPerson, id: Math.max(...persons.map(person => person.id)) + 1 }));
    }
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  }

  // Determine which persons to show based on the current filter state.
  // We also convert everything to lowercase so the search is case-insensitive.
  const personsToShow = filter === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange} filter={filter} />

      <h2>Add New Number</h2>
      <PersonForm createPerson={addPerson} />

      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App