// Use for loop
const fibs = function(num) {
    if (num < 0) {
        return "OOPS";
    }
    else {
        let sequence = [0,1];
        let a = 0;
        let b = 1;
        let x = 0;
    
        for (let i = 2; i <= num; i++){
        x = +a + b;
        sequence.push(x);
        a = b;
        b = x;
        };
    
        return sequence.splice(0, num);
    }
};
    
// Use recursion
function fibsRec(num) {
    if (num <= 1) {
        return num;
    }

    return fibsRec(num-1) + fibsRec(num-2)
}

let example = fibsRec(7);
console.log(example);