import { ColorContext } from "./context";
import styled from "styled-components";
import React, {useContext} from 'react'

const Text = styled.p`
  color: ${(props) => props.color};
`;

function MyComponent() {
  const { color } = useContext(ColorContext);

 
  return (
    <div>
      <Text color={color}>
        This text will change color based on the selected color
      </Text>
    </div>
  );
}

export default MyComponent