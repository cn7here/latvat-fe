import styled from "styled-components";

interface TextProps {
  size?: string;
  color?: string;
  weight?: string;
}

const Text = styled.h4<TextProps>`
  font-size: ${(props) => props.size || "24px"};
  color: ${(props) => props.color || "#FFF"};
  font-weight: ${(props) => props.weight || 700};
  margin: 0;
  padding: 0;
  letter-spacing: 0.5px;
`;

export default Text;
