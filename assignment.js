// ==============FeetToMile Convert================

function feetToMile(feet){
    var miles = feet/5280;
    return miles;
}
 var result = feetToMile(52800);
 console.log(result);

//  =================WoodCalculator====================

 function woodCalculator(chair, table, bed){
     var totalwood = chair*1+table*3+bed*5;
     return totalwood;
 }
 var totalqubickwood = woodCalculator(6,6,3);
 console.log(totalqubickwood);
 var qubickwood = woodCalculator(10,4,3);
 console.log(qubickwood);

//  =========================brickCalculator======================
function brickCalculator(){
    
}

// ========================tinyFriend==============================

function tinyFriend(arr){
    let shortlen = Infinity;
    let shortest = "";
    if(arr.length > 0){
        for(let i =0; i < arr.length; i++){
            if(typeof arr[i]=== 'string' & arr[i].length <shortlen){
                shortest = arr[i];
                shortlen = arr[i].length;
            }
        }
    }
    return shortest;
}
var nameshort = tinyFriend(['akmal khan', 'sohel Hossain', 'Masum Mahamud','Ahsan Kabir', 'shafin', 'faruk']);
console.log(nameshort)