import React, { useState, useEffect } from 'react';
import Contact from './Contact';
import ContactForm from '../components/ContactForm';
//import DATA from '../exemplo';
import '../assesments/Loader.css';

function Loader (props) {
    const [contacts, setContacts] = useState([]);
    const [message, setMessage] = useState('Carregando informação...');
    const [contactWillBeEdit, setContactWillBeEdit] = useState({});
    const [contactWillBeDeleted, setContactWillBeDeleted] = useState({});
    const [query, setQuery] = useState('');
    const [statusConn, setStatusConn] = useState(true);
    const loadContacts = () => {
        const URL = 'http://localhost:3000/contatos';
        const endpoint = `${URL}${query ? '?q=' + query : ''}`
        fetch(endpoint)
            .then(response => {
                if (response.status === 200) return response.json();
                if (response.status === 404) setMessage('NOT FOUND!!!');
            })
            .then(data => {
                setStatusConn(true);
                if (data instanceof Array) setContacts(data);
            })
            .catch(error => {
                console.log(error);
                setStatusConn(false);
            });
            if (!contacts.length && query) setMessage('Nada para mostrar :(');
    };
    useEffect(loadContacts, [query, contacts.length, contactWillBeEdit, contactWillBeDeleted]);
    const buttonsActions = item => (
        <div className='buttons'>
            <button onClick={() => {setContactWillBeEdit(item);}} >
                Editar
            </button>
            <button onClick={() => {setContactWillBeDeleted(item)}}>
                Apagar
            </button>
        </div>
    );
    const deleteContact = () => {
        const URL = 'http://localhost:3000/contatos';
        const endpoint = `${URL}/${contactWillBeDeleted.id}`;
        fetch(endpoint, { method: 'DELETE' })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setContactWillBeDeleted({})
                console.log('Contato apagado com sucesso!!!')
            })
            .catch(error => {
                console.log(error);
            });
    };
    const buttonsToDelete = (
        <div className='buttons'>
            <button onClick={deleteContact}>
                Tem certeza de apagar?
            </button>
            <button onClick={() => {setContactWillBeDeleted({})}}>
                Cancelar
            </button>
        </div>
    );
    const handleQuery = ({target: {value}} ) => {
        setQuery(value);
    };
    const inputSearch = (
        <label>
            Buscar
            <input type="search" name="q" id="" value={query} onChange={handleQuery} />
        </label>
    );
    return (
        !contactWillBeEdit.id ?
        <div className='Loader'>
            {!contactWillBeDeleted.id ? props.children : <h2>Apagando contato</h2>}
            {!contactWillBeDeleted.id && inputSearch}
            {contacts.map(item => {
            return (
                <Contact user={item} key={item.id}>
                    {!contactWillBeDeleted.id && buttonsActions(item)}
                    {contactWillBeDeleted.id === item.id && buttonsToDelete}
                </Contact>);
            })}
            {!contacts.length && statusConn && <p>{message}</p>}
            {!statusConn && <p>Offline!!!</p>}
        </div> :
        <ContactForm contact={contactWillBeEdit}>
            <button onClick={() => {setContactWillBeEdit({});}}>
                Cancelar
            </button>
            <button onClick={() => {setContactWillBeEdit({});}}>
                Voltar
            </button>
        </ContactForm>
    );
}

export default Loader;