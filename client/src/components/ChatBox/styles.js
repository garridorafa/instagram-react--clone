import styled from "styled-components";

const borderStyle = '1.5px solid lightgray';

export const Container = styled.div`
  display: flex;
  justify-content: stretch;
  width: 970px;
  height: 80vh;
  border-radius: 3px;
  border: ${borderStyle};
  background-color: white;
`

export const ChatList = styled.div`
  min-width: 300px;
  border-right: ${borderStyle};
`

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.5rem;
  border-bottom: ${borderStyle};
  height: 70px;
`

export const ChatSelectArea = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChatButton = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0 0 12px;
  img {
    height: 62px;
    width: 62px;
  }
`

export const MessageArea = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column-reverse;
  overflow: auto;
  width: 670px;
`

export const Message = styled.div`
  align-items: center;
  border-radius: 22px;
  border: solid 1.5px lightgrey;
  display: flex;
  justify-items: center;
  margin: 0 70px 10px 30px;
  max-width: 220px;
  padding: 16px;

  ${props => {
    const declaration = props.type === "ownMessages" ?
      'background-color: #efefef;' :
      'align-self: flex-start;'
    return declaration
  }}
`