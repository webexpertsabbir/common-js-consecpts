function sum(a, b, c){
    const args = [...arguments];
    // console.log(args)
    const result = a + b + c;
    return result;
}

const total = sum(12, 23, 34, 50, 60);
// console.log(sum.length);
// console.log(total);

// let p='Javascript'; 
// let q=p; 
// p='React'; 
// console.log(q); 

// const isTrue='false'; 
// if(!isTrue){
// console.log('hello');
// } else {
// console.log('world'); 
// }

// function sum(p, q) {
//     p + q;
//    }
//    const result = sum(2, 3);
//    console.log(result);
   

// if ("2" === 2) {
//     console.log("Inside if");
//    } else {
//     console.log("Inside else");
//    }

// function work(x, y = 4) {
//     return x + y;
//    }
//    console.log(work(32);