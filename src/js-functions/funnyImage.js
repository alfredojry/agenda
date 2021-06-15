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
        src: mmm,
        description: 'Meme gordinho de oxxo',
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
    // mmm
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

function funnyImage (n) {
    return IMAGES[(n - 1) % IMAGES.length];
}

export default funnyImage;
