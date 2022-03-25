/*
1029. Two City Scheduling - Medium -
  A company is planning to interview 2n people.
  Given the array costs where costs[i] = [aCosti, bCosti],
  the cost of flying the ith person to city a is aCosti,
  and the cost of flying the ith person to city b is bCosti.

  Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.

Example 1:
 Input: costs = [[10,20],[30,200],[400,50],[30,20]]
 Output: 110
 Explanation: 
 The first person goes to city A for a cost of 10.
 The second person goes to city A for a cost of 30.
 The third person goes to city B for a cost of 50.
 The fourth person goes to city B for a cost of 20.
 The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.

Example 2:
 Input: costs = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]
 Output: 1859

Example 3:
 Input: costs = [[515,563],[451,713],[537,709],[343,819],[855,779],[457,60],[650,359],[631,42]]
 Output: 3086
 
Constraints:
 2 * n == costs.length
 2 <= costs.length <= 100
 costs.length is even.
 1 <= aCosti, bCosti <= 1000

POA:
  global vars:
    const fullCity = costs.length/2
  Local lets:
    total = 0
  forEach subArray push each j value with its indexed position and city value to an array [i,[cost[i][j],j]]; at max 200subarrays
  [original index postion,[all values for cost, 0 or 1 represents city A or city B ]]
  sort by smallest values at array[i][1][0]
  if (array[1][1]===0 && objectTracker.cost[0] === fullCity||array[1][1]===1 and objectTracker.cost[1] === fullCity) full break else continue
  if object.cost[array[0]]==='' then object.cost[array[0]]= array[1]
  if !(object.cost[array[0]]=== '') then continue
  object tracker cost:[i,j]
  object tracker city:[0=A-counter, 1=B-counter]; tracked by j value
  objecttracker.cost === arr.length = costs.length
  if abArr[0]+abArr[1] === costs.length return total 
  total = objecttracker.cost add each cost[0]
  Add values till A equals 

*/

/**
 * @param {number[][]} costs
 * @return {number}
 */

var twoCitySchedCost = (costs) => {
  const allInterviews = costs.length;
  const fullCity = costs.length / 2;

  let flights = [];
  for (let i = 0; i <= allInterviews - 1; i++) {
    console.log({ i });
    for (let j = 0; j <= costs[i].length - 1; j++) {
      console.log({ j });
      flights.push([i, [costs[i][j], j]]);
      console.log({ flights });
    }
  }
  var cheapestFlight = {
    cityA: 0,
    cityB: 0,
  };
  cheapestFlights = (flights) => {
    flights.sort(function (a, b) {
      a[1][0] - b[1][0];
    });
  };
  console.log(flights);

  if (!(cheapestFlight.cityA === null || undefined));
  cheapestFlight.cityA = 1;
  cheapestFlight.cityA++;
  // return cheapestFlight.cityA;
  //forEach subArray push each j value with its indexed position and city value to an array [i,[cost[i][j],j]]; at max 200subarrays
  //[original index postion,[all values for cost, 0 or 1 represents city A or city B ]]
  //sort by smallest values at array[i][1][0]
  //if (array[1][1]===0 && objectTracker.cost[0] === fullCity||array[1][1]===1 and objectTracker.cost[1] === fullCity) full break else continue
  //if object.cost[array[0]]==='' then object.cost[array[0]]= array[1]
  //if !(object.cost[array[0]]=== '') then continue
  //object tracker cost:[i,j]
  //object tracker city:[0=A-counter, 1=B-counter]; tracked by j value
  //objecttracker.cost === arr.length = costs.length
  //if abArr[0]+abArr[1] === costs.length return total
  //total = objecttracker.cost add each cost[0]
  //Add values till A equals
  //return the minimum Costs where n passengers make it equally to each airport
  //return console.log(costs);
};

twoCitySchedCost([
  [10, 20],
  [30, 200],
  [400, 50],
  [30, 20],
]); //110
