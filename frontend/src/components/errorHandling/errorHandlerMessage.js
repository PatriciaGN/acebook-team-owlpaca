import React from 'react';

const errorHandlerMessage = (message) => {
  if (message === '') {
    return (
      <div id="message-error-empty">
        You need to type something if you want to express your grumble.
      </div>
    );
  } else if (!message.match(/^[a-zA-Z0-9~!@#()`;\-':,.?| ]*$/)) {
    return (
      <div id="message-error-invalid">
        You have introduced some invalid special characters; better luck next
        time!
      </div>
    );
  }
};
export default errorHandlerMessage;
