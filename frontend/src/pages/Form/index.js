import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';


export default class Form extends Component {
    render() {
        return ( 
            <div className="main">
                <div className="header_form">
                    <h1>Cadastro de Livro</h1>
                    <p>Preencha os Dados para inclusão do livro na estante virtual</p>
                </div>

                <form className="input_form">
                    <fieldset>
                        <legend>
                            Imagem
                        </legend>
                        <p> Inclua uma imagem de capa no cadastro do seu novo Livro Virtual</p>
                        <button>Imagem</button>
                    </fieldset>

                    <fieldset>
                        <legend> 
                            Dados do Livro
                        </legend>
                        <p> Preencha os dados do seu Livro</p>

                        <div className="input_field">
                            <input
                            type="text" 
                            name="name" 
                            placeholder="Nome do Livro"
                            id="name" 
                            />
                        </div>

                        <div className="input_field">
                            <input 
                            type="text" 
                            name="autor" 
                            placeholder="Autor"
                            id="name" 
                            />
                        </div>

                        <div className="input_field">
                            <input 
                            type="text" 
                            name="description" 
                            placeholder="Descrição"
                            id="name" 
                            />
                        </div>
                        
                    </fieldset>

                    <fieldset>
                        <legend>
                            Escolha uma Opção de Leitura
                        </legend>
                        <div className="checkbox_main">
                            <div className="checkbox">
                                <input 
                                    type="checkbox" 
                                    name="Reading" 
                                    id="Reading" 
                                    />
                                <label for="Reading" >Reading</label>
                            </div>
                            <div className="checkbox">
                                <input 
                                    type="checkbox" 
                                    name="Wants to Read" 
                                    id="Wants to Read" 
                                    />
                                <label for="Wants to Read" >Wants to Read</label>
                            </div>
                            <div className="checkbox">
                                <input 
                                    type="checkbox" 
                                    name="Readed" 
                                    id="Readed" 
                                    />
                                <label for="Readed" >Readed</label>
                            </div>
                        </div>
                    </fieldset>
                </form>
                <div className="submit_controls">
                    <Link to='/'> Voltar a Home </Link>
                    <button type="submit"> Criar </button>
                </div>
            </div>
        );
    }
}