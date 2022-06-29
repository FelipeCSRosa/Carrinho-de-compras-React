import { useState } from 'react'

import './Plano.css'

function Plano({nome, preco, categoria, onClick, valores}) {

  let divsInternet = Array.from(document.querySelectorAll('.Internet'));
  divsInternet.forEach(div => div.classList.remove('disabled'));

  let valoresPlano = valores;

  function removerSelecionados(){
    valoresPlano[0] = 0;
    valoresPlano[1] = 0;
    valoresPlano[2] = 0;

    let divsFixo = Array.from(document.querySelectorAll('.Fixo'));
    divsFixo.forEach(div => div.classList.remove('plano-active'));
    divsFixo.forEach(div => div.classList.add('disabled'));

    let divsTV = Array.from(document.querySelectorAll('.TV'));
    divsTV.forEach(div => div.classList.remove('plano-active'));
    divsTV.forEach(div => div.classList.add('disabled'));

    return onClick(valoresPlano);
  }

  const handleClick = (e) => {
    if(e.currentTarget.classList.contains('Internet')){
      if(e.currentTarget.classList.contains('plano-active')){
        e.currentTarget.classList.remove('plano-active');
        return removerSelecionados();
      }

      let divsInternet = Array.from(document.querySelectorAll('.Internet'));
      divsInternet.forEach(div => div.classList.remove('plano-active'));

      let divsDisabled = Array.from(document.querySelectorAll('.disabled'));
      divsDisabled.forEach(div => div.classList.remove('disabled'));

      e.currentTarget.classList.add('plano-active');


      valoresPlano[0] = preco;
      onClick(valoresPlano)
    }

    if(e.currentTarget.classList.contains('Fixo') && valoresPlano[0] > 0){
      if(e.currentTarget.classList.contains('plano-active')){
        e.currentTarget.classList.remove('plano-active');
        valoresPlano[1] = 0;
        return onClick(valoresPlano)
      }

      let divsFixo = Array.from(document.querySelectorAll('.Fixo'));
      divsFixo.forEach(div => div.classList.remove('plano-active'));
      e.currentTarget.classList.add('plano-active');

      valoresPlano[1] = preco;
      onClick(valoresPlano)
    }

    if(e.currentTarget.classList.contains('TV') && valoresPlano[0] > 0){
      if(e.currentTarget.classList.contains('plano-active')){
        e.currentTarget.classList.remove('plano-active');
        valoresPlano[2] = 0;
        return onClick(valoresPlano)
      }

      let divsTV = Array.from(document.querySelectorAll('.TV'));
      divsTV.forEach(div => div.classList.remove ('plano-active'));
      e.currentTarget.classList.add('plano-active');

      valoresPlano[2] = preco;
      onClick(valoresPlano)
    }
  }

  

  return (
    <div className={`plano ${categoria} disabled`} onClick={handleClick}>
        <div className='circle'></div>
        <p className='nome'>{nome}</p>
        <p className='preco'>R$ {preco.toFixed(2)}</p>
        <p className='detalhes'>+DETALHES</p>
    </div>
  )
}

export default Plano
