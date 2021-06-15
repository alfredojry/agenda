import '../assesments/Contact.css';
//import randomImage from '../js-functions/randomImage';
//import randomColor from '../js-functions/randomColor';
import funnyColor from '../js-functions/funnyColor';
import funnyImage from '../js-functions/funnyImage';

function Contact(props) {
    const { user: { id, nome, email, telefone  } } = props;
    const objImage = funnyImage(id);
    const color = funnyColor(id)
    return (
        <div className='Contact' style={ { backgroundColor: color }}>
            <img src={objImage.src} alt={objImage.description} />
            <ul>
                <li>ID: {id}</li>
                <li>Nome: {nome}</li>
                <li>Email: {email}</li>
                <li>Telefone: {telefone}</li>
            </ul>
            {props.children}
        </div>);
}

export default Contact;
