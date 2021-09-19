

function incbutton(){
    var element = document.getElementById('increasetext');
    var value = element.innerHTML; 
    ++value
    document.getElementById('increasetext').innerHTML = value;
}