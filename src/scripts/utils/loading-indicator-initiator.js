/* eslint-disable no-underscore-dangle */
const LoadingIndicator = {
  init(element) {
    this._element = element;

    this._renderLoadingComponent();
    this._showLoading();
  },

  _renderLoadingComponent() {
    this._element.innerHTML += `
    <div class="loading">
        <div class="spinner">
            <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>
        </div>
    </div>
    `;
  },

  _showLoading() {
    const spinner = document.querySelector('.loading');
    spinner.classList.toggle('show');
  },

  removeLoading() {
    const spinner = document.querySelector('.loading');
    spinner.remove();
  },
};

export default LoadingIndicator;
