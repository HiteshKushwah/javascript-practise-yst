function Duplicate(arr){
    let uniqueArray = [];

    for(let i = 0; i < arr.length; i++){
        let isDuplicate = false;


        for(let j = 0; j < uniqueArray.length; j++){
            if(arr[i] === uniqueArray[j]){
                isDuplicate = true
                break
            }

        }
        if(!isDuplicate){
            uniqueArray.push(arr[i])

        }
    }
     
    return uniqueArray
}
console.log(Duplicate([1,2,2,21,12,345,4,6,5,12]))