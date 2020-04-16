const celsiusInput = document.querySelector('#celsius > input')
const fahrenheitInput = document.querySelector('#fahrenheit > input')
const kelvinInput = document.querySelector('#kelvin > input')

const roundNum = (num) => {
    return Math.round(num*100)/100
}

const celsiusToFandK = ()=>{
let cTemp = parseFloat(celsiusInput.value)
let fTemp = (cTemp * (9/5)) + 32
let kTemp = cTemp + 273.15
fahrenheitInput.value = roundNum(fTemp)
kelvinInput.value = roundNum(kTemp)
}

const fahrenheitToCandK = ()=>{
    let fTemp = parseFloat(fahrenheitInput.value)
    let cTemp = (fTemp - 32) * (5/9)
    let kTemp = (fTemp + 459.67) * 5/9
    celsiusInput.value = roundNum(cTemp) 
    kelvinInput.value = roundNum(kTemp)
    }
    
const kelvinToCandF = ()=>{
    let kTemp = parseFloat(kelvinInput.value)
    let cTemp = kTemp - 273.15
    let fTemp = 9/5 * (kTemp - 273) + 32
    celsiusInput.value = roundNum(cTemp)
    fahrenheitInput.value = roundNum(fTemp)
    }
    
const main = () => {
celsiusInput.addEventListener('input', celsiusToFandK);
fahrenheitInput.addEventListener('input', fahrenheitToCandK);
kelvinInput.addEventListener('input', kelvinToCandF);
}

main();
