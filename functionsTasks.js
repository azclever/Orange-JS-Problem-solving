console.log("========== Taks 1 ==========")

function firstAndLast(arr){

    if(arr.length == 0){
        return -1;
    }

    return [arr[0] , arr[arr.length-1]];

}


console.log(firstAndLast([1,2,3,4,5]))

console.log("========== Taks 2 ==========")


function removeMiddle(arr){

    if(arr.length == 0){
        return -1;
    }

    let newarr = arr.filter((el, ind, arr)=>{
    if(ind != Math.floor(arr.length /2)){
        return el;
    }
    }) 

    return newarr;


}

console.log(removeMiddle([1,2,3,4,5]))


console.log("========== Taks 3 ==========")

function swapFirstLast(arr){

        if(arr.length == 0){
            return -1;
        }

        let temp = arr[0];
        arr[0] = arr[arr.length-1];
        arr[arr.length-1]=temp;
        return arr;


}

let a = [1,2,3,4,5]


console.log(swapFirstLast(a))

console.log("========== Taks 4 ==========")

function insertAtMiddle(arr, val){
  
    let newarr = [...arr.splice(0, Math.floor(arr.length/2)),val,...arr]
    console.log(newarr)
    
}

console.log(insertAtMiddle([1,2,3,4,5], 7));

console.log("========== Taks 5 ==========")

function duplicateArray(arr){

    let newarr = [...arr,...arr]

    return newarr;
}

console.log(duplicateArray([1,2,3,4,5]));

console.log("========== Taks 6 ==========")

function removeDuplicates(arr){

    let newarr=[];
    for(let el of arr){
        if(newarr.includes(el))
            continue;
        else
            newarr.push(el)
    }

    return newarr;
}

console.log(removeDuplicates([1,2,2,3,4,4,5]))


console.log("========== Taks 7 ==========")



function findSecondLargest(arr){
    
    return(arr.sort((a,b)=>{return b-a})[1] )
}


console.log(console.log(findSecondLargest([4,9,2,10,6])))

console.log("========== Taks 8 ==========")

function findSecondSmallest(arr){
    
    return(arr.sort((a,b)=>{return a-b})[1] )
}


console.log(console.log(findSecondSmallest([4,9,2,10,6])))


console.log("========== Taks 9 ==========")

function removeGreaterThan(arr,value){

    let newarr = arr.filter((el)=>{

        if(value > el){
            return el;
        }
    })

    return newarr;
}


console.log(removeGreaterThan([10,5,20,3,8],10))

console.log("========== Taks 10 ==========")

function removeLessThan(arr,value){

    let newarr = arr.filter((el)=>{

        if(value < el){
            return el;
        }
    })

    return newarr;
}


console.log(removeLessThan([10,5,20,3,8],10))


console.log("========== Taks 11 ==========")

function countOccurrences(arr,value){

    let newarr = arr.filter((el)=>{
        
        return el == value ? el : null ;
    })

        return newarr.length;
}


console.log(countOccurrences([1,2,3,2,4,2],2));


console.log("========== Taks 12 ==========")

function arrayIntersection(arr1,arr2){

    let newarr = arr1.filter((el)=>{

        return arr2.includes(el) ? el: null;

    })

    return newarr;
}


console.log(arrayIntersection([1,2,3,4], [3,4,5,6]))


console.log("========== Taks 13 ==========")

function arrayDifference(arr1,arr2){

    let newarr = arr1.filter((el)=>{

        return !arr2.includes(el) ? el: null;

    })

    return newarr;
}


console.log(arrayDifference([1,2,3,4], [3,4]))


console.log("========== Taks 14 ==========")

function uniqueMerge(arr1,arr2){

    for(let el of arr2){
        if(!arr1.includes(el)){
            console.log(el)
            arr1=arr1.concat(el);
        }
    }
    return arr1;
}


console.log(uniqueMerge([1,2,3], [3,4,5]))


console.log("========== Taks 15 ==========")

function removeNegativeNumbers(arr1){

    let newarr = arr1.filter((el)=>{

        return el >0 ? el: null;

    })

    return newarr;
}

console.log(removeNegativeNumbers([5,-2,10,-3,7]))


console.log("========== Taks 16 ==========")

function wordsLongerThan(arr1,length ){

    let newarr = arr1.filter((el)=>{

        return el.length > length ? el: null;

    })

    return newarr;
}

console.log(wordsLongerThan(["alex","mohammad","ali","sara"],4))


console.log("========== Taks 17 ==========")

function countLetterInWords(arr1,letter){

    let newarr = arr1.filter((el)=>{

        return el.includes(letter) ? el: null;

    })

    return newarr.length;
}
console.log(countLetterInWords(["apple","banana","car","dog"],"a"))



console.log("========== Taks 18 ==========")

function removeShortWords(arr1,length ){

    let newarr = arr1.filter((el)=>{

        return el.length > length ? el: null;

    })

    return newarr;
}

console.log(removeShortWords(["alex","mohammad","ali","sara"],4));

console.log("========== Taks 19 ==========")

function findLongestWord(arr){
    arr.sort((a,b)=>{ return b.length - a.length})
    
    return arr[0]
}

console.log(findLongestWord(["alex","mohammad","ali","sara"]));

console.log("========== Taks 20 ==========")

function findShortestWord(arr){
    arr.sort((a,b)=>{ return a.length - b.length})
    
    return arr[0]
}

console.log(findShortestWord(["alex","mohammad","ali","sara"]));


console.log("========== Taks 21 ==========")

function sortByLength(arr){
    arr.sort((a,b)=>{ return a.length - b.length})
    
    return arr
}

console.log(sortByLength(["apple","hi","banana"]));


console.log("========== Taks 22 ==========")

function removeEverySecond(arr1 ){
    
    let newarr = arr1.filter((el,index)=>{
        
        return index % 2 ==0 ? el: null;
        
    })
    
    return newarr;
}

console.log(removeEverySecond([1,2,3,4,5,6]));


console.log("========== Taks 23 ==========")

function sumEvenNumbers(arr1 ){
    
    let newarr = arr1.reduce((sum , el)=>{
        
        return el % 2 == 0  ? sum + el: sum;
        
    },0)
    
    return newarr;
}

console.log(sumEvenNumbers([1,2,3,4,5,6]));



console.log("========== Taks 24 ==========")

function sumOddIndex(arr1 ){
    
    let newarr = arr1.reduce((sum , el , index)=>{
        
        return index % 2 != 0  ? sum + el: sum;
        
    },0)
    
    return newarr;
}


console.log(sumOddIndex([1,2,3,4,5,6]));


console.log("========== Taks 25 ==========")

function reverseWithoutReverse(arr1){
    let arr2 =[];
    for(let el of arr1){
       
           
            arr2.unshift(el);
        
    }
    return arr2;
}

console.log("========== Taks 26 ==========")
console.log(reverseWithoutReverse([1,2,3]))


function findMissingNumber(arr){
    arr.sort((a,b)=>{return a-b})

    let value;
    for(let i=0; i<arr.length ; i++){
        if(arr[i] != i+1){
            value=i+1;
            break;
        }
    }

    return value;
}

console.log(findMissingNumber([1,2,3,5,6]))


console.log("========== Taks 27 ==========")
function pairSum(arr,target){

    let newarr =[];
    newarr.includes
    for(let i= 0 ; i<arr.length; i++){
        if(arr[i] < target){

            if(arr.includes(target - arr[i])){
                newarr.push(arr[i]);
                newarr.push(target - arr[i])
                break;
            }
        }

    }

    return newarr;

}

console.log(pairSum([2,7,11,15],9))


console.log("========== Taks 28 ==========")
function rotateArray(arr,steps){

    let newarr =arr.splice(0,steps);
    
   
    arr=arr.concat(newarr)

    return arr;

}


console.log(rotateArray([1,2,3,4,5],2))

console.log("========== Taks 29 ==========")
function chunkArray(arr,size){

    let newarr =[];
    let end =Math.floor(arr.length/size);
    for(let i=0; i<end  ;i++){   
        newarr.push(arr.splice(0,size));

    }
    
//    newarr.sl

    return newarr;

}


console.log(chunkArray([1,2,3,4,5,6],2))

console.log("========== Taks 30 ==========")

function groupByLength(arr){
    let newOb={};
    for(let el of arr){
        if(newOb[el.length]==null){
            newOb[el.length] = [el]
        }else{
            newOb[el.length].push(el);
        }
    }

    return newOb;
}

console.log(groupByLength(["hi","cat","dog","apple"]))