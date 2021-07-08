function mudarTexto1(img, alt){
    if(document.querySelector('.fisico_infos').style.display = 'none'){
        document.querySelector('.fisico_infos').style.display = 'block';
        document.querySelector('.imgedicao').setAttribute('src',img);
        document.querySelector('.imgedicao').setAttribute('alt',alt);
        document.querySelector('.digital_infos').style.display = 'none';
    }
}

function mudarTexto2(img, alt){
    if(document.querySelector('.digital_infos').style.display = 'none'){
        document.querySelector('.digital_infos').style.display = 'block';
        document.querySelector('.imgedicao').setAttribute('src',img);
        document.querySelector('.imgedicao').setAttribute('alt',alt);
        document.querySelector('.fisico_infos').style.display = 'none';
    }
}

function activesd(){
    document.querySelector('.digital').classList.add('actives');
    document.querySelector('.fisica').classList.remove('actives');
}
function activesf(){
    document.querySelector('.fisica').classList.add('actives');
    document.querySelector('.digital').classList.remove('actives');
}

window.addEventListener('scroll', function(){
    var header = document.querySelector('.second_menu');
    header.classList.add('fixed');
    header.classList.toggle('sticky', window.scrollY > 80); //quando o scrollY estiver maior que 80 remova os dois primeiros menus, adicionando a class fixed
    if(this.window.scrollY < 79){  //quando estiver menor, já bem proximo ao topo, retorne os dois primeiros, removendo a class fixed
        header.classList.remove('fixed');
    }
})
