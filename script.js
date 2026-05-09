let valorContador = 0;


const gemido = new Audio('gemido-whatsapp(1).mp3');
const botao = document.getElementById('clique');
const display = document.getElementById('valor');
const imagem = document.getElementById('Macaco');

    document.getElementById('valor').innerText = valorContador

botao.addEventListener('click', function() {
    valorContador++
    display.innerText = valorContador;

    if(valorContador === 25) {
        imagem.src = 'images.jpg'
        imagem.style.display = 'block';
        gemido.play();
    }
})