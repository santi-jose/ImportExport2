// import lodash utilities
import _ from "lodash";

// function returns division of a and b
// a: dividend
// b: divisor
// divide(a,b) = a/b
function divide(a, b){
    // check if a and b are integers
    if(_.isInteger(a) && _.isInteger(b)){
        return _.divide(a, b);
    }else{ // else return NaN
        NaN;
    }
}

// export divide function
export { divide };