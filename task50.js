console.log("========= task 1 ==========")

let nu=null;
for(let i =1; i<=10; i++) {
    if(i==10){
        nu=nu+i;
    }
    else{
        nu=nu+i+"-"; 
    }
    
}

console.log(nu);    

console.log("========= task 2 ==========")
let total=0;
for(let i =0; i<=30; i++) {
    total+=i;
}

console.log(total);

console.log("========= task 3 ==========")

let even=0;

for(let i =1; i<=50; i++) {
    
    if(i%2 == 0){
        even+=" "+i;
    }
    
}

console.log(even);

console.log("========= task 4 ==========")

let num=0;

for(let i =10; i>0; i--) {
    if(i==10)
        num=i+" ";
    else
    num+=i+" ";
    
}

console.log(num);

console.log("========= task 5 ==========")

let ba="";
for(let i=0; i<5; i++){
    
    let nuA= 4-i ;
    for(let y=0; y<5; y++){
            let code ="A".codePointAt(0);
            
            if(nuA > 0){
                code=code;
            }else{
                code+=i;
            }

            nuA--;
            ba+=String.fromCharCode(code)+" ";
            
    }

    ba+="\n";
}

console.log(ba);

console.log("========= task 6 ==========")

 let ba2="";
for(let i=0; i<5; i++){
    
    let nuA= 4-i ;
    for(let y=0; y<5; y++){
            let code = 1 ;
            
            if(nuA > 0){
                code=code;
            }else{
                code+=i;
            }

            nuA--;
            ba2+=code+" ";
            
    }

    ba2+="\n";
}

console.log(ba2)

console.log("========= task 7 ==========")

let ba3="";
for(let i=0; i<5; i++){
    
    
    for(let y=0; y<5; y++){
            
            if(i==y){
                ba3+=(i+1)+" ";
            }else{
                ba3+=0+" ";
            }

            
            // ba3+=code+" ";
            
    }

    ba3+="\n";
}

console.log(ba3)

console.log("========= task 8 ==========")

let factorial = 1;
for(let i=5; i>0 ; i--){

    factorial*=i;
}

console.log(factorial);

console.log("========= task 9 ==========")


let first =0;
let second=1;
let tem;
let Fibonacci="";
for(let i =0; i<8;i++){
    
    if(i==0)
        Fibonacci+= first +" ";
    else if(i==1){
        Fibonacci+= second +" ";
    }else{
        Fibonacci+= (first + second) +" ";
        
        tem= first;
        first = second;
        second =tem + first;
    }

}

console.log(Fibonacci);

console.log("========= task 10 ==========")

let statement = "Orange Coding School";
let numb=0;

let arrStat = [...statement.toLowerCase()];

for(let i=0; i<arrStat.length ; i++){
    if(arrStat[i]=="c"){
        numb++;
    }

}
console.log(numb);

console.log("========= task 11 ==========")

let awon="";
for(let i =1;i<=5;i++){
    for(let j=1; j<=5; j++){
        awon+=`${j} * ${i} = ${i*j}`;
        awon+="\n";
    }


}
console.log(awon);

console.log("========= task 12 ==========")

let awon2="";
let numbe =1;
for(let i =0;i<5;i++){
    for(let j=0; j<=i; j++){
        
        awon2+=numbe+" ";
        numbe++;
    }
    awon2+="\n";
}
console.log(awon2);

console.log("========= task 13 ==========")

let awon3="";

for(let i =1;i<100;i++){
    
    if(i%7==0){
        awon3+=i+" ";
    }
}
console.log(awon3);

console.log("========= task 14 ==========")

let add=0;

for(let i =1; i<=100; i++) {
    
    if(i%2 != 0){
        add+=" "+i;
    }
    
}

console.log(add);

console.log("========= task 15 ==========")

let square="";

for(let i =1; i<=10; i++) {

        square+=(i*i)+ " ";
}

console.log(square);

console.log("========= task 16 ==========")

let bf=" ";

