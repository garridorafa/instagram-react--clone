import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`

  display: flex;
  justify-items: center;
  align-items: center;
  margin: 0 10px 10px 10px;
  padding: 16px;
  border: solid 1.5px lightgrey;
  border-radius: 22px;
  /*
  background-color: #efefef;
  align-self: flex-start;
  */

  ${props => {
    if (props.type === 'own') {
      return (
        `background-color: #efefef;
         align-self: flex-start;`
      )
    } else {
      return 'align-self: flex-end;'
    }
  }}

`


const DirectMessage = (props) => {
  const [ text, type] = props;
  return (
    <StyledDiv type={type} >
      {text}
    </StyledDiv>
  )
}

export default DirectMessage;