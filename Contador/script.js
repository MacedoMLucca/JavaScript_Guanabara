
function contar(){
var ini= document.getElementById('txti')
var fim = document.getElementById('txtf')
var passo= document.getElementById('txtp')
let res= document.getElementById('res')

//verificar se tem todos os dados
//nome da variavel.o valor . quantidade de caracteres == 0(caso nao tenha nada)
if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
    //window.alert('[ERRO] faltam dados!')
    res.innerHTML= `impossivel contar`
} else{
    //"br" é para quebra a linha que conta 
    res.innerHTML= 'contando: <br >' 
    let i =Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
     
    // para que o passo nao seja 0 ou menor
    if (p <= 0){
      window.alert('passo invalido! consideramos PASSO 1')
      p = 1
    } 


    if(i<f){
       //conttagem crescente 
        for(var c = i; c <= f ; c += p){
           res.innerHTML += ` ${c} \u{1F449}`
    }
} else  {
   //contagem regressiva
    for( var c = i ; c >= f; c -= p){
      res.innerHTML += `${c} \u{1F449}`    
   }    
}
res.innerHTML += `\u{1F3C1}`
}

}

