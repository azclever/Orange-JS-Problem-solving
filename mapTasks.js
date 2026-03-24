

console.log("========== 1 ==========")
function doubleNumbers(arr){
   
    let newarr= arr.map(element => {

       return element * 2 ;
   
    });

  
    return newarr;
}

console.log(doubleNumbers([1,2,3]))



console.log("========== 2 ==========")
function numbersToStrings(arr){

    let newarr= arr.map(element => {

       return `${element}` ;
   
    });


    return newarr;
}



console.log(numbersToStrings([1,2,3]))



console.log("========== 3 ==========")
function upperCaseNames(arr){

    let newarr= arr.map(element => {

       return element.toUpperCase();
   
    });

  
    return newarr;
}


console.log(upperCaseNames(["ali","sara"]))


console.log("========== 4 ==========")
function addFive(arr){

    let newarr= arr.map(element => {

       return element +5;
   
    });

   
    return newarr;
}


console.log(addFive([10,20,30]))



console.log("========== 5 ==========")
function getNames(arr){

    let newarr= arr.map(element => {

       return element.name;
   
    });


    return newarr;
}


console.log(getNames([{name:"Ali",age:20},{name:"Sara",age:25}]))


console.log("========== 6 ==========")
function wordLengths(arr){
   
    let newarr= arr.map(element => {

       return element.length;
   
    });

 
    return newarr;
}

console.log(wordLengths(["apple","dog"]))


console.log("========== 7 ==========")
function wordLengths(arr){
   
    let newarr= arr.map(element => {

       return element.length;
   
    });

    return newarr;
}

console.log(wordLengths(["apple","dog"]))


console.log("========== 8 ==========")
function makeUsernames(arr){
   
    let newarr= arr.map(element => {

       return "@"+element.username;
   
    });

    return newarr;
}

console.log(makeUsernames([{username:"ahmad"},{username:"sara"}]))


console.log("========== 9 ==========")
function squareNumbers(arr){
   
    let newarr= arr.map(element => {

       return element * element;
   
    });

    return newarr;
}

console.log(squareNumbers([2,3,4]))


console.log("========== 10 ==========")
function firstLetters(arr){
   
    let newarr= arr.map(element => {

       return element.slice(0,1);
   
    });

    return newarr;
}

console.log(firstLetters(["Ali","Sara"]))


console.log("========== 11 ==========")
function sumNumbers(arr){
   
    let newarr=0; 
    arr.forEach(element => {

        newarr+=element;
   
    });

    return newarr;
}

console.log(sumNumbers([10,20,30]))


console.log("========== 12 ==========")
function countEven(arr){
   
    let newarr=0; 
    arr.forEach(element => {

        if(element % 2==0){
            newarr ++;
        }
   
    });

    return newarr;
}

console.log(countEven([1,2,3,4]))


console.log("========== 13 ==========")

function timesTen(arr){

    let newarr= arr.map(element => {

       return element * 10;
   
    });


    return newarr;
}


console.log(timesTen([1,2,3]))


console.log("========== 14 ==========")

function addAdult(arr){

    let newarr= arr.map(element => {

       if(element.age > 18){
        element.adult = true;
       }else{
        element.adult = false;
       }
       
       return element;
    });


    return newarr;
}


console.log(addAdult([{name:"Ali",age:20},{name:"Sara",age:15}]))


console.log("========== 15 ==========")

function addTax(arr){

    let newarr= arr.map(element => {

       return element +10;
    });


    return newarr;
}

console.log(addTax([100,200]))


console.log("========== 16 ==========")
function countBig(arr){
   
    let newarr=0; 
    arr.forEach(element => {

        if(element > 50){
            newarr ++;
        }
   
    });

    return newarr;
}

console.log(countBig([20,60,80]))



console.log("========== 17 ==========")
function labelNumbers(arr){
   
    let newarr= arr.map(element => {

       return `Number: ${element}`;
    });


    return newarr;
}

console.log(labelNumbers([5,10]))

console.log("========== 18 ==========")
function productNames(arr){

    let newarr= arr.map(element => {

       return element.product;
   
    });


    return newarr;
}


console.log(productNames([{product:"Laptop",price:1000},{product:"Phone",price:500}]))


console.log("========== 19 ==========")
function addIndex(arr){

    let newarr= arr.map((element,index) => {

       return element + index;
   
    });


    return newarr;
}


console.log(addIndex([5,5,5]))


console.log("========== 20 ==========")
function isEvenArray(arr){
   
    let newarr=arr.map(element => {

        if(element % 2==0){
            return true
        }else{
            return false
        }
   
    });

    return newarr;
}

console.log(isEvenArray([1,2,3,4]))

