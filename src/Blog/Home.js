import React from 'react'
import * as S from "./Style"
import Github from '../img/social/Githublogo.png'
import Calc from '../img/calc.png'
import Portflow from '../img/portflow.png'
import '../App.css'

export default function Home(){
  return (
    <><S.GlobalStyle/>
      <S.Title>
        <S.Name1>Willian</S.Name1>
        <S.Logo>
          <a target='_blank' rel='noreferrer' href='https://github.com/willanv'>
        <img src={Github} alt='logo do Github'></img>
          </a>
        <S.Name2>Velasco</S.Name2>
        </S.Logo>
      </S.Title>
      <S.Sub>
        <p>Web Delevoper</p>
      </S.Sub>

      <S.Port>
        <h2>Meu Projetos</h2>
        <S.MyP>
        <a target='_blank' rel='noreferrer' href='https://portflownv.netlify.app'>
        <img src={Calc} alt='Pagina Calc'/>
        </a>
        <a target='_blank' rel='noreferrer' href='https://calcwnv.netlify.app'>
        <img src={Portflow} alt='Pagina Portflow'/>
        </a>
        </S.MyP>
      </S.Port>
        <S.Tport>
          <h3>Calculadora</h3>
          <h3>Portflow</h3>
        </S.Tport>
    </>
  );
}
