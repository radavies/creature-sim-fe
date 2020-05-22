import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import SnackbarProvider from './SnackbarProvider';

export default function SimpleSnackbar() {
  return (
    <div>
      <SnackbarProvider.Consumer>
        {({ isOpen, closeCallback }) => (
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            open={isOpen}
            autoHideDuration={4000}
            onClose={closeCallback}
            message="There was an error creating your creature."
            action={
              <React.Fragment>
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={closeCallback}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </React.Fragment>
            }
          />
        )}
      </SnackbarProvider.Consumer>
    </div>
  );
}
