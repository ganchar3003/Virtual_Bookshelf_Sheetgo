import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Livro1 from '../../assets/33e2c35c592263072b975c8589f1c4b4.jpg';


export default function Main () {

    // -----  Variaveis --------------------------------

    const [data_stored, setData_stored] = useState([]);


    // --------- Gerenciadores de Inicialização -----------------------

    useEffect(() => {
        const timestamp = new Date();
        const first_book = [{
            title: 'Primeiros passos com React: Construindo aplicações web',
            autor: 'Stoyan Stefanov',
            description: 'Saia trabalhando de imediato com React: a tecnologia de código aberto do Facebook para construir rapidamente aplicações web sofisticadas. Com este guia prático, o desenvolvedor web Stoyan Stefanov ensina você a construir componentes',
            date: timestamp,
            _id: String(Math.random()),
            category: 'Quero_Ler',
            //image
        }]

        let data_stored = JSON.parse(localStorage.getItem('listadoslivros'));
        if (data_stored === null) {
            localStorage.setItem('listadoslivros', JSON.stringify(first_book));
        }
    }, []);
    
    useEffect(() => {
        setData_stored(JSON.parse(localStorage.getItem('listadoslivros')));
    }, []);
    
    useEffect(() => {
        const array_category = ['Sem Categoria', 'Lendo', 'Quero Ler', 'Lido'];
        localStorage.setItem('listacategoria', JSON.stringify(array_category));
    }, []);
    
    useEffect(() => {
        let comments = JSON.parse(localStorage.getItem('listaComentarios'));
        if (comments) {
            return
        }
        const obj_comment = [{
            book_id: String(Math.random()),
            id_comment: String(Math.random()),
            comment: 'Qualqer coisa',
        }]
        localStorage.setItem('listaComentarios', JSON.stringify(obj_comment));
    }, []);

    // --------- Funções de MAnipulação ---------------------------
    /*
    function handleRankBook () {
        //pega o array de books da categoria, faz um sort seguindo a classificação desejada, seta o datastored e recarrega a página
    }
    */
    // --------- Retorno JSX ---------------------------

    return (
        <div id="main">
            <div className="link_category">
                <Link to='category/Sem_Categoria'> Sem Categoria </Link>                
                <Link to='category/Lendo'> Lendo </Link>                
                <Link to='category/Lido'> Lido </Link>                
                <Link to='category/Quero_Ler'> Quero Ler </Link>     

                <div className="button_filter">
                <Link to="/">Classificar</Link>
                </div>
            </div>


            <div className="footer">
                <Link to='/form'> Novo Livro </Link>
            </div>

            <div className="category">
                <ul className="total_list">
                    {data_stored.map(data_stored => (
                        <li key={data_stored._id} className="list_item">
                            <div className="image_book">
                                <img src={Livro1} alt="Livro 1"/><br />
                            </div>
                            <h2>{data_stored.title}</h2>
                            <div className="autor">
                                <span>{data_stored.autor}</span>
                            </div>
                            <p>{data_stored.description}</p>
                            <div className="category_field">
                                <strong>Categoria Selecionada:</strong>
                                <h5>{data_stored.category}</h5>
                            </div>
                            <div className="link_detail">
                                <Link to={`book/${data_stored._id}`}> Detalhes </Link>
                            </div>
                        </li>
                    ))} 
                </ul>
            </div>

        </div>
    );
    }
