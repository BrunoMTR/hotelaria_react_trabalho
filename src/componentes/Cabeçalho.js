import React from 'react'
import logo from '../imagens/logo.png'
import lupa from '../imagens/lupa.jpg'
import '../style.css'


function Cabeçalho({buscarLocalizacao}){
    return(
        <div className={'cabeçalho'}>
            <img src={logo} alt={'logo'} id={'logo'}/>
           <div className={'input-botao'}>
               <input placeholder={'localizações'} id={'input'}/>
               <button id={'botao'} onClick={()=>buscarLocalizacao(document.getElementById('input').value)}><img src={lupa} width='17.5px' height='17.5px'/></button>
           </div>
        </div>
    )
}

function buscar(entrada){
    console.log(entrada);
}

export default Cabeçalho;