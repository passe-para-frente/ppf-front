import styled from 'styled-components';

export const Container = styled.section`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,800&display=swap');

  position: relative;

  > img {
    width: 100%;
  }
`;

export const DetailsInfo = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  color: #fff;

  width: 70%;

  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  text-align: center;

  div {
    min-height: 300px;
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  div:first-child {
    border-right: dotted #c9c9c9;
  }

  h4 {
    font-size: 36px;
    font-weight: 800;
    /* line-height: 2; */
  }

  p {
    font-size: 18px;
    font-weight: 600;
  }

  div > span {
    font-size: 16px;
    font-weight: 400;
    margin: 10px 0;
  }

  figure {
    display: flex;
    justify-content: space-around;
    padding: 40px 0;
  }

  button {
    border: 2px solid #8bc541;
    background: none;
    padding: 10px 15px;
    color: #fff;
    width: 200px;
    margin: 0 auto;
  }
`;
