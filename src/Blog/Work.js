import React from 'react'
import * as S from "./Style"

export default function Work(){  
  return (
    <><S.GlobalStyle/>
        <S.Container>
        <h1>Os objetivos de Desenvolvimento Sustentável na Praça Seca</h1>
          <S.Direita>
            <S.Card/>
            <h3>Aumentar os centro comerciais</h3>
          </S.Direita>
          <S.Esquerda>
          <h3>Mais áreas de lazer e diversão</h3>
          <S.Card2/>
          </S.Esquerda>
          <S.Direita>
          <S.Card3/>
          <h3>Ter mais projetos sociais para ajudar as crianças das comunidades retirando-as da rua</h3>
          </S.Direita>
          <S.Esquerda>
          <h3>Aumentar a segurança pública</h3>
          <S.Card4/>
          </S.Esquerda>
        </S.Container>
    </>
  );
}