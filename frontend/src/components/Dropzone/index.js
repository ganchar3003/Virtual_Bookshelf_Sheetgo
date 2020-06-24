import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import './styles.css';

function Dropzone() {
const onDrop = useCallback(acceptedFiles => {

    console.log(acceptedFiles);//Faça Alguma coisa com o arquivo
    localStorage.setItem('image', acceptedFiles);

}, [])
const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

return (
<div className="dropzone" {...getRootProps()}>
    <input {...getInputProps()} />
    {
    isDragActive ?
            <p> Solte seu arquivo aqui ...</p>
        :
            <p> Arraste e Solte seu arquivo aqui, ou clique para selecioná-lo</p>   
    }
</div>
)
}
export default Dropzone;