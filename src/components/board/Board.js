import styled from 'styled-components'



export const BoardContainer = styled.div`
    width:100%; 
    height: 100vh;
    
`
export const ContainerImage = styled.img`
    width:100%;
    min-height: 100vh;
    position: absolute;
    z-index:-1;    
    top: 0;
`

export const BoardTitle = styled.h1`
    color: #0f172a;
    font-weight: 900;
    margin: 10px 20px;
    text-align: center;
`
export const BoardWrapper = styled.div`
    display:flex;
    justify-content: space-around;

`
// Categories
export const CategoryTitle = styled.h2`
    color: #0f172a;
    text-align: center;
    margin: 10px 0px;
`

export const BoardCategory = styled.div`
    display:flex;
    flex-direction: column;
    align-content: center;
    min-width: 28%; 
    background: rgba( 255, 255, 255, 0.10 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.1 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`
//Input form
export const InputLine = styled.input`
    width: 300px;
    height: 30px;
    background-color: white;
    margin: 10px 20px 20px 45px;
    font-size: 20px;
    outline: none;
    border:none;
`
export const AddButton = styled.button`
    color: blue;
    height: 30px;
    margin: 10px -10px;
    font-size: 20px;
    padding:0px 20px;
    background-color: rgba( 30, 41, 59, 1 );
    color: #f3f3f3;
    &:active{
        background-color: rgba( 30, 41, 59, 0.5 );
    }
`