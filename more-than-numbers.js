const brain = require('brain.js');
 
 const resturants = {
     "Brilliant Yellow Corral": "Monday",
     "Penny's": "Tuesday",
     "Right Coast Wings": "Wednesday",
     "The Last Railway Car": "Thursday",
     "Fun Day Inn": "Friday",
     "JHOP": "Saturday",
     "Owls": "Sunday"
 };


 const trainingData = [];

 for(let resturantsName in resturants) {
     const dayOfWeek = resturants[resturantsName]
     trainingData.push({
         input: {[dayOfWeek]: 1},
         output: {[resturantsName]: 1}
     });
 }

 const net = new brain.NeuralNetwork({ hiddenLayers: [3] });
 net.train(trainingData, {
     log: err => console.log(err),
     logPeriod: 100
 });
 //console.log(net.run({ 'Monday': 1 }));

 function resturantForDay(dayOfWeek) {
    const result = net.run({[dayOfWeek]: 1});
    let highestValue = 0;
    let highestRestaurant = '';
    for(let resturantName in result) {
        if(result[resturantName] >  highestValue) {
            highestValue = result[resturantName];
            highestRestaurant = resturantName;
        }
    }
    return highestRestaurant;
 }

 console.log(resturantForDay('Saturday'));