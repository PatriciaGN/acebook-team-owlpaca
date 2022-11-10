import React from 'react';

const errorHandlerMessage = (message) => {
  if (message === '') {
    return (
      <b><div id="message-error-empty">
        You need to write some text if you want to express yourself.
      </div></b>
    );
  } else if (!message.match(/^[a-zA-Z0-9~!@#()`;\-':,.?| ]*$/)) {
    return (
      <b><div id="message-error-invalid">
        You have introduced some invalid special characters, good luck next
        time.
      </div></b>
    );
  }
};
export default errorHandlerMessage;
