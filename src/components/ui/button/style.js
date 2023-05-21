import styled from "styled-components";

export const StyledButton = styled.a`
  display: block;
  min-height: 60px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  min-width: ${(props) => `${props.$minWidth}px` || "100%"};
  max-width: 700px;
  font-weight: 700;
  line-height: 58px;
  color: ${(props) => props.theme.whiteColor};
  background-color: ${(props) => props.theme.bgForButton};
  text-align: center;
  text-decoration: none;
  border: none;
  background-image: none;
  box-shadow: none;
  cursor: pointer;
  transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.bgForButtonHover};
    box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }
`;