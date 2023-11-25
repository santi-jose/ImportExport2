// import lodash utilities
import _ from "lodash";

// function returns multiplication of a and b
function multiply(a, b){
    // check if a and b are integers
    if(_.isInteger(a) && _.isInteger(b)){
        return _.multiply(a, b);
    }else{ // else return NaN
        NaN;
    }
}

// export multiply function
export { multiply };