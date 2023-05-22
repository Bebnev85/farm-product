import styled from "styled-components";
import Title from "components/ui/title/title";
import Button from "components/ui/button/button";
import { Section } from "styled";

export const StyledAdvantages = styled(Section)`
    position: relative;
    padding-top: 100px;
    padding-bottom: 100px;
    flex-direction: column;
    align-items: center;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 64px;
  text-align: center;
`;

export const StyledButton = styled(Button)`
  margin-top: 64px;
  min-width: 260px;
`;
