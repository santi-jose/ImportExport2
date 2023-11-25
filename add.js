// import lodash utilities
import _ from "lodash";

// function returns sum of a and b
function add(a, b){
    // check if a and b are integers
    if(_.isInteger(a) && _.isInteger(b)){
        return _.add(a, b);
    }else{ // else return NaN
        NaN;
    }
}

// export add function
export { add };