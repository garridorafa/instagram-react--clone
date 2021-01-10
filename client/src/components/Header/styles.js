import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1;
  height: 53px;
  background-color: white;
  border-bottom: 1.5px solid lightgray;
  
  .logoName, .icon {
    text-decoration: none;
    color: black;
    font-size: .8rem;

    :active {
      color: black;
    }

    :visited {
    color:black;
    }
  }
 
  .search {
    background-color: #fafafa;
    border: 1.5px solid lightgray;
    height: 29px;
    border-radius: 3px;
  }

  .icons {
    display: flex;
    width: 250px;
    justify-content: space-evenly;
    align-items: center;
  }

  @media only screen and (max-width: 500px){
    .search {
      display: none;
    }
  }
`