import african from '../images/african.png';
import bot from '../images/bot.png';
import clown from '../images/clown.png';
import dinosaur from '../images/dinosaur.png';
import mmm from '../images/mmm.png';
import monkey from '../images/monkey.png';
import okay from '../images/okay.png';
import putin from '../images/putin.jpg';
import troll from '../images/troll.png';
import trump from '../images/trump.png';
import yao from '../images/yao.png';

const IMAGES = [
    {
        src: african,
        description: 'Imagem do tiktoker Khabane Lame',
    },
    {
        src: bot,
        description: 'Imagem de um bot',
    },
    {
        src: clown,
        description: 'Imagem de um clown',
    },
    {
        src: dinosaur,
        description: 'Imagem de um dinossauro',
    },
    {
        src: mmm,
        description: 'Meme gordinho de oxxo',
    },
    {
        src: monkey,
        description: 'Imagem de um macaco',
    },
    {
        src: okay,
        description: 'Face do meme okay',
    },
    {
        src: putin,
        description: 'Face do Wladimir Putin',
    },
    {
        src: troll,
        description: 'Meme troll face',
    },
    {
        src: trump,
        description: 'Face animada do Donald Trump',
    },
    {
        src: yao,
        description: 'Face de Yao Ming',
    },

];

function randomImage () {
    return IMAGES[Math.trunc(IMAGES.length * Math.random())];
}

export default randomImage;