for(let i =1; i<=30; i++) {
    
    if(i%3 == 0){
        bf+="Fizz ";
    }else if(i%5 == 0){
        bf+="Buzz ";
    }
    if(i%5 == 0 && i%3 == 0){
        bf+="FizzBuzz ";
    }else{
        bf+= i+" ";
    }
    
}

console.log(bf);

console.log("========= task 17 ==========")

let  pattern="";
// let numbe =1;
for(let i =0;i<5;i++){
    for(let j=0; j<=i; j++){
        pattern+="*";
        
    }
     pattern+="\n";
}
console.log(pattern);

console.log("========= task 18 ==========")

let  pattern2="";
// let numbe =1;
for(let i =5;i>0;i--){

    for(let j=0; j<i; j++){
        pattern2+="*";
        
    }
     pattern2+="\n";
}
console.log(pattern2);

console.log("========= task 19 ==========")

let  pattern4="";
// let numbe =1;
for(let i =1;i < 6;i++){

    for(let j=1; j<=i; j++){
        pattern4+=j+" ";
        
    }
     pattern4+="\n";
}
console.log(pattern4);

console.log("========= task 20 ==========")

let  pattern3="";
// let numbe =1;
for(let i =1;i < 6;i++){

    for(let j=0; j<i; j++){
        pattern3+=i+" ";
        
    }
     pattern3+="\n";
}
console.log(pattern3);


console.log("========= task 21 ==========")


for(let i =1 ; i <= 200 ;i++){
    if(i>=100){
        if( ( i%10 ) + (Math.floor((i/10))%10) + (Math.floor(Math.floor((i/10))/10)) ==5)
            console.log(i)
    }
    else if(i >=10 && i<100){

        if( (i % 10) + Math.floor((i/10)) ==5 ){
            console.log(i)
        } 
    }
    else if(i==5){
         console.log(i)
    }
}


console.log("========= task 22 ==========")

for(let i =1 ; i < 100 ;i++){
    if(i>=10){
        if( ( i % 10 ) < (Math.floor((i/10))%10)){
            console.log(i)
        }
    }
   
}


console.log("========= task 23 ==========")

for(let i =1 ; i < 100 ;i++){
    if(i>=10){
        if( ( i % 10 ) == (Math.floor((i/10))%10)){
            console.log(i)
        }
    }
   
}


console.log("========= task 24 ==========")

for(let i =1 ; i < 300 ;i++){
    if(i>10 && i <100){
        if( i % (( i % 10 ) * (Math.floor((i/10))%10)) ==0 ){
            console.log(i)
        }
    }else if(i >=100 ){
        if( i % (( i % 10 ) * (Math.floor((i/10))%10) * (Math.floor(Math.floor((i/10))/10))) ==0 ){
            console.log(i)
        }
        
    }
   
}


console.log("========= task 25 ==========")

for(let i =1 ; i < 100 ;i++){
    if(i>=10){
        if( ( i % 10 ) * (Math.floor((i/10))%10) == ( i % 10 ) + (Math.floor((i/10))%10)){
            console.log(i)
        }
    }
   
}


console.log("========= task 26 ==========")

for(let i =1 ; i <= 300 ;i++){
    if(i%3 == 0){
            console.log(i)
    }
}

console.log("========= task 27 ==========")

for(let i =1 ; i <= 200 ;i++){
    if(Math.abs(( i % 10 ) - (Math.floor((i/10))%10)) == 2){
            console.log(i)
    }
}

console.log("========= task 28 ==========")

for(let i =1 ; i <= 500 ;i++){
    if(( i % 10 ) == (Math.floor((i/10))%10) + 1 ){
            console.log(i)
    }
}


console.log("========= task 29 ==========")

for(let i =1 ; i <= 500 ;i++){
    if(( i % 10 ) + 1 == (Math.floor((i/10))%10) ){
            console.log(i)
    }
}


console.log("========= task 30 ==========")

for(let i =1 ; i <= 500 ;i++){
    if(i<100){
        if(( i % 10 ) == (Math.floor((i/10))%10) ){
            console.log(i)
        }    
    }else{
        if(( i % 10 ) == (Math.floor((i/10))%10) + (Math.floor(Math.floor((i/10))/10)%10) ){
                console.log(i)
        }    
    }
}

