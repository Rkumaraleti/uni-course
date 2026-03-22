import React, { useState } from 'react'

const PersonForm = ({ createPerson }) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        // Pass the gathered data up to the parent
        createPerson({ name: newName, number: newNumber });

        // Clear the local form
        setNewName('');
        setNewNumber('');
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                name: <input onChange={(e) => setNewName(e.target.value)} value={newName} />
            </div>
            <div>
                number: <input onChange={(e) => setNewNumber(e.target.value)} value={newNumber} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm