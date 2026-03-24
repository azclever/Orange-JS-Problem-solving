
console.log("======== Task 1 ========")

let hello = "Hello";
let world= "World";
console.log(hello+" "+world);

console.log("======== Task 2 ========")

let JavaScript = "JavaScript";
console.log(JavaScript.length);

console.log("======== Task 3 ========")

let Programming = "Programming";
console.log(Programming.at(0))

console.log("======== Task 4 ========")

let coding = "coding is fun";

console.log(coding.split(" ")[0])

console.log("======== Task 5 ========")

let cat = "cat";

console.log(cat.replace("a","e"))

console.log("======== Task 6 ========")

console.log(JavaScript.toUpperCase());

console.log("======== Task 7 ========")

let STR = "apple,banana,orange";
console.log(STR.split(","))

console.log("======== Task 8 ========")

let arrtTo = ["hello", "world"]

console.log(arrtTo.join(" "))

console.log("======== Task 9 ========")

let hello2 = " hello world ";

console.log(hello2.trim());

console.log("======== Task 10 ========")

console.log(hello2.includes("world")) 

console.log("======== Task 11 ========")
console.log(hello.split("").toReversed().join(""))

console.log("======== Task 12 ========")
let elephant="elephant";

let count = 0;
elephant.split("").map((el)=>{
    el =="e" ? count++: count;
})

console.log(count);

console.log("======== Task 13 ========")

let racecar = "racecar";

console.log(racecar.split("").toReversed().join("") == racecar)

console.log("======== Task 14 ========")

let helloWorld ="hello world";

let arrhelloWorld = helloWorld.split("");
arrhelloWorld[0]= arrhelloWorld[0].toUpperCase();


arrhelloWorld[arrhelloWorld.indexOf(" ") +1 ] = arrhelloWorld[arrhelloWorld.indexOf(" ")+1].toUpperCase();  

console.log(arrhelloWorld.join(""))

console.log("======== Task 15 ========")
let num ="1234.5678";
num = num.slice(0, num.indexOf(".")+3)
console.log(num)

console.log("======== Task 16 ========")

let extarct = "There are 3 apples and 2 oranges";

let extarctArr = extarct.split("").filter((el)=>{

    if(parseInt(el) < 10){
        return el;
    }
    
})

console.log(extarctArr);

console.log("======== Task 17 ========")



const pattern = /\w+(@)\w+(.com)/g

let email = "example@email.com";

console.log(email.match(pattern) != null)




console.log("======== Task 18 ========")

let goodbad = "This is a bad word";

console.log(goodbad.replace("bad","good"))


console.log("======== Task 19 ========")

let aabbcc = "aabbcc";
let aabbccArr =aabbcc.split("");
let abc=[];
let ind = 0;
for(let i=0; i<aabbccArr.length; i++){
    if(abc.includes(aabbccArr[i])){
        continue;
    }
    else{
        abc[ind++]=aabbccArr[i];
    }

}

console.log(abc.join(""))


console.log("======== Task 20 ========")


console.log(hello.split("").toSorted().join(""))


console.log("======== Task 21 ========")


let listen ="listen";
let silent ="silent";

let lisArr =listen.split("");
let ii=0;
for( ii ; ii < lisArr.length; ii++){
    
    if(silent.includes(lisArr[ii])){
        continue;
    }else{
        break;
    }
}

console.log(ii == lisArr.length)


console.log("======== Task 22 ========")

let fox = "The quick brown fox";

console.log(fox.split(" ").toReversed().join(" "))


console.log("======== Task 23 ========")


let maxi = "Web development is fascinating";

function  maximun(arr){
    let index=0;

    for(let i=1; i<arr.length; i++){
        if(arr[index].length < arr[i].length){

            index=i;
        }

    }
    
    return arr[index];
}

console.log(maximun(maxi.split(" ")))

console.log("======== Task 24 ========")
//  Misunderstanding of the problem 


console.log("======== Task 25 ========")

let mississippi = "mississippi";
let mississippiArr = mississippi.split("");



let miOb={}
mississippiArr.forEach((el)=>{

    if(miOb[el]==null){
        miOb[el]=1;
    }
    else{
        miOb[el]+=1;
    }
})

console.log(mississippiArr )
console.log(miOb )

console.log("======== Task 26 ========")


console.log(helloWorld.replaceAll("a","1").replaceAll("e","2").replaceAll("i","3").replaceAll("o","4").replaceAll("u","5"))

console.log("======== Task 27 ========")

console.log("JavaScript is fun".startsWith("Java"))

console.log("======== Task 28 ========")

console.log("image.png".endsWith("png"))

console.log("======== Task 29 ========")
console.log("ha".repeat(3))

console.log("======== Task 30 ========")

console.log(helloWorld.indexOf("o"))


