function  LargestArray(arr){
    let store = arr[0];

    for(let i = 0; i <  arr.length; i ++){
        if(arr[i] > store){
          store =  arr[i] 

        }
    }

return store
}

console.log(LargestArray([1,2,33,446,65,33,55]))