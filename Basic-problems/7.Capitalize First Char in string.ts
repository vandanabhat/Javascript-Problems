/**
 * Created by vandana on 9/21/18.
 */


function titleCase(str) {
    str = str.split(' ').map((word)=>{
        return word.charAt(0).toUpperCase()+word.substring(1).toLowerCase();
    });
    return str.join(" ");
}

console.log(titleCase("sHoRt AnD sToUt"));