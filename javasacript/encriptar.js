
const diccionario = {a: 'ai',e:'enter',i:'imes',o:'ober',u:'ufat'};
document.getElementById('texto').focus();
function Encriptar(){
    let texto = document.getElementById('texto').value;
    let texto2 = "";
    //ENCRYPTAR
    if(texto){
        for(let i = 0;i<texto.length;i++){
            if(texto[i] == Object.keys(diccionario)[0] || texto[i] == Object.keys(diccionario)[1] 
                || texto[i] == Object.keys(diccionario)[2] || texto[i] == Object.keys(diccionario)[3] 
                || texto[i] == Object.keys(diccionario)[4] ){
                            texto2 += diccionario[texto[i]];      
            }else{
                texto2 += texto[i];
                }
        }
        ocultar('none');
        document.getElementById('mostrar').innerHTML = texto2;
        document.getElementById('texto').value = "";
    }else{
        ocultar('inline');
    }
    
}
function Desencriptar(){
    let texto = document.getElementById('texto').value;
    if(texto){
        texto2 = texto;
        for(let i = 0; i<Object.keys(diccionario).length;i++){
            if(texto2.includes(Object.values(diccionario)[i])){
                console.log(true)
                texto2 = texto2.replace(Object.values(diccionario)[i],Object.keys(diccionario)[i]);
                i--;
            }
        }
        ocultar('none');
        document.getElementById('mostrar').innerHTML = texto2;
        document.getElementById('texto').value = "";
    }else{
        ocultar('inline');
    }
    
}

function Copiar(){
    document.getElementById('mostrar').select();
    document.execCommand('copy');
    document.getElementById('texto').focus();
}

function ocultar(opcion){
    let elementos =["inline","none"];
    let id =["imagen","mostrar","btnCopiar"];
    document.getElementById(id[0]).style.display = opcion;
    for(let ids of id){
        if(ids != "imagen"){
            (opcion == elementos[0]) ? document.getElementById(ids).style.display = elementos[1] :document.getElementById(ids).style.display = elementos[0];
        }
    }
}

function solo_minusculas(texto){
    //FORMA 1
    let validos = "abcdefghijklmnñopqrstuvwxyz ";
    let text = ""
    for(let i of texto){
        text += (validos.includes(i)) ? i : "";
    }
    return text;
}
