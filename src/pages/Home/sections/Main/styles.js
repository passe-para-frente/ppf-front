import styled from 'styled-components';

export const Container = styled.section`
  position: relative;

  > img {
    width: 100%;
    margin-top: 70px;
  }

  .cover {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 4px;
    left: 0;
    background: rgba(2, 2, 2, 0.2);
  }
`;

export const Content = styled.div`
  position: absolute;
  width: 80%;
  top: 80px;
  left: 0;
  right: 0;
  margin-right: auto;
  margin-left: auto;

  > img {
    width: 50%;
  }

  div {
    position: absolute;
    width: 500px;
    right: 0;
    color: WHEAT;
    line-height: 1.5;
    font-size: 16px;

    button {
      border: 3px solid #8bc541;
      padding: 10px 25px;
      background: 0;
      color: #f2f2f2;
      font-weight: 900;
      margin-top: 10px;
    }
  }
`;
