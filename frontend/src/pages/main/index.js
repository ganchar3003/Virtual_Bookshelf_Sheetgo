import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Livro1 from '../../assets/33e2c35c592263072b975c8589f1c4b4.jpg';


export default class Main extends Component {
    render() {
        return (
            <div id="main">
                <div className="link_category">
                    <Link to='/category'> Reading </Link>                
                    <Link to='/category'> Readed </Link>                
                    <Link to='/category'> Want to Read </Link>     

                    <div className="button_filter">
                    <Link to="/">Classificar</Link>
                    </div>
                </div>


                <div className="footer">
                    <Link to='/form'> Novo Livro </Link>
                </div>

                <div className="category">
                    <ul className="total_list">

                        <li className="list_item">
                            <div className="image_book">
                                <img src={Livro1} alt="Livro 1"/><br />
                            </div>
                            <h2>The Glass Woman</h2> 
                            <p>
                                Programar, na prática, é escrever um texto que 
                                será transformado em um software. Esse texto deve 
                                ser escrito em uma linguagem de programação e é 
                                chamado de código, mas não é um código lido apenas 
                                por uma máquina, é um código que pode ser lido por 
                                um ser humano
                            </p>
                            <div className="link_detail">
                                <Link to='/book'> Detalhes </Link>
                            </div>
                        </li>
                        <li className="list_item">
                            <div className="image_book">
                                <img src={Livro1} alt="Livro 1"/><br />
                            </div>
                            <h2>The Glass Woman</h2> 
                            <p>
                                Programar, na prática, é escrever um texto que 
                                será transformado em um software. Esse texto deve 
                                ser escrito em uma linguagem de programação e é 
                                chamado de código, mas não é um código lido apenas 
                                por uma máquina, é um código que pode ser lido por 
                                um ser humano
                            </p>
                            <div className="link_detail">
                                <Link to='/book'> Detalhes </Link>
                            </div>
                        </li>
                        <li className="list_item">
                            <div className="image_book">
                                <img src={Livro1} alt="Livro 1"/><br />
                            </div>
                            <h2>The Glass Woman</h2> 
                            <p>
                                Programar, na prática, é escrever um texto que 
                                será transformado em um software. Esse texto deve 
                                ser escrito em uma linguagem de programação e é 
                                chamado de código, mas não é um código lido apenas 
                                por uma máquina, é um código que pode ser lido por 
                                um ser humano
                            </p>
                            <div className="link_detail">
                                <Link to='/book'> Detalhes </Link>
                            </div>
                        </li>
                        <li className="list_item">
                            <div className="image_book">
                                <img src={Livro1} alt="Livro 1"/><br />
                            </div>
                            <h2>The Glass Woman</h2> 
                            <p>
                                Programar, na prática, é escrever um texto que 
                                será transformado em um software. Esse texto deve 
                                ser escrito em uma linguagem de programação e é 
                                chamado de código, mas não é um código lido apenas 
                                por uma máquina, é um código que pode ser lido por 
                                um ser humano
                            </p>
                            <div className="link_detail">
                                <Link to='/book'> Detalhes </Link>
                            </div>
                        </li>
                        <li className="list_item">
                            <div className="image_book">
                                <img src={Livro1} alt="Livro 1"/><br />
                            </div>
                            <h2>The Glass Woman</h2> 
                            <p>
                                Programar, na prática, é escrever um texto que 
                                será transformado em um software. Esse texto deve 
                                ser escrito em uma linguagem de programação e é 
                                chamado de código, mas não é um código lido apenas 
                                por uma máquina, é um código que pode ser lido por 
                                um ser humano
                            </p>
                            <div className="link_detail">
                                <Link to='/book'> Detalhes </Link>
                            </div>
                        </li>
                        <li className="list_item">
                            <div className="image_book">
                                <img src={Livro1} alt="Livro 1"/><br />
                            </div>
                            <h2>The Glass Woman</h2> 
                            <p>
                                Programar, na prática, é escrever um texto que 
                                será transformado em um software. Esse texto deve 
                                ser escrito em uma linguagem de programação e é 
                                chamado de código, mas não é um código lido apenas 
                                por uma máquina, é um código que pode ser lido por 
                                um ser humano
                            </p>
                            <div className="link_detail">
                                <Link to='/book'> Detalhes </Link>
                            </div>
                        </li>
                        <li className="list_item">
                            <div className="image_book">
                                <img src={Livro1} alt="Livro 1"/><br />
                            </div>
                            <h2>The Glass Woman</h2> 
                            <p>
                                Programar, na prática, é escrever um texto que 
                                será transformado em um software. Esse texto deve 
                                ser escrito em uma linguagem de programação e é 
                                chamado de código, mas não é um código lido apenas 
                                por uma máquina, é um código que pode ser lido por 
                                um ser humano
                            </p>
                            <div className="link_detail">
                                <Link to='/book'> Detalhes </Link>
                            </div>
                        </li>

                    </ul>
                </div>

            </div>

            
        );
    }
}