import { useState, useEffect } from 'react';

import Categoria from '../Categoria/Categoria'

function ServicosFunc(props){

    const [planosInternet, setPlanosInternet] = useState([]);
    const [planosFixo, setPlanosFixo] = useState([]);
    const [planosTV, setPlanosTV] = useState([]);


    const urlInternet = 'https://my-json-server.typicode.com/FelipeCSRosa/FakeApi/Internet';
    const urlFixo = 'https://my-json-server.typicode.com/FelipeCSRosa/FakeApi/Fixo:';
    const urlTV = 'https://my-json-server.typicode.com/FelipeCSRosa/FakeApi/TV';

    useEffect(() => {
        fetch(urlInternet)
          .then((response) => response.json())
          .then((data) => {
            setPlanosInternet(data)
          });

          fetch(urlFixo)
          .then((response) => response.json())
          .then((data) => {
            setPlanosFixo(data)
          });

          fetch(urlTV)
          .then((response) => response.json())
          .then((data) => {
            setPlanosTV(data)
          });
      }, []);

    return (
        <>
            <Categoria categoria="Internet" descricao="Selecione um plano para continuar" planos={planosInternet} onClick={props.onClick} valores={props.valores}/>
            <Categoria categoria="Fixo" descricao="Agora escolha o seu pacote de telefone fixo" planos={planosFixo} onClick={props.onClick} valores={props.valores}/>
            <Categoria categoria="TV" descricao="Agora escolha o seu pacote de televisão" planos={planosTV} onClick={props.onClick} valores={props.valores}/>
        </>
    )

}

export default ServicosFunc