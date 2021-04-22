import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LibReactProps {}

const StyledLibReact = styled.div`
  color: black;
`;

export function LibReact(props: LibReactProps) {
  return (
    <StyledLibReact>
      <p>Custom component LibReact!</p>
    </StyledLibReact>
  );
}

export default LibReact;
