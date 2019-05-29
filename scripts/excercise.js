console.log("Welcome to Assesment");

function showUrl() {
  var str = "www.flipkart.com#about";
  var array = str.split("#");
  return array[0];
}
document.getElementById("res").innerHTML = showUrl();

function sumOfArray(...args) {
  let arry = [...args];

  let arry2 = arry.map(a => {
    return a.parseInt(a, 10);
  });

  let sum = arry2.reduce((a, b) => a + b);

  return sum;
}

let result = sumOfArray([5, 6, 7, 8]);

console.log(result);

document.getElementById("rest").innerHTML = result;

function sumOfArrayContiguous(...args) {
  let arry = [...args];

  if (arry == "") {
    return 0;
  } else {
    let arry2 = arry.split(",").map(a => {
      return a.parseInt(a, 10);
    });
    let sum = arry2.reduce((a, b) => a + b);
    return sum;
  }
}

let results = sumOfArrayContiguous([-5, 4, -6, 8, 4, -3]);

console.log(results);

document.getElementById("rests").innerHTML = results;
