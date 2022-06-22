import React, { ReactElement } from 'react';

interface Props {
  children?: React.ReactNode;
}

function Header({ children }: Props): ReactElement {
  return <h2>{children}</h2>;
}

export default Header;
