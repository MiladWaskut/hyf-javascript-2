let numbers = [1, 2, 3, 4];
let newNumbers = numbers.filter(num => num % 2 !== 0).map(num => num * 2);
console.log(newNumbers); 
let monday = [
  { name: 'Write a summary HTML/CSS', duration: 180 },
  { name: 'Some web development', duration: 120 },
  { name: 'Fix homework for class10', duration: 20 },
  { name: 'Talk to a lot of people', duration: 200 }
];

let tuesday = [
  { name: 'Keep writing summary', duration: 240 },
  { name: 'Some more web development', duration : 180 },
  { name: 'Staring out the window', duration: 10 },
  { name: 'Talk to a lot of people', duration: 200 },
  { name: 'Look at application assignments new students', duration: 40 }
];


let tasks = monday.concat(tuesday);
console.log(tasks);

let minsToHours = tasks.map(min => min.duration / 60);
console.log(minsToHours);

let lessThanTwoHours = minsToHours.filter(i => i < 2);
console.log(lessThanTwoHours);

let cost= minsToHours.map(i => i * 20);
console.log(cost);

function sum(){
  let x = 0;
  cost.forEach((value) => {
    x += value;
  });
  return x+'euro';
};
console.log(sum());

