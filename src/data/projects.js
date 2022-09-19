// TODO Add a couple lines about each project
const data = [
  {
    title: 'CONetV2: Efficient Auto-Channel Size Optimization for CNNs',
    image: '/images/projects/paper.gif',
    date: '2022-01-01',
    desc:
        'Neural Architecture Search, NP-hard Channel Size Optimization on Convolutional Neural Networks.'
        + 'Devised mathematical metrics and aggregation methods to measure the effectiveness and learnability of individual convolutional layers. '
        + 'Parsed Pytorch models to extract an adjacency lists which tells us which layers (channel sizes) of the model depend on each other. '
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
    title: '6th place finish APS105 Reversi course competition',
    image: '/images/projects/reversi.jpeg',
    date: '2020-04-01',
    desc:
      'Built a reversi game board and gameplay from scratch in C. '
      + 'Programmed a bot with alpha-beta pruned minimax search algorithm'
      + 'and dynamic heuristic evaluation to make the best move. '
      + 'Utilized transposition tables and Zobrist hashing for code speedup.',
    link: 'https://www.eecg.utoronto.ca/~bli/aps105/?fbclid=IwAR1EQjUEiDyNBZS_NBy3kfK36c06tOQg3iS5DtKMGrlOT4r-3xbHyI4vLo0',
  },
  {
    title: '7th place finish ECE297 Traveling Courier course competition (group)',
    image: '/images/projects/tsp.png',
    date: '2021-04-01',
    desc:
      'NP-hard 200+ node Travelling Salesman Problem with additional constraints C++. '
      + 'Implemented a Multi-Threaded Simulated Annealing Search on candidate paths. '
      + 'Implemented Dynamic Programming Solution for TSP on short subpaths.'
      + 'Implemented Geometric Path Uncrossing (2-Opt) Optimization on paths.',
    link: 'http://ug251.eecg.utoronto.ca/ece297s/contest_2021/final',
  },
];

export default data;
