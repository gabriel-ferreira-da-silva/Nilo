import React from 'react';

function AlertCommom({alertHook}) {

    return (
          <div>
            {alertHook.message && (
              <div className={alertHook.class} role="alert">
                {alertHook.message}
              </div>
            )}
          </div>  
  );
}

export default AlertCommom;

