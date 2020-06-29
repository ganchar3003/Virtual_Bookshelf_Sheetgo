import React, { useEffect, useState } from 'react';
import '../Modal/styles.css';

const Modal = ({id = "modal", onClose = () => {}, children }) => {

    // -----  Variaveis --------------------------------

    const [book, setBook] = useState({});

    const [title, setTitle] = useState('');
    const [autor, setAutor] = useState('');
    const [description, setDescription] = useState('');
    

    // --------- Gerenciadores de Inicialização -----------------------

    
    useEffect(() => {
        const find_book = JSON.parse(localStorage.getItem('listadoslivros'));
        const obj = find_book.find(obj => obj._id === children);
        setBook(obj)
    }, [children]);
    
    
    // --------- Funções de MAnipulação ---------------------------
    
    const handleOutsideClick = (e) => {
        if (e.target.id === id) {
            onClose();
        }
    };
    
    function handleUpdateSubmit () {
        const array_book = JSON.parse(localStorage.getItem('listadoslivros'));
        const index = array_book.findIndex(obj => obj._id === children);
        array_book[index].title = title;
        array_book[index].autor = autor;
        array_book[index].description = description;
        array_book[index].category = document.querySelector('input[type=radio]:checked').value;
        localStorage.setItem('listadoslivros', JSON.stringify(array_book));
    }


    // --------- Retorno JSX ---------------------------

    return (
        <div id={id} className="modal" onClick={handleOutsideClick} >
            <div className="container" >
                <form id="modal_input_form" onSubmit={() => handleUpdateSubmit()}> 
                    <fieldset>
                        <legend>
                            Dados do Livro
                        </legend>

                        <div className="modal_input_field">
                            <input
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            placeholder={book.title}
                            />
                        </div>

                        <div className="modal_input_field">
                            <input 
                            value={autor}
                            onChange={e => setAutor(e.target.value)}
                            placeholder={book.autor}
                            />
                        </div>

                        <div className="modal_input_field">
                            <input 
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            placeholder={book.description}
                            />
                        </div>
                        
                    </fieldset>

                    <fieldset>
                        <legend>
                            Escolha uma Opção de Leitura
                        </legend>
                        <div className="modal_checkbox_main">
                            <div className="modal_checkbox">
                                <input 
                                    type="radio"
                                    name="Categoria" 
                                    id="no_category" 
                                    value="Sem_Categoria"
                                    />
                                <label htmlFor="no_category" >Sem Categoria</label>
                            </div>
                            <div className="modal_checkbox">
                                <input 
                                    type="radio"
                                    name="Categoria" 
                                    id="Reading" 
                                    value="Lendo"
                                    />
                                <label htmlFor="Reading" >Lendo</label>
                            </div>
                            <div className="modal_checkbox">
                                <input 
                                    type="radio"
                                    name="Categoria" 
                                    id="Wants to Read"
                                    value="Quero_Ler" 
                                    />
                                <label htmlFor="Wants to Read" >Quero Ler</label>
                            </div>
                            <div className="modal_checkbox">
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
                    <div className="modal_submit_controls">
                        <button onClick={onClose}> Voltar </button>
                        <button type="submit"> Atualizar </button>
                        
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Modal;