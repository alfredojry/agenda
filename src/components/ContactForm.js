import React, { useState } from 'react';
import '../assesments/ContactForm.css';

function ContactForm (props) {
    //const { contact: { id, nome, email, telefone } } = props;
    const [ButtonCancelar, ButtonVoltar] = props.children;
    const { contact } = props;
    const { id } = contact;
    const [nome, setNome] = useState(contact.nome || '')
    const [email, setEmail] = useState(contact.email || '')
    const [telefone, setTelefone] = useState(contact.telefone || '')
    const [successSubmit, setSuccessSubmit] = useState(false);
    const method = id ? 'PUT' : 'POST';
    const handleSubmit = event => {
        event.preventDefault();
        const URL = 'http://localhost:3000/contatos';
        const endpoint = `${URL}${method === 'PUT' ? '/' + String(id) : ''}`;
        const data = { nome, email, telefone };
        const fetchData = {
            method,
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        }
        console.log(fetchData.headers)
        const request = new Request(endpoint, fetchData);
        fetch(request)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setSuccessSubmit(true);
            })
            .catch(error => {console.log(error);});
    };
    const handleNome = ({ target: {value} }) => {setNome(value)};
    const handleEmail = ({ target: {value} }) => {setEmail(value)};
    const handleTelefone = ({ target: {value} }) => {setTelefone(value)};
    const Form = (
        <form onSubmit={handleSubmit}>    
                <label htmlFor="nome">Nome</label>
                <input type="text" defaultValue={nome} onChange={handleNome} />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" defaultValue={email} onChange={handleEmail} />
                <label htmlFor="telefone">Telefone</label>
                <input type="text" defaultValue={telefone} onChange={handleTelefone} />
                <button type="submit">OK</button>
            </form>
    );
    return (
        <div className='ContactForm '>
            <h2>{id ? 'Editando contato' : 'Novo contato'}</h2>
            {!successSubmit ? Form : <h2>Dados enviados com sucesso!! :)</h2>}
            {!successSubmit ? ButtonCancelar : ButtonVoltar}
        </div>
    );
}

export default ContactForm;