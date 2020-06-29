import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Livro1 from '../../assets/33e2c35c592263072b975c8589f1c4b4.jpg';
import { Home } from 'react-feather';


export default function Category (){

    // -----  Variaveis --------------------------------

    const [data_stored, setData_stored] = useState([]);


    // --------- Gerenciadores de Inicialização -----------------------

    useEffect(() => {
        let URL = document.URL;
        URL = URL.split('/');
        let find_book = JSON.parse(localStorage.getItem('listadoslivros'));
        let obj = find_book.filter(obj => obj.category === URL[4]);
        setData_stored(obj)
    }, []);
    


    // --------- Funções de MAnipulação ---------------------------

    function handleChangeCategory (children) {
        window.location.href = `http://localhost:3000/category/${children}`;
    }
    
    function handleBookDetail (children) {
        window.location.href = `http://localhost:3000/book/${children}`;
    }

    function handleRankBook () {
        //pega o array de books da categoria, faz um sort seguindo a classificação desejada, seta o datastored e recarrega a página
    }

// --------- Retorno JSX ---------------------------

    return (
        <div id="main">
            <div className="link_category">
                <button onClick={() => handleChangeCategory('Sem_Categoria')}> Sem Categoria </button>                
                <button onClick={() => handleChangeCategory('Lendo')}> Lendo </button>                
                <button onClick={() => handleChangeCategory('Lido')}> Lido </button>                
                <button onClick={() => handleChangeCategory('Quero_Ler')}> Quero Ler </button>     
                <div className="button_filter">
                    <button onClick={() => handleRankBook()} >Classificar</button>
                </div>
            </div>

            <div id="navigation">
                <div className="home_button">
                    <Link to="/">
                        <Home size="20px" />
                        Voltar a Home
                    </Link>
                </div>

                <div className="new_book">
                    <Link to='/form'> Novo Livro </Link>
                </div>
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
                                <button onClick={() => handleBookDetail(data_stored._id)} > Detalhes </button>
                            </div>
                        </li>

                    ))}
                </ul>
            </div>

        </div>
    );
}
