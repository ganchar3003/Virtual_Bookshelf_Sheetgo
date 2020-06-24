import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import nextId from 'react-id-generator';
import Livro1 from '../../assets/33e2c35c592263072b975c8589f1c4b4.jpg';


export default function Main () {
    const [data_stored, setData_stored] = useState([]);

    useEffect(() => {
        const timestamp = new Date();
        const _id = nextId('page1-');
        const first_book = [{
            title: 'Primeiros passos com React: Construindo aplicações web',
            autor: 'Stoyan Stefanov',
            description: 'Saia trabalhando de imediato com React: a tecnologia de código aberto do Facebook para construir rapidamente aplicações web sofisticadas. Com este guia prático, o desenvolvedor web Stoyan Stefanov ensina você a construir componentes',
            date: timestamp,
            _id,
            category: 'Quero Ler',
            //image
        }]

        const array_category = ['Sem Categoria', 'Lendo', 'Quero Ler', 'Lido'];
        localStorage.setItem('listacategoria', JSON.stringify(array_category));
        
        let data_stored = JSON.parse(localStorage.getItem('listadoslivros'));

        if (data_stored === null) {
            localStorage.setItem('listadoslivros', JSON.stringify(first_book));
        }
    }, []);
    
    useEffect(() => {
        setData_stored(JSON.parse(localStorage.getItem('listadoslivros')));
    }, []);
    
    /*
    function handleNavigateToDetail(_id) {
        
    }
    */

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
