import React from 'react'
import estrelinha from '../imagens/estrelinha.jpg'

function Cartao({imagem,tipo,titulo,pontuacao}){
    return(
        <div className={'cartao'}>
            <img src={imagem} alt={'imagem'} className={'apartamento-imagem'}/>
            <div className={'estrelinha-pontuacao-titulo'}>
                <small className={'tipo-cartao'}>{tipo}</small>
                <div className={'estrelinha-pontuacao'}>
                    <img src={estrelinha} alt={'estrelinha'} className={'estrelinha'}/>
                    <p className={'pontuacao-cartao'}>{pontuacao}</p>
                </div>

            </div>
            <p className={'titulo-cartao'}>{titulo}</p>
        </div>

    )
}
export default Cartao;