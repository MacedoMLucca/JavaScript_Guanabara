function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if (fano.value.length == 0  || Number(fano.value) > ano){
       window.alert('verifique os dados e tente novamente')
   }else{
       fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
      var genero = " "
      var img = document.createElement('img')
      img.setAttribute('id', 'foto') 
      if (fsex[0].checked){
          genero = 'Homem'
          if ( idade >= 0 && idade <10){
              //criança
              img.setAttribute('src' , 'bebe.criança.homem.jpg')
          }else if(idade < 20){
              //jovem
              img.setAttribute('src' , 'jovem.homem.jpg')
          }else if(idade < 50){
            //adulto
            img.setAttribute('src' , 'adulto.homem.jpg')
        }else {
            //idoso
            img.setAttribute('src' , 'idoso.jpg')
        }

    }else if (fsex[1].checked){
          genero = 'mulher'
          if ( idade >= 0 && idade <10){
            //criança
            img.setAttribute('src' , 'bebe.criança.mulher.jpg')
            }else if(idade < 20){
            //jovem
            img.setAttribute('src' , 'jovem.mulher.jpg')
            }else if(idade < 50){
          //adulto
          img.setAttribute('src' , 'adulto.mulher.jpg')
            }else {
          //idoso
          img.setAttribute('src' , 'idosa.jpg')
        }
        }
        res.style.textAling= 'center'
        res.innerHTML = `${genero} com ${idade} anos.`
       
        res.appendChild(img)
    }

}