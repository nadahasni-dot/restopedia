/* eslint-disable no-underscore-dangle */
const ToastInitiator = {
  init(app, message) {
    this._app = app;
    this._message = message;

    this._showToast();
  },

  _showToast() {
    this._app.innerHTML += `<div class='toast'>${this._message}</div>`;
    this._toast = document.querySelector('.toast');
    this._toast.classList.toggle('show-toast');

    this._removeToast();
  },

  _removeToast() {
    setTimeout(
      () => {
        this._toast.classList.toggle('show-toast');
      }, 5000,
    );
    setTimeout(
      () => {
        this._toast.remove();
      }, 6000,
    );
  },
};

export default ToastInitiator;
