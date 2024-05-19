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

    function formatArrayStrings(Strings, Numbers) { 
        const formattedStrings = []; 
        for (let i = 0; i < Strings.length; i++) { 
          const string = Strings[i]; 
          const number = Numbers[i]; 
          if (number % 2 === 0) { 
            formattedStrings.push(string.toUpperCase()); 
          } else { 
            formattedStrings.push(string.toLowerCase()); 
          } 
        } 
        return formattedStrings; 
      } 
       
     
    const originalStrings = ["The”,  “Boy”, “Is”, “Very”,  “Awesome"]; 
    const processedNumbers = [8, 20, 28, 30, 16];  
     
    const formattedStrings = formatArrayStrings(originalStrings, processedNumbers); 
     
    console.log("Original Strings:", originalStrings); 
    console.log("Formatted Strings:", formattedStrings);