/* eslint-disable no-unused-vars */


// ? write a function to remove all empty values (null, undefined, '', NaN, false) EXCEPT 0 from an array.
// ? It should handle complex data types eg: {}, [] etc.
// ? eg: [0, false, [], undefined, {}, NaN, 'Kevin'] => [0, [], {}, 'Kevin'];
function removeBlank(array) {
  const new_list =  []
  const filterArray = array.filter(function(item){
    if(Boolean(item) == true){
      return new_list.push(item)
    }else{
      if(item === 0){
        return new_list.push(item)
      }
    }
  })
  return filterArray
}


// ? write a function to return a random element from an array
// ? eg: [1,"elephant", "apple", 67] => "elephant"
function randomElement(array) {
  const random_num = Math.random() 
  return array[Math.floor(random_num*(array.length))]
}

// ? write a function that returns the second lowest and second highest number in an array
// ? eg: [1,2,3,4,5,6,7,8] => [2,7]
function secondLowestSecondHighest(array) {
  const max_num = Math.max(...array)
  const min_num = Math.min(...array)
  const final_list = []
  array.filter(function(item){
    
    if(item !== max_num && item !== min_num){
      final_list.push(item)
      return final_list
    }

  })

  return [Math.min(...final_list), Math.max(...final_list)]
  
}


// ? write a function that will convert a price into coins needed to make up that price
// ? the coins available are 1, 2, 5, 10, 20, 50, 100
// ? the function should use the smallest number of coins possible
// ? eg: coins(1.99) => [100, 50, 20, 20, 5, 2, 2]
function coins(price) {
  let cents = price * 100
  const coins_available = [100,50,20,10,5,2,1]
  const coins_needed = []

  const combination = coins_available.forEach(function(element) {
    if(cents/element > 0){ 
      Array(Math.floor(cents/element)).fill(element).forEach(function(i){
        coins_needed.push(i)
      })
      cents = cents - (Math.floor(cents/element) * element ) 
    }
  });
  
  return coins_needed
}


// ? write a function to merge two arrays and remove duplicates
// ? eg: mergeUnique([9,8,8,9], [7,8,8,7]) => [9,8,7]
function mergeUnique(arr1, arr2) {
  const unique_num = []
  
  arr1.filter(function(num){
    if(!unique_num.includes(num)){
      unique_num.push(num)
    }
  })
  arr2.filter(function(num){
    if(!unique_num.includes(num)){
      unique_num.push(num)
    }
  })

  return unique_num
}



// ? write a function to find the first n fibonacci numbers
// ? the fibonacci sequence is a series of numbers, each number is the sum of the last two
// ? 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 etc...
// ? eg: fibonacci(4) => [0,1,1,2]; fibonacci(8) => [0, 1, 1, 2, 3, 5, 8, 13];
function fibonacci(n) {
  let try_ = []
  if (n > 2 ){
    try_.push(0)
    try_.push(n/n)
    for(let i = 1 ; i < n-1; i++){
      try_.push(try_[i-1] + try_[i])
    }
    return try_
  }else if( n = 1 && n > 0){
    try_.push(0)
    return try_
  }else if( n = 2 && n > 0){
    try_.push(0)
    try_.push(1)
    return try_
  }else{
    return []
  }
}


module.exports = {
  removeBlank,
  randomElement,
  secondLowestSecondHighest,
  coins,
  mergeUnique,
  fibonacci
}
