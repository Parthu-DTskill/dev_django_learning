const generateEl = document.getElementById('generated-code')
const form = document.getElementById('generator-form')
 
form.addEventListener('submit', function(e){
    e.preventDefault()
    var min = form.querySelector('input[name="minimum"]').value
    var max = form.querySelector('input[name="maximum"]').value
        min = parseInt(min)
        max = parseInt(max)
    if(min > max){
        alert("Maximum Number must be greater than Minimum Number");
        return false;
    }
    if(min == max){
        alert("Minimum Number must not be equal to Maximum Number");
        return false;
    }
    var generatedCode = Math.floor(Math.random() * (max - min + 1)) + min;
    generateEl.innerText = generatedCode
})