let textToConvert = document.querySelector('#textToConvert');
let convertedText = document.querySelector('#convertedText');
let submitButton = document.querySelector('#submitButton');


const convertText = function(){
    let text = [...textToConvert.value];
    convertedText.textContent = text.map((element, index) => {
        return (index % 2 === 0) ? element.toUpperCase() : element.toLowerCase(); 
    }).join('');
}

submitButton.addEventListener('click', convertText);