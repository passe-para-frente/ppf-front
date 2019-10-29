import styled from 'styled-components';
import { Form, Input } from '@rocketseat/unform';

export const Container = styled.section`
  width: 980px;
  border: red solid 1px;
  margin: 0 auto;
`;

export const ContactHeader = styled.header`
  display: flex;
  justify-items: center;
  flex-direction: column;
  align-content: center;
  align-items: center;

  width: 100%;
  padding: 40px 20px 30px 20px;
  border-bottom: dotted #c9c9c9;
  color: #1e76ba;

  h1 {
    font-size: 34px;
  }
`;

export const ContainerContent = styled.div`
  display: flex;
`;

export const ContactInfo = styled.div``;

export const ContactForm = styled.div`
  display: flex;
  align-content: center;
  margin: 0 auto;
  form {
    width: 400px;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;

    input {
      width: 100%;
      margin: 5px;
      padding: 5px;
    }

    textarea {
      width: 100%;
    }
  }

  button: {
    color: red;
  }
`;