console.log("========= task 31 ==========")

for(let i =1 ; i < 200 ;i++){
    if(i>10 && i <100){
        if((( i % 10 ) + (Math.floor((i/10))%10)) >= 10 ){
            console.log(i)
        }
    }else if(i >=100 ){
        if((( i % 10 ) + (Math.floor((i/10))%10) + (Math.floor(Math.floor((i/10))/10))) >= 10 ){
            console.log(i)
        }
        
    }
   
}

console.log("========= task 32 ==========")


for(let i =2 ; i < 500 ;i++){
    let seq = Math.floor(Math.sqrt(i));
    let j = 2;
    for( j = 2 ; j < seq ;j++ ){
        
        if(i<10){
            if(i%j==0)
                break
        }
        if(i > 10 && i <100){
                if((( i % 10 ) + (Math.floor((i/10))%10)) % j == 0 ){
                    break;
                }

            }else if(i >= 100 ){
                if((( i % 10 ) + (Math.floor((i/10))%10) + (Math.floor(Math.floor((i/10))/10))) % j== 0 ){
                    break;
                }
                
            }
    }
    if(j == seq ){
        console.log(i);
    }
}

console.log("========= task 33 ==========")


for(let i =2 ; i < 500 ;i++){

        
        
        if(i > 10 && i <100){
                if((( i % 10 ) == (Math.floor((i/10))%10)) ){
                    console.log(i);
                }

            }else if(i >= 100 ){
                if((( i % 10 ) == (Math.floor((i/10))%10) || ( i % 10 ) == (Math.floor(Math.floor((i/10))/10)) || (Math.floor((i/10))%10) == (Math.floor(Math.floor((i/10))/10))  ) ){
                    console.log(i);
                }
                
            }

    
}

console.log("========= task 34 ==========")


for(let i =1 ; i < 200 ;i++){

        
        if(i < 10){
            console.log(i)
        }
        if(i > 10 && i <100){
                if((( i % 10 ) > (Math.floor((i/10))%10)) ){
                    console.log(i);
                }

            }else if(i >= 100 ){
                if(( ( i % 10 ) > (Math.floor(Math.floor((i/10))/10))  ) ){
                    console.log(i);
                }
                
            }

    
}

console.log("========= task 35 ==========")


for(let i =1 ; i < 500 ;i++){

    
        
        if(i<10){
            if(i%5==0)
                console.log(i);
        }
        if(i > 10 && i <100){
                if((( i % 10 ) * (Math.floor((i/10))%10)) % 5 == 0 ){
                console.log(i);

                }

            }else if(i >= 100 ){
                if((( i % 10 ) * (Math.floor((i/10))%10) * (Math.floor(Math.floor((i/10))/10))) % 5== 0 ){
                console.log(i);
                }
                
            }
}


console.log("========= task 36 ==========")


for(let i =1 ; i < 500 ;i++){

        if(i==5){
                console.log(5);
        }
        if(i > 10 && i <100){
                if((( i % 10 ) + (Math.floor((i/10))%10)) == 10 ){
                console.log(i);
                }

            }else if(i >= 100 ){
                if((( i % 10 ) + (Math.floor((i/10))%10) + (Math.floor(Math.floor((i/10))/10))) == 15  ){
                console.log(i);
                }
                
            }
}


console.log("========= task 37 ==========")


for(let i =1 ; i < 500 ;i++){

        if(i > 10 && i <100){
                if(( (Math.floor((i/10))%10)) % 2 == 0 ){
                console.log(i);
                }

            }else if(i >= 100 ){
                if(( (Math.floor(Math.floor((i/10))/10))) % 2 == 0  ){
                console.log(i);
                }
                
            }
}


console.log("========= task 38 ==========")


for(let i =1 ; i < 300 ;i++){

        if(i > 10 && i <100){
                if((( i % 10 ) == ((Math.floor((i/10))%10) * (Math.floor((i/10))%10)))){
                console.log(i);
                }

            }else if(i >= 100 ){
                if((( i % 10 ) == (Math.floor(Math.floor((i/10))/10) * Math.floor(Math.floor((i/10))/10))) ){
                console.log(i);
                }
                
            }
}


