//Crear una función que recibe 2 parametros 

function searchWord(setence, word){
    var newSetence = setence.split(' ');
    var exist = false;

    console.log(newSetence)

    for(let i = 0; i < newSetence.length; i++){
        if(newSetence[i] == word){
            exist = true;
        }else{
            exist = false;
        }
    }

    return exist
}

searchWord("Disfruta tus vacaciones", 'vacaciones');
