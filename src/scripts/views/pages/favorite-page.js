import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const FavoritePage = {
  async render() {
    return `
    <main id="maincontent">        
      <section class="content">
          <article class="headline" id="headline"></article>
          <div class="latest">
          <h1 class="latest__label">Favorite Restaurant</h1>
          <div class="posts" id="posts"></div>
          </div>
      </section>
    </main>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#posts');
    const content = document.querySelector('.content');

    if (restaurants.length > 0) {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } else {
      content.innerHTML += `
        <div class="no-restaurant">
          <h2>There is no favorite restaurant yet</h2>
          <p>You can add by clicking love button on the detail page of the restaurant</p>
          <a aria-label="back-to-home" href="#/home">Back to Home</a>
        </div>
      `;
    }
  },
};

export default FavoritePage;
