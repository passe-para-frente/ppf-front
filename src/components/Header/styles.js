import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  z-index: 1;
  width: 100%;
  background-color: #1e76ba;

  nav {
    width: 1020px;
    height: 70px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 150px;
    }

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;

      li:not(:last-child) {
        margin-right: 10px;
      }

      li a {
        text-decoration: none;
        font-size: 16px;
        color: #ffffff;
        padding: 10px 15px;
        border-radius: 20px;
        transition: background 0.2s;

        &:hover {
          background: rgba(0, 0, 0, 0.1);
        }
      }

      img {
        width: 130px;
        cursor: pointer;
      }
    }
  }
`;
