// TODO Add a couple lines about each project
const data = [
  {
    title: 'CONetV2: Efficient Auto-Channel Size Optimization for CNNs',
    image: '/images/projects/paper.gif',
    date: '2022-01-01',
    desc:
        'Formulated DAG extraction from Convolution Neural Networks with up to hundreds of millions of weighted parameters. '
        + 'Improved Knowledge Distillation weight transfer during Neural Architecture Search to speed up performance by 50%. '
        + 'Spearheaded and presented the Uniform Crossover Genetic Algorithm for Channel Size Optimization idea to the entire research group, reducing ResNet34’s total parameter size by 33% while achieving higher test accuracy on CIFAR100. '
        + 'Co-authored one publication, CONetV2, under Professor Kostas Plataniotis, accepted for oral presentation at ICMLA. ',
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
      'Developed in C an AB-pruning Minimax bot with Zobrist hashing and transpositions tables that explores 10000+ states. '
      + 'Achieved 6th place in a class of 420+ students, 75 of whom beat the professor’s programs to make the final leaderboard. ',
    link: 'https://www.eecg.utoronto.ca/~bli/aps105/?fbclid=IwAR1EQjUEiDyNBZS_NBy3kfK36c06tOQg3iS5DtKMGrlOT4r-3xbHyI4vLo0',
  },
  {
    title: 'ECE297 Google Maps Project (Group) ',
    image: '/images/projects/tsp.gif',
    date: '2021-04-01',
    desc:
      'Generated large-scale Google-maps-inspired UI/backend program that displays 10000+ intersections in any major city. '
      + 'Placed 7th in class for a Travelling Salesman-related NP-C challenge built on top of the map using techniques such as A*/Dijkstra Search, Simulated Annealing, Multithreading, 2-opt; beat the TA program by 10%. '
      + 'Collaborated with two other students for this project selected to present to the following year ECE students. ',
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
