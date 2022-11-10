import React from 'react';

const errorHandlerEmail = (email) => {
  if (email === '') {
    return <div id="email-error-empty">Email can't be empty!</div>;
  } else if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    return (
      <div id="email-error-invalid">
        That doesn't look like an email to me. :/
      </div>
    );
  }
};

export default errorHandlerEmail;
