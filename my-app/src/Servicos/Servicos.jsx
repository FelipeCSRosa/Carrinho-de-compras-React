import { useState } from 'react'
import React, { Component } from 'react';

import Categoria from '../Categoria/Categoria'

class Servicos extends Component {
    constructor(props) {
        super(props);

        this.urlInternet = 'https://my-json-server.typicode.com/FelipeCSRosa/FakeApi/Internet';
        this.urlFixo = 'https://my-json-server.typicode.com/FelipeCSRosa/FakeApi/Fixo:';
        this.urlTV = 'https://my-json-server.typicode.com/FelipeCSRosa/FakeApi/TV';

        this.onClick = this.props.onClick;

        this.state = {
            planosInternet: [],
            planosFixo: [],
            planosTV: []
        };
    }


    componentDidMount() {
        fetch(this.urlInternet).then(response => {return response.json();}).then(data => {
            this.setState({planosInternet: data});
        })

        fetch(this.urlFixo).then(response => {return response.json();}).then(data => {
            this.state.planosFixo = data
        })

        fetch(this.urlTV).then(response => {return response.json();}).then(data => {
            this.state.planosTV = data
        })
    }

    render() {
        return(
            <>
                <Categoria categoria="Internet" descricao="Selecione um plano para continuar" planos={this.state.planosInternet} onClick={this.onClick} valores={this.props.valores}/>
                <Categoria categoria="Fixo" descricao="Agora escolha o seu pacote de telefone fixo" planos={this.state.planosFixo} onClick={this.onClick} valores={this.props.valores}/>
                <Categoria categoria="TV" descricao="Agora escolha o seu pacote de televisão" planos={this.state.planosTV} onClick={this.onClick} valores={this.props.valores}/>
            </>
        )
    }

}

export default Servicos