


function calc(){
    document.getElementById('resultColorAndText').style.display='block';
    let growth = +growthInput.value;
    let massa = +massaInput.value;
    let index = 0;
    let colorBG, colorText, resultText;
    
    
    if (growth < 3 ) {
        index = massa / (growth ** 2);
    
    }else{
        index = massa / ((growth/100) ** 2);

    }
   
    
    
    if(index <= 16){
        colorBG ='blue';
        colorText ='#ffffff';
        resultText = "Выраженный дефицит массы тела"
    }else if((index > 16)&&(index <= 18.5)){
        colorBG ='#04B4AE';
        colorText ='#ffffff';
        resultText = "Недостаточная (дефицит) масса тела"
    }else if((index > 18.5)&&(index <= 25)){
        colorBG ='green';
        colorText ='#ffffff';
        resultText = "Норма"
    }else if((index > 25)&&(index <= 30)){
        colorBG ='greenyellow';
        colorText ='black';
        resultText = "Избыточная масса тела (предожирение)"
    }else if((index > 30)&&(index <= 35)){
        colorBG ='yellow';
        colorText ='black';
        resultText = "Ожирение 1 степени"
    }else if((index > 35)&&(index <= 40)){
        colorBG ='orange';
        colorText ='black';
        resultText = "Ожирение 2 степени"
    }else if(index >= 40){
        colorBG ='red';
        colorText ='#ffffff';
        resultText = "Ожирение 3 степени"
    }
    document.getElementById('resultColorAndText').style.background = colorBG;
    document.getElementById('resultColorAndText').style.color = colorText;
    resultColorAndText.innerHTML = resultText;

    index = index.toFixed(1);
    resultPlace.innerHTML = index;
    
}

    