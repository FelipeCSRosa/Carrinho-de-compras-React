import { useState } from 'react'

import Servicos from './Servicos/Servicos'
import Carrinho from './Carrinho/Carrinho'

import './App.css'
import ServicosFunc from './Servicos/ServicosFunc';

function App() {
  const [valores, setValores] = useState([0, 0, 0]);
  const [total, setTotal] = useState(0);

  function handleValores(valores) {
    let soma = 0;
    for (let i = 0; i < valores.length; i++) {
      soma += valores[i];
      setTotal(soma);
    }
  }

  return (
    <div className='container'>
      <div className='components-container'>
        <ServicosFunc onClick={handleValores} valores={valores}/>
        <hr />
        <Carrinho total={total} />
      </div>
    </div>
  )
}

export default App