const scores = [
  {
    marks: 32,
    name: "Yvette Merritt"
  },
  {
    marks: 57,
    name: "Lillian Ellis"
  },
  {
    marks: 22,
    name: "Mccall Carter"
  },
  {
    marks: 21,
    name: "Pate Collier"
  },
  {
    marks: 91,
    name: "Debra Beard"
  },
  {
    marks: 75,
    name: "Nettie Hancock"
  },
  {
    marks: 20,
    name: "Hatfield Hodge"
  }
];
// Task - MRF// 1. Find average marks in the class (scores) - 1 method
// 45.428

const output = scores
.reduce((sum, curr) => (sum + curr.marks) , 0)/scores.length


console.log(output);


// 2. Find the topper's name - 1 method
// "Debra Beard"

const topper = scores.reduce((more, curr)=> ( more < curr.marks), 0)
console.log(topper);

//i tried. i don,t know sir







