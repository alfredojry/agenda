export default function funnyColor (n) {
    const COLORS = [
        '#38c172',
        '#4dc0b5',
        '#3490dc',
        '#6574cd',
        '#9561e2',
        '#f66d9b',
        '#59bd99',
        '#1fa1b8',
        '#0b95db',
        '#cd4b68',
        '#c20c59',
        '#b72a94',
        '#7f5ab3',
        '#e3342f',
        '#f6993f',
    ];
    return COLORS[(n - 1) % COLORS.length];
  }
 