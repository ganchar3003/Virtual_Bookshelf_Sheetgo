import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Livro1 from '../../assets/33e2c35c592263072b975c8589f1c4b4.jpg';
import Modal from '../../components/Modal';

export default function Book() {

    // -----  Variaveis --------------------------------

    const [book, setBook] = useState({});
    const [comment, setComment] = useState('');
    const [updatedComment, setUpdatedComment] = useState('');
    const [book_comments, setBookComments] = useState([]);
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [modalCommentIsVisible, setModalCommentIsVisible] = useState(false);


    // --------- Gerenciadores de Inicialização -----------------------

    useEffect(() => {
        let URL = document.URL;
        URL = URL.split('/');
        let URLreduzida = URL[4].split('?');
        const find_book = JSON.parse(localStorage.getItem('listadoslivros'));
        const obj = find_book.find(obj => obj._id === URLreduzida[0]);
        setBook(obj)
    }, []);

    useEffect(() => {
        let URL = document.URL;
        URL = URL.split('/');
        let URLreduzida = URL[4].split('?');
        const find_book = JSON.parse(localStorage.getItem('listadoslivros'));
        const obj = find_book.find(obj => obj._id === URLreduzida[0]);
        if (obj._id === undefined) {
            return
        }
        let comments = JSON.parse(localStorage.getItem('listaComentarios'));
        let filtered_comments = comments.filter(array_comments => array_comments.book_id === obj._id);
        setBookComments(filtered_comments);
    }, []);

    // --------- Funções de MAnipulação ---------------------------

    function handleDeleteBook(id) {
        let find_book = JSON.parse(localStorage.getItem('listadoslivros'))

        for (let i = 0; i < find_book.length; i++) {
            if (find_book[i]._id === id) {
                find_book.splice(i, 1)
                break;
            }
        }
        localStorage.setItem('listadoslivros', JSON.stringify(find_book));
    }

    function handleCommentSubmit(e) {
        e.preventDefault();
        const obj_comment = {
            book_id: book._id,
            id_comment: String(Math.random()),
            comment,
        }
        let array_comments = JSON.parse(localStorage.getItem('listaComentarios'));
        if (array_comments === null) {
            array_comments = [obj_comment];
        } else {
            array_comments.push(obj_comment);
        }
        localStorage.setItem('listaComentarios', JSON.stringify(array_comments));
        window.location.reload()
    }

    function handleDeleteComment(id) {
        let array_comments = JSON.parse(localStorage.getItem('listaComentarios'));
        for (let i = 0; i < array_comments.length; i++) {
            if (array_comments[i].id_comment === id) {
                array_comments.splice(i, 1);
                break;
            }
        }
        localStorage.setItem('listaComentarios', JSON.stringify(array_comments));
        window.location.reload()
    }

    function handleCommentUpdate (id) {
        let array_comments = JSON.parse(localStorage.getItem('listaComentarios'));
        //console.log(id);
        //console.log(array_comments);
        const index = array_comments.findIndex(obj => obj.id_comment === id);
        //console.log(index);
        //array_comments[index].comment = updatedComment;
        //console.log(array_comments);
        //localStorage.setItem('listaComentarios', JSON.stringify(array_comments));
    }

    function setOpenModalComment () {
        setModalCommentIsVisible(true);
    }

    function handleCloseModalComment() {
        setModalCommentIsVisible(false);
    }

    // --------- Retorno JSX ---------------------------

    return (
        <div className="main">
            <div className="book_manipulation">
                <Link onClick={() => handleDeleteBook(book._id)} to={'/'}>Excluir Livro</Link>
                <Link to='/'> Home </Link>
            </div>

            <div className="header_title">
                <h1>{book.title}</h1>
            </div>

            <div className="book_detail">
                <div className="image">
                    <img src={Livro1} alt="Livro 2" /><br />
                </div>
                <h3><strong>Autor:</strong>  {book.autor}</h3>
                <p>{book.description}</p>

                <div className="info_livro">
                    <span><strong>Data de Criação:</strong> {book.date} </span>
                    <div className="categoria">
                        <h4>{book.category}</h4>
                        <button onClick={() => setModalIsVisible(true)}>Editar Livro</button>
                        {modalIsVisible ? <Modal onClose={() => setModalIsVisible(false)}>{book._id}</Modal> : null}
                    </div>
                </div>
            </div>

            <div className="comment_box">
                <h2>Comentários sobre o LIvro</h2>
                <div className="comments">
                    {book_comments.map(book_comment => (
                        <div key={book_comment.id_comment} className="comment">
                            <p>
                                {book_comment.comment}
                            </p>

                            <div className="comment_manipulation">
                                <button onClick={() => setOpenModalComment()}>Editar</button>
                                {modalCommentIsVisible ?
                                <div className="fundo">
                                    <div className="containerComment" >
                                        <form onSubmit={handleCommentUpdate(book_comment.id_comment)}>
                                            <input
                                                
                                                value={updatedComment}
                                                onChange={e => setUpdatedComment(e.target.value)}
                                                placeholder="Adicione um comentário"
                                            />
                                            <button type="submit">Enviar</button>
                                        </form>
                                        <button onClick={() => handleCloseModalComment()}>Voltar</button>
                                    </div>
                                </div> :
                                    null
                                }

                                <button onClick={() => handleDeleteComment(book_comment.id_comment)}>Excluir</button>
                            </div>
                        </div>
                    ))}
                </div>

                <form id="input_box" onSubmit={handleCommentSubmit}>
                    <input
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        placeholder="Adicione um comentário"
                    />
                    <button type="submit">Enviar</button>
                </form>
            </div>

        </div>
    );
}


