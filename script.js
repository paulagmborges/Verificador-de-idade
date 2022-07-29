function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0|| Number(fano.value)> ano) {
        window.alert ('[ERRO]Verifique os dados e tente novamente!')
} else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero =' '
    var img = document.createElement('img')
    img.setAttribute('id','foto')
     if(fsex[0].checked) {
        gênero ='Homem'
        if (idade >=0 && idade < 10) {
            //criança
            img.setAttribute('src','imagem/criança-M.png')
        } else if (idade < 21){
            //jovem
            img.setAttribute('src','imagem/adolescente-M.png')
        } else if (idade < 60) {
            //adulto
            img.setAttribute('src','imagem/adulto-M.png')
        }else {
            //idoso
            img.setAttribute('src','imagem/idoso-M.png')
        } 
     } else if (fsex[1].checked) {
            gênero ='Mulher'
            if (idade >=0 && idade <10 ) {
                //criança
                img.setAttribute('src','imagem/criança-F.png')
            } else if (idade <21) {
                //jovem
                img.setAttribute('src','imagem/adolescente-F.png')
            } else if (idade <60){
                //adulto
                img.setAttribute('src','imagem/aduto-F.png')
            } else {
                //idoso
                img.setAttribute('src','imagem/idoso-F.png')
        } 
    }
        res.style.textAling='center';
        res.innerHTML=`Detectamos ${gênero} com ${idade} anos.`;
        res.appendChild(img)
    }


    }

