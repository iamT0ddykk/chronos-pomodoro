import { Container } from '../../components/Container'
import { Logo } from '../../components/Logo'
import { Foot } from '../../components/Foot'
import { Butao } from '../../components/Butao'
import type React from 'react'

type MainTemplateProps = {
    children: React.ReactNode
}


export function MainTemplate({children} : MainTemplateProps){
    return (
        <>
            <Container>
                <Logo></Logo>
            </Container>
            <Butao></Butao>
            {children}
            <Foot> 
             </Foot>
        
        </>
    )} 