/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var track = {};
  for(var i=0; i<transactions.length; i++) {
    if(track[transactions[i].category]) {
      track[transactions[i].category] += transactions[i].price;
    }
    else {
      track[transactions[i].category] = transactions[i].price;
    }
  }

  var keys = Object.keys(track);
  var answer = [];
  for(var i=0; i<keys.length; i++) {
    var category = keys[i];
    var obj = {
      category: category,
      totalSpent: track[category],
    };
    answer.push(obj);
  }
  return answer;
}

module.exports = calculateTotalSpentByCategory;
