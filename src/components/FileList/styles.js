import styled from "styled-components";

export const Container = styled.ul`
  margin-top: 20px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #6e808f;

    & + li {
      margin-top: 15px;
    }
  }
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 12px;
      color: #223951;
      margin-top: 5px;

      button {
        border: 0;
        background: transparent;
        color: #223951;
        margin-left: 5px;
        cursor: pointer;
      }
    }
  }
`;
