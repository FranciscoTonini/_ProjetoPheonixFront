const criarTarefa = (evento) =>{
    evento.preventDefault();
    const quantidade = 20;
    let repete = quantidade;
    const lista = document.querySelector('[data-liastaSeguradoras]');
    while(repete > 0){
        const valor = repete;
        const slideWrap = document.createElement('div');
        slideWrap.classList.add('swiper-slide')
        const conteudo = `<img src="./img/${valor}.png" alt="${valor}">`;
        slideWrap.innerHTML = conteudo;
        lista.appendChild(slideWrap);
        repete -= 1;
    }
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 'auto',
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}

// const novaTarefa = document.querySelector('[data-button]');
document.addEventListener('DOMContentLoaded', criarTarefa);



//Eventos dom
// novaTarefa.addEventListener('click', criarTarefa);