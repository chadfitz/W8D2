Array.prototype.uniq = function(){
    let newArr = [];
    this.forEach((number) => {
        if (newArr.includes(number) === false) {
            newArr.push(number);
        } 
    })
    return newArr;
}

// let arr = [1,2,2,3,3,3]
// console.log(arr.uniq())
Array.prototype.twoSum = function(){
    let newArr = [];
    for(let i = 0; i < this.length; i++){
        for(let j = 1; j < this.length; j++) {
            if(j>1){
            if(this[i]+this[j] === 0){
                newArr.push([i,j]);
            }}
        }
    }
    return newArr;
}
// let arr = [5,1,-5,-1];
// console.log(arr.twoSum())

Array.prototype.transpose = function(){
    let newArr = Array(this[0].length).fill().map(() => Array(this[0].length).fill(0));
    for(let i = 0; i < this.length; i++){
        for(let j = 0; j < this.length; j++){
            newArr[j][i] = this[i][j];
        }
    }
    return newArr;
}

// let arr = [[1,2,3],[4,5,6],[7,8,9]];
// console.log(arr.transpose())