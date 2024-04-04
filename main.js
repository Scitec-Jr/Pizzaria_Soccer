// Função para escutar mudanças no estado do vídeo
function onYouTubePlayerAPIReady() {
    // Obtém o elemento do vídeo
    var player;
    player = new YT.Player('youtubeVideo', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// Função chamada quando o player estiver pronto
function onPlayerReady(event) {
    // Torna o player mudo
    event.target.mute();
}

// Função chamada quando o estado do player mudar
function onPlayerStateChange(event) {
    // Se o vídeo terminar (estado 0), reinicia
    if (event.data == YT.PlayerState.ENDED) {
        event.target.playVideo();
    }
}
