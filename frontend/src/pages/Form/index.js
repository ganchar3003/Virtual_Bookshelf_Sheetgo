import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Home } from 'react-feather';
import './styles.css';
import Dropzone from '../../components/Dropzone';


export default function Form () {
    const [title, setTitle] = useState('');
    const [autor, setAutor] = useState('');
    const [description, setDescription] = useState('');
    //const [selectedImage, setSelectedImage] = useState('');
    const history = useHistory();
    
    function handleSubmit(e){
        e.preventDefault();
        const timestamp = new Date();
        let formatted_date = timestamp.getDate() + "-" + timestamp.getMonth() + "-" + timestamp.getFullYear()
        const _id = String(Math.random());
        const category = document.querySelector('input[type=radio]:checked').value;
        
        const book_info = {
            title,
            autor,
            description,
            date: formatted_date,
            _id,
            category,
            //image
        }
        let data_stored = JSON.parse(localStorage.getItem('listadoslivros'));
        
        if (data_stored === null) {
            data_stored = [book_info];
        } else{
            data_stored.push(book_info);
        }

        localStorage.setItem('listadoslivros', JSON.stringify(data_stored));
        history.push('/');
    }

    return ( 

        <div className="main">
            <div className="header_form">
                <h1>Cadastro de Livro</h1>
                <p>Preencha os Dados para inclusão do livro na estante virtual</p>
            </div>

            <form className="input_form" onSubmit={handleSubmit}> 
                <fieldset>
                    <legend>
                        Imagem da Capa do Livro
                    </legend>
                    <Dropzone /*onFileUpLoaded={setSelectedImage}*/ />

                </fieldset>

                <fieldset>
                    <legend>
                        Dados do Livro
                    </legend>

                    <div className="input_field">
                        <input
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Título do Livro"
                        />
                    </div>

                    <div className="input_field">
                        <input 
                        value={autor}
                        onChange={e => setAutor(e.target.value)}
                        placeholder="Autor"
                        />
                    </div>

                    <div className="input_field">
                        <input 
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder="Descrição"
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
                                type="radio"
                                name="Categoria" 
                                id="no_category" 
                                value="Sem_Categoria"
                                />
                            <label htmlFor="no_category" >Sem Categoria</label>
                        </div>
                        <div className="checkbox">
                            <input 
                                type="radio"
                                name="Categoria" 
                                id="Reading" 
                                value="Lendo"
                                />
                            <label htmlFor="Reading" >Lendo</label>
                        </div>
                        <div className="checkbox">
                            <input 
                                type="radio"
                                name="Categoria" 
                                id="Wants to Read"
                                value="Quero_Ler" 
                                />
                            <label htmlFor="Wants to Read" >Quero Ler</label>
                        </div>
                        <div className="checkbox">
                            <input 
                                type="radio"
                                name="Categoria" 
                                id="Readed" 
                                value="Lido"
                                />
                            <label htmlFor="Readed" >Lido</label>
                        </div>
                    </div>
                </fieldset>
                <div className="submit_controls">
                    <Link to='/'><Home />  Voltar a Home </Link>
                    <button type="submit"> Criar </button>
                </div>
            </form>
        </div>
    );
}