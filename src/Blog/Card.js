import React, {useState} from "react";
import * as S from "./Style"


export default function Card({children}){

    const [modal, setModal] = useState(false)

    return(
        <>
            <S.Div>
                <S.Card onClick={()=>{setModal(prevState => !prevState )}}></S.Card>
                <S.Details>
                    {modal && <>{children}</>}
                </S.Details>
               
            </S.Div>
        </>
    )
}