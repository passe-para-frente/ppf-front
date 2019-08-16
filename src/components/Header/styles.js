import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  background-color: #1e76ba;

  nav {
    width: 1020px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;

      li::nth-last-of-type() {
        background: red;
      }

      li a {
        text-decoration: none;
      }
    }
  }
`;
