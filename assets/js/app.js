


function calc(){
    document.getElementById('resultColor').style.display='block';
    let growth = +growthInput.value;
    let massa = +massaInput.value;
    
    if (growth < 3 ) {
        index = massa / (growth ** 2);
    
    }else{
        index = massa / ((growth/100) ** 2);

    }
   
   
    if(index <= 16){
        document.getElementById('resultColor').style.background='blue';
        document.getElementById('resultColor').style.color='#ffffff';
        resultColor.innerHTML = "Выраженный дефицит массы тела"
    }else if((index > 16)&&(index <= 18.5)){
        document.getElementById('resultColor').style.background='#04B4AE';
        document.getElementById('resultColor').style.color='#ffffff';
        resultColor.innerHTML = "Недостаточная (дефицит) масса тела"
    }else if((index > 18.5)&&(index <= 25)){
        document.getElementById('resultColor').style.background='green';
        document.getElementById('resultColor').style.color='#ffffff';
        resultColor.innerHTML = "Норма"
    }else if((index > 25)&&(index <= 30)){
        document.getElementById('resultColor').style.background='greenyellow';
        document.getElementById('resultColor').style.color='black';
        resultColor.innerHTML = "Избыточная масса тела (предожирение)"
    }else if((index > 30)&&(index <= 35)){
        document.getElementById('resultColor').style.background='yellow';
        document.getElementById('resultColor').style.color='black';
        resultColor.innerHTML = "Ожирение 1 степени"
    }else if((index > 35)&&(index <= 40)){
        document.getElementById('resultColor').style.background='orange';
        document.getElementById('resultColor').style.color='black';
        resultColor.innerHTML = "Ожирение 2 степени"
    }else if(index >= 40){
        document.getElementById('resultColor').style.background='red';
        document.getElementById('resultColor').style.color='#ffffff';
        resultColor.innerHTML = "Ожирение 3 степени"
    }
    index = index.toFixed(1);
    resultPlace.innerHTML = index;
    
}

    