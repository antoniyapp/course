import React from 'react';
import { CSSTransition } from 'react-transition-group';


const ErrorMessage = ({
  errors,
  showErrMsg,
}) => {
  return (
    <div id="err">
      <CSSTransition in={showErrMsg} timeout={1000} 
        unmountOnExit classNames="messages">
          <div>  
            <div className="errors">{errors}</div>
          </div>
        </CSSTransition>  
    </div>
  );
};


export default ErrorMessage;