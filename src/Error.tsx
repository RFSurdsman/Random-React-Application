import React from 'react';

interface IProps {
  errorDetails?: string
}

const Error: React.FC<IProps> = ({ errorDetails }) => {
  return (
    <p>
      <b>An error has occurred while loading this component.</b> {errorDetails && <span>({errorDetails}.)</span>}
    </p>
  );
};

export default Error;