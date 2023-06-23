export const preventEnterSubmit = (keyEvent) => {
  if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
    keyEvent.preventDefault();
  }
};
