import styled from 'styled-components'


export const ButtonContainer = styled.button`
 text-transform: capitalize;
 font-size: 1.4rem;
 background: transparent;
 border: 0.05rem solid var(--lightBlue);
 border-color: ${props => (props.cart ? 'var(--mainYellow)' : 'var(--mainBlue)')};
 padding-bottom: 5.5px;
 padding-right: 0.5rem;
 padding-left: 0.5rem;
 color:${prop => prop.cart ? 'var(--mainYellow)' : 'var(--mainBlue)'};
 border-radius: 0.5rem;
 cursor: pointer;
 margin: 0.2rem 0.5rem 0.2rem 0;
 transition: all 0.3s ease-in-out;
 &:hover{
   background: ${prop => prop.cart ? 'var(--mainYellow)' : 'var(--mainBlue)'};
   color:${prop => prop.cart ? 'var(--mainBlue)' : 'var(--mainYellow)'};
 }
 &:focus{
     outline:none;
 }
`;