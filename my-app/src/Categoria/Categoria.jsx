import Plano from '../Plano/Plano'

import './Categoria.css'

function Categoria({categoria, descricao, planos, onClick, valores}) {



  return (
    <div className='categoria-container'>
      <h1>{categoria}</h1>
      <p>{descricao}</p>
      <div className='planos'>
        {
          planos?.map(e =>
            <Plano nome={e.nome} preco={e.preco} categoria={categoria} onClick={onClick} valores={valores}/>
          )
        }
      </div>
      <div className='container-circle-categoria'>
        <div className='circle-categoria'></div>
      </div>
    </div>
  )
}

export default Categoria
