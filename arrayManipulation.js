function processArray(arr) { 
    let processedArray = []; 
        for (let num of arr) { 
            if (num % 2 === 0) { 
                processedArray.push(num ** 2);  
            } else { 
                processedArray.push(num * 3);         } 
        } 
        return processedArray; 
    } 
     
     
    let inputArray = [8, 20, 28, 30, 16]; 
    let outputArray = processArray(inputArray); 
    console.log(outputArray);