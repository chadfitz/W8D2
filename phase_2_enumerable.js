Array.prototype.myEach = function(callback){
    for(i=0; i < this.length; i++){
        callback(this[i]);
    }
}

// let arr = [1,2,3];
// let newArr = [];
// console.log(arr.myEach((number)=>{
//    newArr.push(number * 3);
// })) 
// console.log(newArr)

Array.prototype.myMap = function(callback){
    let newArr = [];
    this.myEach((ele)=> {
        newArr.push(callback(ele));
    })
    return newArr;
}

// let arr = [2,4,6];
// console.log(arr.myMap((number)=>{
//     return number * 4;
// }))

Array.prototype.myReduce = function(callback, initialValue){
    // let accumulator = 0
    // for (let i=0; i<this.length; i++){
    //     accumulator += (callback(this[i]))
    // }
    // return accumulator
    
    if (initialValue === undefined) {
        initialValue = this[0];
      }
    let accumulator = initialValue; 
    this.myEach((ele, accumulator)=>{
        accumulator = callback(ele, accumulator);
    })                                    
    return accumulator;


}

let arr = [1,2,3];
console.log(arr.myReduce((el, acc) => el * acc));
// console.log(arr.myReduce(function(acc, el){
//     return acc + el;
// }));