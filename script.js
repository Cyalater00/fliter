let array = [-1, -2, -3, 0, 1, 2, 3]
 let result = array.filter(numfliter);

 function numfliter(numbers){
     return numbers >= 0;
 }
  console.log(result);

function filterOut(arr){

    let result = arr.filter(numfliter);
    
    function numfliter(numbers){
         return numbers >= 0;
         }
         return result;
}
console.log(filterOut([-1,-2,-3,0,1,2,3]));