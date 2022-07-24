import styled, {createGlobalStyle} from "styled-components";
import Wallpaper from "../img/wallpaper2.png"
import Centro from '../img/Desenvolvimento/CentroComercial.png'
import Lazer from '../img/Desenvolvimento/Lazer.png'
import Projetos from '../img/Desenvolvimento/ProjetosSociais.png'
import Segurança from '../img/Desenvolvimento/SegurancaPublica.png'
export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: url(${Wallpaper});
    }
`
//HEADER///////////////////////////////////////////////////////////////////
export const List = styled.ul`
    display: flex;
    justify-content: space-evenly;
    height: 3vh;
    width: 50%;
    list-style: none;
    li{
        color: #f7f7ff;
        padding: 0 1vw 0 1vw;
        :hover{
            color: white;
            font-size: larger;
            font-weight: bold;
            border: 1px solid white;
        }
    }
    @media(max-width: 768px){
        width: 100%;
    }
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    height: 5vh;
`

//HOME///////////////////////////////////////////////////////////////////////
export const Name1 = styled.h1`
   font-size: 15vh;
   color: #023e8a;
`
export const Name2 = styled.h1`
   font-size: 15vh;
   margin: 0 0 0 15%;
   color: #023e8a;
`
export const Title = styled.div`   
    margin: 15vh 0 0 10vw;
`
export const Sub = styled.div`
    width: 20vw;
    display: flex;
    justify-content: space-between;
    margin: 0 0 0 25vw;
    p{
        font-size: 2.5vh;
        color: #023e8a;
        text-decoration: overline;
    }
`
export const Logo = styled.div`
    display: flex;
    align-items: center;
    h1{
        margin: 0 10vh 0 0;
    }
    img{
        border-radius: 100vh;
        height: 7vh;
    }
`
export const MyP = styled.div`
    display: flex;
    justify-content: space-evenly;
`
export const Port = styled.div`
    margin: 10% 0 0 0;
    height: 30vh;
    color: #023e8a;
    justify-content: space-evenly;
    img{
        height: 28vh;
        :hover{
            border: 2px solid white;
        }
    }
    h2{
        display: flex;
        justify-content: center;
        margin: 0 0 3vh 0;
    }
`
export const Tport = styled.div`
    margin: 5vh 0 10% 0;
    display: flex;
    justify-content: space-around;
    width: 100%;
    color: #023e8a;
`
//WORK//////////////////////////////////////////////////////////////////////////
export const Card = styled.div`
:hover{
    box-shadow: 5px 5px 5px #72ddf7;
    color: white;
}
box-shadow: 5px 5px 10px black;
    background: url(${Centro});
    width: 10vw;
    height: 20vh;
    margin: 0 2vw 0 10%;
    border: solid;
    border-radius: 1vh;
`
export const Card2 = styled.div`
:hover{
    box-shadow: 5px 5px 5px #72ddf7;
}
box-shadow: 5px 5px 10px black;
    background: url(${Lazer});
    width: 10vw;
    height: 20vh;
    margin: 0 2vw 0 10%;
    border: solid;
    border-radius: 1vh;
`
export const Card4 = styled.div`
:hover{
    box-shadow: 5px 5px 5px #72ddf7;
}
box-shadow: 5px 5px 10px black;
    background: url(${Segurança});
    width: 10vw;
    height: 20vh;
    margin: 0 2vw 0 10%;
    border: solid;
    border-radius: 1vh;
`
export const Card3 = styled.div`
:hover{
    box-shadow: 5px 5px 5px #72ddf7;
}
box-shadow: 5px 5px 10px black;
    background: url(${Projetos});
    width: 10vw;
    height: 20vh;
    margin: 0 2vw 0 10%;
    border: solid;
    border-radius: 1vh;
`
export const Container = styled.div`
    h3{
        color: #03045e;
    }
    h1{
        color: #023e8a;
        margin: 0 0 6vh 0;
    }
    width: 60%;
    margin: 1vw 30vw 0 15vw;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
`
export const Direita = styled.div`
    display: flex;
    align-items: center;
    :hover{
        color: white;
        cursor: pointer;
    }
    h3{
        :hover{
            color: white;
        }
    }
    @media(max-width: 768px){
        margin: 0;
}
`
export const Esquerda = styled.div`
    display: flex;
    align-items: center;
    margin: 0 0 0 45%;
    :hover{
        color: white;
        cursor: pointer;
    }
    h3{
        :hover{
            color: white;
        }
    }
    @media(max-width: 768px){
        margin: 0;
        text-align:end;
}
`
//About//////////////////////////////////////////////////////////////////////
export const Aboutp = styled.div`
    @media(max-width: 768px){
        width: none;
        margin: 5% 0 0 30%;
        justify-content: center;
    }
    color: #023e8a;
    width: 40%;
    margin: 5% 10vw 0 15%;
    p{
        font-weight: bold;
        padding: 2vh 0 2vh 0;
        margin: 2vh 0 0 0;
        display: flex;
        box-shadow: 10px 5px 10px #03045e;
        border-radius: 0.3vw;

    }
    
`