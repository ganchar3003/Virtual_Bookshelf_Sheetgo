import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Livro2 from '../../assets/51FHuacxYjL._SX379_BO1,204,203,200_.jpg';

export default class Book extends Component {
    render() {
        return (
            <div className="main">
                <div className="book_manipulation">
                    <Link to='/form'>Editar livro</Link>
                    <Link to="/form">Excluir Livro</Link>
                    <Link to='/'> Home </Link>
                </div>

                <div className="header_title">
                    <h1>Título do Livro</h1>
                </div>

                <div className="book_detail">
                    <div className="image">
                        <img src={Livro2} alt="Livro 2"/><br />
                    </div>
                    <h3><strong>Autor:</strong>  Luis Ganchar</h3>
                    <p>Esse livro conta a história de um cara muito legal que estava tentando apreender programação sozinho, enquanto tentava conseguir emprego na área</p>
                    
                    <div className="info_livro">
                        <span><strong>Data de Criação:</strong> 00/00/2000 </span>
                        <div className="categoria">
                            <h4>Categoria Atual</h4>
                            <a href="">Editar</a>
                        </div>
                    </div>
                </div>
                

                <div className="comment_box">
                    <h2>Comentários sobre o LIvro</h2>
                    <div className="comments">
                        <div className="comment">
                            <p>Comentário 1<br></br></p>
                            <div className="comment_manipulation">
                                <a href="">Editar</a>
                                <a href="">Excluir</a>
                            </div>
                        </div>
                        <div className="comment">
                            <p>Comentário2<br></br></p>
                            <div className="comment_manipulation">
                                <a href="">Editar</a>
                                <a href="">Excluir</a>
                            </div>
                        </div>
                        <div className="comment">
                            <p>Comentário3<br></br></p>
                            <div className="comment_manipulation">
                                <a href="">Editar</a>
                                <a href="">Excluir</a>
                            </div>
                        </div>
                        <div className="comment">
                            <p>Comentário4<br></br></p>
                            <div className="comment_manipulation">
                                <a href="">Editar</a>
                                <a href="">Excluir</a>
                            </div>
                        </div>
                        <div className="comment">
                            <p>Comentário5<br></br></p>
                            <div className="comment_manipulation">
                                <a href="">Editar</a>
                                <a href="">Excluir</a>
                            </div>
                        </div>
                    </div>

                    <div id="input_box">
                        <input 
                            type="text" 
                            name="comment" 
                            placeholder="Adicione um comentário"
                            id="comment" 
                        />
                        <button type="submit">Enviar</button>
                    </div>
                </div>

            </div>
        );
    }
}


