import React from 'react';

 

const Text = ({
  children,
  size=1,
}) =>
  <span
    style={{
      fontSize: `${size}rem`,
    }}
  >
    {children}
  </span>;

export default Text;