let ange = prompt('Quel est votre ange')

if(isNaN(ange) == true){
    alert('Mr veiller rentrer un nombre')
}else{
    if(ange< 18){
        alert("vous avez pas l'age ")
    }else if(ange >=18 && ange<= 25 ){
        alert("Ne rester pas tres longtemps debout")
    }else{
        alert('vous ager')
        console.log(ange)
    }
}
