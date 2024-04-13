import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { Button } from '@mui/material';

const Alert = ({ message, active }) => {
  const handleClose = () => {
    // Define the action to take when the alert is closed
    console.log('Alert closed');
  };

  const action = (
    <React.Fragment>
      {/* Define an action button for the alert */}
      <Button color="secondary" size="small" onClick={handleClose}>
        Close
      </Button>
    </React.Fragment>
  );
    console.log('clciked')

  return (
    <>
      {/* Show the Snackbar only when the wallet is not active */}
      <Snackbar
        open={!active}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
        action={action}
      />
    </>
  );
};

export default Alert;
