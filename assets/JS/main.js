// task-1
// const students = [
//     { name: 'Alice', grade: 'A' },
//     { name: 'Bob', grade: 'B' },
//     { name: 'Charlie', grade: 'A' },
//     { name: 'David', grade: 'C' }
//   ];

//   let newData= students.reduce((acc,item)=>{
//    if(!acc[item.grade]){
//     acc[item.grade]=[];
//    }
//    acc[item.grade].push(item.name)
//    return acc;
//   },{})

//   console.log(newData);



//   task2

// const nestedArray = [1, [2, [3, 4], 5], [6], 7];

//  const flat=nestedArray.flat(Infinity);

//  console.log(flat);

// task3

// const transactions = [
//     { type: 'income', amount: 100 },
//     { type: 'expense', amount: 50 },
//     { type: 'income', amount: 200 },
//     { type: 'expense', amount: 150 }
//   ];

// const newData=transactions.filter(transactions =>transactions.type==="income" )
// .map(transactions=>{
//     return transactions.amount
// })
// .reduce((acc,amount)=>acc+=amount,0)

// console.log("totalIncome"+" : "+newData);

// const expence=transactions.filter(transactions=>transactions.type==="expense")
// .map(transactions=>{
//     return transactions.amount;
// })
// .reduce((acc,amount)=>acc+=amount,0)

// console.log("totalExpense"+ " : "+expence);

// task4

// const words = ["apple", "banana", "apple", "orange", "banana", "banana"];
// const newData = words.reduce((acc, item) => {
//   if (item in acc) {
//     acc[item]++;
//   } else {
//     acc[item] = 1;
//   }
//   return acc;
// }, {});

// console.log(newData);

// task5

// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 25 },
//     { name: 'David', age: 30 }
//   ];

// const newData=people.sort((a,b)=>a.age-b.age)
// console.log(newData);

// task6

// const nums = [1, 2, 2, 3, 4, 4, 5];

//   const otherNums= [...new Set(nums)];

//   console.log(otherNums);

// task7

// const array = [1, 2, 3, 4, 5, 6, 7];
// const size = 3;

// function chunkArray(array, size) {
//      let result=[];
//   for (let i = 0; i < array.length; i +=size) {
//    let chunk = array.slice(i, i + size);
//     result.push(chunk);
//   }
//   return result;

//   }
// console.log(chunkArray(array,size));
