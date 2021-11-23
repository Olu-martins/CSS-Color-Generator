
const generateBtn = document.querySelector('#btn-generator');

const newh1 = document.querySelector('h1')

generateBtn.addEventListener('click', () => {
    
    const r = Math.floor(Math.random() * 255);
    
    const g = Math.floor(Math.random() * 255);
    
    const b = Math.floor(Math.random() * 255);
    
    const newColor =  `rgb(${r},${g},${b})`;
    
    document.body.style.backgroundColor = newColor;  
    
    newh1.innerText = newColor;    

})