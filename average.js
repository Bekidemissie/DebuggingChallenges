 /* this coding has some error and fixed it was some misisng bracket} for the function*/

function average(list) {
  var sum = 0;

  for (var num of list) {
    sum+= num;
  }

  return sum / list.length;
}
console.log(average([3, 5, 7]));
