// import lodash utilities
import _ from "lodash";

// function returns subtraction of a and b
// a: minuend
// b: subtrahend
// subtract(a,b) = a - b
function subtract(a, b){
    // check if a and b are integers
    if(_.isInteger(a) && _.isInteger(b)){
        return _.subtract(a, b);
    }else{ // else return NaN
        NaN;
    }
}

// export subtract function
export { subtract };