console.log("========= task 39 ==========")

for(let i =1 ; i < 500 ;i++){

        if(i < 10 ){
                console.log(i);
        }
        if(i > 10 && i <100){
                if((( i % 10 ) + (Math.floor((i/10))%10)) % 2 == 0 ){
                console.log(i);
                }

            }else if(i >= 100 ){
                if((( i % 10 ) + (Math.floor((i/10))%10) + (Math.floor(Math.floor((i/10))/10))) % 2 == 0  ){
                console.log(i);
                }
                
            }
}


console.log("========= task 40 ==========")

for(let i =1 ; i < 1000 ;i++){

        if(i > 10 && i <100){
                if((( i % 10 ) + (Math.floor((i/10))%10)) == 15 ){
                console.log(i);
                }

            }else if(i >= 100 ){
                if((( i % 10 ) + (Math.floor((i/10))%10) + (Math.floor(Math.floor((i/10))/10)))  == 15  ){
                console.log(i);
                }
                
            }
}


console.log("========= task 41 ==========")

for(let i =1 ; i < 1000 ;i++){

        if(i > 10 && i <100){
                if((( i % 10 ) + (Math.floor((i/10))%10)) == (( i % 10 ) * (Math.floor((i/10))%10)) ){
                console.log(i);
                }

            }else if(i >= 100 ){
                if((( i % 10 ) + (Math.floor((i/10))%10) + (Math.floor(Math.floor((i/10))/10)))  == (( i % 10 ) * (Math.floor((i/10))%10) * (Math.floor(Math.floor((i/10))/10)))  ){
                console.log(i);
                }
                
            }
}


console.log("========= task 42 ==========")

// you can solve by (i+9)%10 == (Math.floor((i/10))%10)

for(let i =1 ; i < 1000 ;i++){

        if(i > 10 && i <100){
                if((i  + 9) == (parseInt(( i % 10 )+""+(Math.floor((i/10))%10))) ){
                console.log(i);
                }

            }else if(i >= 100 ){
                if((( i + 9 ))  == ( parseInt(( i % 10 )+""+(Math.floor((i/10))%10)+""+(Math.floor(Math.floor((i/10))/10)))) ){
                console.log(i);
                }
                
            }
}

console.log("========= task 43 ==========")

for(let i =1 ; i < 1000 ;i++){

        if(i > 10 && i <100){
                if((i) == (parseInt((Math.floor((i*i/10))%10)+""+( i*i  % 10 ) )) ){
                console.log(i);
                }

            }else if(i >= 100 ){
                if((( i))  == ( parseInt((Math.floor(Math.floor((i*i/10))/10))+""+(Math.floor((i*i/10))%10)+""+( i*i % 10 ) )) ){
                console.log(i);
                }
                
            }
}


console.log("========= task 44 ==========")


for(let i =1 ; i < 1000 ;i++){

        if(i > 10 && i <100){
                if(Math.abs ( (i) - (parseInt(( i % 10 )+""+(Math.floor((i/10))%10))) ) %9 ==0  ){
                console.log(i);
                }

            }else if(i >= 100 ){
                if(( Math.abs ( ( i ))  - ( parseInt(( i % 10 )+""+(Math.floor((i/10))%10)+""+(Math.floor(Math.floor((i/10))/10)))) ) %9==0  ){
                console.log(i);
                }
                
            }

}


console.log("========= task 45 ==========")

// A misunderstanding of the problem



console.log("========= task 46 ==========")


for(let i =1 ; i < 1000 ;i++){

        if(i > 10 && i <100){

                if((( i)) == ( ( i % 10 ) + ( Math.floor((i/10))%10) ) * ( ( i % 10 ) + (Math.floor((i/10))%10) )  ){
                console.log(i);
                }

            }else if(i >= 100 ){
                if((( i ))  == ( ( i % 10 ) + (Math.floor((i/10))%10) + (Math.floor(Math.floor((i/10))/10)) * ( ( i % 10 ) + (Math.floor((i/10))%10) + (Math.floor(Math.floor((i/10))/10)) ) )  ){
                console.log(i);
                }
                
            }
}



