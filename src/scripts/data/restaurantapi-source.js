import API_ENDPOINT from '../globals/api-endpoint';
import ToastInitiator from '../utils/toast-initiator';

class RestaurantApiSource {
  static async listRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async searchRestaurant(query) {
    const response = await fetch(API_ENDPOINT.SEARCH(query));
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async sendReview({ id, name, review }) {
    const settings = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': '12345',
      },
      body: JSON.stringify({ id, name, review }),
    };

    try {
      const response = await fetch(API_ENDPOINT.ADD_REVIEW, settings);
      const responseJson = await response.json();
      return responseJson;
    } catch (e) {
      console.log('terjadi error post');
      ToastInitiator.init(
        document.querySelector('#app'),
        'Tidak dapat mengirim review. Harap periksa koneksi anda.',
      );
      return e;
    }
  }
}

export default RestaurantApiSource;
