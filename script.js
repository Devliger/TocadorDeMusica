let musicas=[
    {titulo:'Uma e quinze da manhã', artista:'Natanzinho',src:'musicas/musicas/Natanzinho Lima - Uma e Quinze da Manhã - No Doze.mp3', img: 'imagens/Uma e quinze da manhã.PNG'},   {titulo:'Porsche Azul', artista:'zé filipe',src:'musicas/PORSCHE AZUL - FELIPE BEATS , ZÉ FELIPE , VITOR DAS LENTS ( LYRIC VIDEO OFICIAL).mp3', img: 'imagens/porshe azul.PNG'},
    {titulo:'Damn', artista:'ryu,The Runner',src:'musicas/Ryu, The Runner - _DAMN!_ feat. Luk the Real e Emitê Único (Official Music Video).mp3', img: 'imagens/ryu the runner.PNG'},
];

let musica = document.querySelector('audio');

let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');

let imagem = document.querySelector('img');

let nomeMusica = document.querySelector('.descricao h2');

let nomeArtista = document.querySelector('.descricao i');

duracaoMusica.textContent = segundosParaMinutos (Math.floor(musica.duration))


document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate',atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    renderizarMusica(indexMusica);
})
document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    renderizarMusica(indexMusica);
})

function renderizarMusica(index){
        musica.setAttribute('src',musicas[index].src);
        musica.addEventListener('loadeddata', () =>{
            nomeMusica.textContent = musicas [index].titulo;
            nomeArtista.textContent = musicas[index].artista; 
            imagem.src =musicas[index].img;
            duracaoMusica.textContent = segundosParaMinutos (Math.floor(musica.duration))
        });
}
function tocarMusica() {
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
} 

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100 )+ '%';

    let tempoDecorrido = document.querySelector('.inicio')
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos) {
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;

    // Garantindo que campoSegundos sempre tenha dois dígitos
    campoSegundos = campoSegundos.toString().padStart(2, '0');

    return campoMinutos + ':' + campoSegundos;
}
