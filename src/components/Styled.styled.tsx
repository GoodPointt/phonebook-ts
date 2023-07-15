import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  gap: 30px;
`;

export const ErrorMsg = styled.p`
  font-style: italic;
  color: red;
  font-size: 10px;
`;

export const StyledInput = styled.input`
  display: block;
  margin: 0 auto;
  font-size: 20px;
  background-color: #212121;
  color: #ffffff;

  max-width: 100%;
  height: 40px;
  padding: 10px;
  border: 2px solid white;
  border-radius: 5px;

  &:focus {
    color: rgb(0, 255, 255);
    background-color: #212121;
    outline-color: rgb(0, 255, 255);
    box-shadow: -3px -3px 15px rgb(0, 255, 255);
    transition: 0.1s;
    transition-property: box-shadow;
  }
`;

export const StyledBtn = styled.button`
  cursor: pointer;
  width: 10em;
  position: relative;
  height: 3.5em;
  border: 3px ridge white;
  outline: none;
  background-color: transparent;
  color: white;
  transition: 1s;
  border-radius: 0.3em;
  font-size: 16px;
  font-weight: bold;

  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: 3%;
    width: 95%;
    height: 40%;
    background-color: #252525;
    transition: 0.5s;
    transform-origin: center;
  }

  &::before {
    content: '';
    transform-origin: center;
    position: absolute;
    top: 80%;
    left: 3%;
    width: 95%;
    height: 40%;
    background-color: #252525;
    transition: 0.5s;
  }

  &:hover::before,
  :hover::after,
  :active::before,
  :active::after {
    transform: scale(0);
    color: rgb(0, 255, 255);
  }

  &:hover,
  :active,
  :focus {
    box-shadow: inset 0px 0px 25px rgb(0, 255, 255);
    color: rgb(0, 255, 255);
  }
`;

export const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const StyledItemBtn = styled(StyledBtn)`
  margin-left: 50px;
  width: 3em;
  height: 2em;
  &:hover,
  :active,
  :focus {
    box-shadow: inset 0px 0px 25px rgb(97, 1, 1);
    color: rgb(255, 0, 0);
  }
`;
export const StyledText = styled.p`
  font-size: 25px;
  color: #fff;
`;

export const StyledList = styled.ul`
  padding: 0;
  display: flex;
  gap: 15px;

  flex-direction: column;
  margin: 20px auto;
  width: fit-content;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 300px;
  max-width: 600px;
  width: 100%;
  padding: 20px;
  background-color: #212121;
  border-radius: 10px;
  box-shadow: 0px 0px 29px #d4d4d4, 0px 0px 0px 0px #000,
    0px 0px 0px 0px #252525;
`;
