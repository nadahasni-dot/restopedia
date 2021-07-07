/* eslint-disable eqeqeq */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import RestaurantApiSource from '../../data/restaurantapi-source';
import UrlParser from '../../routes/url-parser';
import LoadingIndicator from '../../utils/loading-indicator-initiator';
import SearchBoxInitiator from '../../utils/search-box-initiator';
import { createRestaurantItemTemplate, create404Error, createNetworkError } from '../templates/template-creator';

const SearchPage = {
  async render() {
    return `
    <main id="maincontent">      
      <div class="hero__search">
        <input
            class="hero__searchbox"
            type="text"
            name="search"            
            id="searchRestaurant"
            placeholder="Cari lebih dari 1000+ restoran ..."
        />
        <button
            id="searchButton"
            class="hero__searchbutton"
            type="button"
            name="searchButton"
            aria-label="button-cari"
        >
            Cari
        </button>
      </div>      
      <section class="content">
        <h1 class="search_label">Search results for ""</h1>
        <div class="latest">
          <div class="posts" id="posts"></div>
        </div>
      </section>
    </main>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const content = document.querySelector('.content');

    try {
      LoadingIndicator.init(content);
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurants = await RestaurantApiSource.searchRestaurant(url.id);
      const postContainer = document.querySelector('#posts');

      const searchTitle = document.querySelector('.search_label');
      searchTitle.innerHTML = `Search results for "${url.id}", found ${restaurants.length} item`;

      restaurants.forEach((restaurant) => {
        postContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });

      SearchBoxInitiator.init({
        searchBox: document.querySelector('#searchRestaurant'),
        searchButton: document.querySelector('#searchButton'),
      });

      LoadingIndicator.removeLoading();
    } catch (error) {
      if (error == 'TypeError: Failed to fetch') {
        console.log('error caching');
        content.innerHTML = createNetworkError();
      } else {
        console.log('error 404');
        content.innerHTML = create404Error();
      }
      console.log(error);

      LoadingIndicator.removeLoading();
    }
  },

};

export default SearchPage;
