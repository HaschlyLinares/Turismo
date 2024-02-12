(function(){
    const paginas = [...document.querySelectorAll('.destino_body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;
 
    buttonNext.addEventListener('click',()=>{
        changePosition(1);

    });

    buttonBefore.addEventListener('click',()=>{
        changePosition(-1);

    });

    const changePosition = (add)=>{
        const currentDestino = document.querySelector('.destino_body--show').dataset.id;
        value=Number(currentDestino);
        value+=add;

        paginas[Number(currentDestino)-1].classList.remove('destino_body--show');
        if(value === paginas.length+1 || value === 0 ){
            value = value === 0 ? paginas.length : 1;

        }

        paginas[value-1].classList.add('destino_body--show');

    }

}) ();