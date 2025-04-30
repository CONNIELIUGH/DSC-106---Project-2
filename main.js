const button = document.querySelector("#submit");


button.addEventListener("click",     
    (x) =>{
        console.log("hello", x);
        const celsiusTag = document.querySelector('#celsius');
        const celsius = celsiusTag.value;

        const fah = celsius*9/5 + 32;
        
        const fahrenheitTag = document.querySelector('#result');
        fahrenheitTag.innerText = `${celsius} degrees Celsius is
        ${fah} degrees Fahrenheit`;
      
    }

);