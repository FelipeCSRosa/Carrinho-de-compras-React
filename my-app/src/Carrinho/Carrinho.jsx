import { useState } from 'react'

import Botao from '../Botao/Botao'

import './Carrinho.css'

function Carrinho({total}) {
  console.log(total.toFixed(2));

  let btnActive = false;

  if(total > 0) {
    btnActive = true;
  }

  return (
    <div className='carrinho'>
        <div className='carrinho-align-left'>
            <p>Taxa de instalação</p>
            <p className='purple-text'>Total</p>
            <Botao active={btnActive ? 'btn-active' : ''}>Continuar</Botao>
        </div>
        <div className='carrinho-align-right'>
            <p>Grátis</p>
            <p className='purple-text'>R$ {total.toFixed(2)}/mês</p>
        </div>
    </div>
  )
}

export default Carrinho
