const brain = require('brain.js');

const trainingData = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
];

const net = new brain.recurrent.LSTMTimeStep();

net.train(trainingData, {
    log: status => console.log(status)
});

console.log(net.run([1, 2, 3, 4, 5, 6, 7, 8, 9]));
//console.log(net.run([5, 4, 3, 2]));