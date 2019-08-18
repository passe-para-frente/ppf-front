import styled from 'styled-components';

export const Container = styled.section`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:800&display=swap');

  width: 1080px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > div {
    max-width: 800px;
    text-align: center;
    padding-bottom: 20px;
    margin: 0 auto;
    border-bottom: dotted #c9c9c9;
    margin-bottom: 50px;

    h1 {
      font-family: 'Montserrat', sans-serif;
      color: #1e76ba;
      text-transform: uppercase;
      font-size: 45px;
      padding-bottom: 20px;
    }

    p {
      color: #494949;
      line-height: 1.5;
      font-size: 18px;
    }

    h3 {
      color: #494949;
      margin: 25px 0 15px 0;
    }
  }
`;

export const AboutDetails = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  li {
    text-transform: uppercase;
    text-align: center;
  }

  li span {
    display: block;
    text-align: center;
  }
`;
