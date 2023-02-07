let count = 1;  //Seta o Contador para a 1 Imagem
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImg();
}, 3000)


function nextImg(){
    count++;
    if(count>4){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}
