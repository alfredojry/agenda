import React, { useState } from 'react';
import ContactForm from './ContactForm';
import Loader from './Loader';
import '../assesments/ContactList.css'

function ContactsList(props) {
    // Feita para dar mais features como ordenação, filtrado e limite de contatos a ser vistos.
    const [showForm, setShowForm] = useState(false);
    return (
        showForm ?
        <div className='ContactList'>
            <ContactForm contact={ {} }>
                <button onClick={() => setShowForm(false)}>
                    Cancelar
                </button>
                <button onClick={() => setShowForm(false)}>
                    Voltar
                </button>
            </ContactForm>
        </div> :
        <Loader>
            <button onClick={() => setShowForm(true)}>
                Novo contato
            </button>
        </Loader>
    );
}

export default ContactsList;