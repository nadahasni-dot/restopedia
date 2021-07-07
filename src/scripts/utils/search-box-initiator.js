/* eslint-disable no-underscore-dangle */
const SearchBoxInitiator = {
  init({
    searchBox, searchButton,
  }) {
    this._searchBox = searchBox;
    this._searchButton = searchButton;

    this._handleOnClickListener();
  },

  _handleOnClickListener() {
    this._searchButton.addEventListener('click', () => {
      if (this._validateInput()) {
        window.location.href = `#/search/${this._searchBox.value}`;
        this._searchBox.value = '';
      }
    });
  },

  _validateInput() {
    if (this._searchBox.value === '' || this._searchBox.value === null || this._searchBox.value === undefined) {
      return false;
    }
    return true;
  },
};

export default SearchBoxInitiator;