console.log("========= task 47 ==========")


for(let i =1 ; i < 1000 ;i++){

        if(i > 10 && i <100){

                if((( i)) == ( ( i % 10 ) + ( Math.floor((i/10))%10) ) * ( ( i % 10 ) + (Math.floor((i/10))%10) )  ){
                console.log(i);
                }

            }else if(i >= 100 ){
                if((( i ))  == ( ( i % 10 ) + (Math.floor((i/10))%10) + (Math.floor(Math.floor((i/10))/10)) * ( ( i % 10 ) + (Math.floor((i/10))%10) + (Math.floor(Math.floor((i/10))/10)) ) )  ){
                console.log(i);
                }
                
            }
}


console.log("========= task 47 ==========")

for(let i =1 ; i < 1000 ;i++){
        if(i==1){
            console.log(1);
        }

        if(i > 10 && i <100){

                if((( i)) == ( ( ( i % 10 ) * ( i % 10 ) * ( i % 10 )  )  +  ( ( Math.floor((i/10))%10) * ( Math.floor((i/10))%10) * ( Math.floor((i/10))%10)  ) )   ){
                console.log(i);
                }

            }else if(i >= 100 ){
                if((( i ))  == ( ( ( i % 10 ) * ( i % 10 ) * ( i % 10 )  ) +  ( ( Math.floor((i/10))%10) * ( Math.floor((i/10))%10) * ( Math.floor((i/10))%10)  ) + (   (Math.floor(Math.floor((i/10))/10))  * (Math.floor(Math.floor((i/10))/10))  *  (Math.floor(Math.floor((i/10))/10))  ) )  ){
                console.log(i);
                }
                
            }
}



console.log("========= task 48 ==========")


for(let i =1 ; i < 1000 ;i++){
    let seq = Math.floor(Math.sqrt(i));
    let j =2;
    for( j ; j<seq ; j++ ){

        if(i > 10 && i <100){
                if( ((parseInt(( i % 10 )+""+(Math.floor((i/10))%10))) ) % j ==0  ){
                break;
                }

            }else if(i >= 100 ){
                if(( ( parseInt(( i % 10 )+""+(Math.floor((i/10))%10)+""+(Math.floor(Math.floor((i/10))/10)))) ) % j==0  ){
                break;
                }
                
            }
    }

    if(j == seq){
        console.log(i);
    }

}


console.log("========= task 49 ==========")

for(let i =1 ; i < 1000 ;i++){

        if(i > 10 && i <100){
                if((  ( ( i % 10 ) + (Math.floor((i/10))%10) )  * ( ( i % 10 ) + (Math.floor((i/10))%10) )  ) == (( i % 10 ) * (Math.floor((i/10))%10)) ){
                console.log(i);
                }

            }else if(i >= 100 ){
                if(  (  (  ( i % 10 ) + (Math.floor((i/10))%10) + (Math.floor(Math.floor((i/10))/10)))  *  (  ( i % 10 ) + (Math.floor((i/10))%10) + (Math.floor(Math.floor((i/10))/10))) ) == (( i % 10 ) * (Math.floor((i/10))%10) * (Math.floor(Math.floor((i/10))/10)))  ){
                console.log(i);
                }
                
            }
}


console.log("========= task 50 ==========")

for(let i =1 ; i < 1000 ;i++){

        if(i > 10 && i <100){
                if( ( (i) * (parseInt( ( i% 10 )+""+(Math.floor((i/10))%10) ))) % 10 ==1 ){
                console.log(i);
                }

            }else if(i >= 100 ){
                if( (    ( i ) * ( parseInt((( i % 10 )+""+(Math.floor((i/10))%10)+""+Math.floor(Math.floor((i/10))/10))   ) ) )  %10 == 1 ){
                console.log(i);
                }
                
            }
}





