import React from 'react';

const errorHandlerMessage = (message) => {
  if (message === '') {
    return (
      <b><div id="message-error-empty">
        Would you like to share your grumbly thoughts?
      </div></b>
    );
  } else if (!message.match(/^[a-zA-Z0-9~!@#()`;\-':,.?| ]*$/)) {
    return (
      <b><div id="message-error-invalid">
        You have introduced some invalid special characters; better luck next
        time!
      </div></b>
    );
  }
};
export default errorHandlerMessage;
