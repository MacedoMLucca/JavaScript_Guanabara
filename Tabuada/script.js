function tabuada(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
     //se estiver em branco o numero da tabuada
    if(num.value.length == 0){
        window.alert('Por favor ,digite um numero!')
  
    } else{
        let n = Number(num.value)  
        let c = 1
        tab.innerHTML= ''
        while ( c <= 10){
            let item =document.createElement('option')
            item.text = `${n} x ${c} = ${n*c} `
            item.value = `tab${c}`
            // add o elemento ao  selected "appendChild"
            tab.appendChild (item)
            c++
        } 
    }
//createElement cria um elemento em HTML
    
}