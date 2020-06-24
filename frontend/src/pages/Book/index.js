import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Livro2 from '../../assets/51FHuacxYjL._SX379_BO1,204,203,200_.jpg';

export default function Book () {
    
    const [book, setBook] = useState({});
    
    /* const array_comments = {
        _id: 'do livro em questão' Como se fosse chave estrangeira,
        _id_comment: 'id do comentário",
        comment:''
    }
    */

    useEffect(() => {
        let URL = document.URL;
        URL = URL.split('/');
        let find_book = JSON.parse(localStorage.getItem('listadoslivros'));
        let obj = find_book.find(obj => obj._id === URL[4]);
        setBook(obj)
    }, []);


    return (
        <div className="main">
            <div className="book_manipulation">
                <Link to='/form'>Editar livro</Link>
                <Link to="/form">Excluir Livro</Link>
                <Link to='/'> Home </Link>
            </div>

            <div className="header_title">
                <h1>{book.title}</h1>
            </div>

            <div className="book_detail">
                <div className="image">
                    <img src={Livro2} alt="Livro 2"/><br />
                </div>
                <h3><strong>Autor:</strong>  {book.autor}</h3>
                <p>{book.description}</p>
                
                <div className="info_livro">
                    <span><strong>Data de Criação:</strong> {book.date} </span>
                    <div className="categoria">
                        <h4>{book.category}</h4>
                        <a href="/">Editar</a>
                    </div>
                </div>
            </div>
            

            <div className="comment_box">
                <h2>Comentários sobre o LIvro</h2>
                <div className="comments">
                    <div className="comment">
                        <p>Comentário 1<br></br></p>
                        <div className="comment_manipulation">
                            <a href="/">Editar</a>
                            <a href="/">Excluir</a>
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


