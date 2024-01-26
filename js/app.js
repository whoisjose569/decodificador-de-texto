function criptoTexto(){
    let texto = document.getElementById('input-padrao').value.toLowerCase();

    texto = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat')
    imagem = document.getElementById("img-do-retangulo")
    imagem.style.opacity = '0'

    textoH4 = document.querySelector("h4")
    textoH4.innerHTML = ''

    textoP = document.querySelector("p")
    textoP.innerHTML = ''


    document.getElementById('dados-decodificador').style.display = 'block';
    document.getElementById('resultado-do-texto').value = texto;
}

function decriptoTexto(){
    let texto = document.getElementById('input-padrao').value.toLowerCase();

    texto = texto.replace(/enter/g, 'e').replace(/imes/g,'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u')


    imagem = document.getElementById("img-do-retangulo")
    imagem.style.opacity = '0'

    textoH4 = document.querySelector("h4")
    textoH4.innerHTML = ''

    textoP = document.querySelector("p")
    textoP.innerHTML = ''


    document.getElementById('dados-decodificador').style.display = 'block';
    document.getElementById('resultado-do-texto').value = texto;
}

function copiaTexto(){
    let copiarTexto = document.getElementById('resultado-do-texto');
    copiarTexto.select();
    navigator.clipboard.writeText(copiarTexto.value);
}