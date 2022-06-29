import { useState } from 'react'

import './Botao.css'

function Botao(props) {
  return (
    <div className={`botao ${props.active}`}>{props.children}</div>
  )
}

export default Botao