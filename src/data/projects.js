// TODO Add a couple lines about each project
const data = [
  {
    title: 'CONetV2: Efficient Auto-Channel Size Optimization for CNNs',
    image: '/images/projects/paper.gif',
    date: '2022-01-01',
    desc:
        'Neural Architecture Search, NP-hard Channel Size Optimization on Convolutional Neural Networks.'
        + 'Devised mathematical metrics and aggregation methods to measure the effectiveness and learnability of individual convolutional layers. '
        + 'Utilized weight transfer techniques to speed up searching performance by ~50%. '
        + 'Implemented Genetic Algorithm for Channel Size Optimization using uniform random crossover of channel size lists. '
        + 'REDUCED ResNet34’s size by 33% from 15M to 10M while achieving HIGHER test accuracy on the CIFAR 10/100 dataset. '
        + 'Published CONetV2 under Professor Kostas Plataniotis. ',
    link: 'https://ieeexplore.ieee.org/document/9679989',
  },
  {
    title: '1st place finish ECE244 Galaxy Explorer course competition',
    image: '/images/projects/Galaxy.png',
    date: '2020-12-01',
    desc:
      '2D Atari game where a stationary spaceship shoots at moving asteroids coming at it. '
      + 'Given game implementation with C++ linked lists. '
      + 'Programmed spaceship with hitbox detection, trigometry angle approximation, and danger priorization to shoot at asteroids. '
      + 'Beat 2019’s 1st place score of 35k by 5-6x with a score of 190k .',
    link: 'https://www.eecg.utoronto.ca/~tsa/galaxyexplorer.html',
  },
  {
    title: 'APS105 Reversi/Othello Bot',
    image: '/images/projects/reversi.jpeg',
    date: '2020-04-01',
    desc:
      'Implemented the board setup and gameplay of Othello in C. '
      + 'Designed an alpha-beta pruning minimax bot that uses a dynamic heuristic evaluation considering all board states. '
      + 'Utilized transposition tables and Zobrist Hashing for massive search speedup. '
      + 'Got 6th place in a class of 300 people. ',
    link: 'https://www.eecg.utoronto.ca/~bli/aps105/?fbclid=IwAR1EQjUEiDyNBZS_NBy3kfK36c06tOQg3iS5DtKMGrlOT4r-3xbHyI4vLo0',
  },
  {
    title: 'ECE297 Google Maps Project (Group) ',
    image: '/images/projects/tsp.gif',
    date: '2021-04-01',
    desc:
      'Implemented a large-scale Google-maps inspired UI / backend program in C++. '
      + 'Designed an interactive UI using GTK and EZGL. '
      + 'Got 7th place in a Traveling Salesman-related NP-C problem using techniques like A*/Dijkstra Search, Simulated Annealing, Multithreading, 2-opt. ',
    link: 'https://github.com/isidorjkaplan/MapperPublic',
  },
  {
    title: 'ECE243 VGA Graphics Game Project ',
    image: '/images/projects/game.png',
    date: '2021-04-01',
    desc:
      'Created animated impact detection game in C that takes as input user keystrokes. '
      + 'The game is implemented by tracking different states as a finite state machine. ',
    link: 'https://github.com/weihangzheng/ECE243game',
  },
];

export default data;
