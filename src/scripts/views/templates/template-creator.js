import CONFIG from '../../globals/config';
import SummaryHelper from '../../utils/summary-helper';

const createRestaurantDetailTemplate = (restaurant) => `
  <article class="detail-content">
    <div class="detail-head">
      <img
        width="100%"        
        class="lazyload"
        crossorigin="anonymous"
        alt="${restaurant.name}"
        data-src="${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId}"
        srcset="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId} 480w, ${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId} 800w" />
      <h2>${restaurant.name}</h2>              
    </div>
    <div class="detail-body">
      <p class="detail-body-data">Rating: ${restaurant.rating}</p>    
      <p class="detail-body-data" id="category">Category: </p>    
      <p class="detail-body-data">City: ${restaurant.city}</p>
      <p class="detail-body-data">Address: ${restaurant.address}</p>
      <p class="detail-body-data">Description:</p>
      <p>${restaurant.description}</p>
      <hr class="menu-separator">
      <div class="detail-menu-container">
        <div class="menu-food">
          <p class="detail-body-data">Foods:</p>
          <ul id="food-list">                        
          </ul>
        </div>            
        <div class="menu-drinks">
          <p class="detail-body-data">Drinks:</p>
          <ul id="drink-list">            
          </ul>
        </div>
      </div>
    </div>
  </article>
  `;

const createReviewCustomerContainer = (customerReviews) => `
<section class="review-container">              
<div class="add-review-container">
  <h3>Add Review</h3>
  <label for="name-input">Name</label>
  <input class="form-input" placeholder="Enter your name" id="name-input" name="name" type="text" />
  <label for="review-input">Review</label>
  <textarea class="textarea-input" placeholder="Enter your review" id="review-input" name="review" type="text" rows="3"></textarea>
  <button type="button" class="button-input" name="send-review" id="button-review">Submit Review</button>
  </div>
  <h3 id="countReview">Customer Reviews (${customerReviews.length})</h3>
  <div class="review-list" id="review-list"></div>
</section>
`;

const createReviewItem = (review) => `
  <div class="review-item">
    <p class="customer-name">${review.name}</p>
    <p class="review-date">on: ${review.date}</p>
    <p>${review.review}</p>
  </div>   
`;

const createRestaurantListAside = () => `
  <aside class="side-container" id="aside-restaurant-list">
    <h3 class="">Another Restaurant</h3>                            
  </aside>
`;

const createRestaurantListItem = (restaurant) => {
  const description = SummaryHelper.createSummary(restaurant.description, 50);

  return `
  <div class="restaurant-item">
    <div class="restaurant-figure">
      <a href="#/detail/${restaurant.id}">
      <img
        width="100%"
        height="100px"
        class="lazyload"
        crossorigin="anonymous"
        alt="${restaurant.name}"
        data-src="${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId}"
        srcset="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId} 480w, ${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId} 800w" />
      </a>
    </div>
    <div class="restaurant-aside-detail">
      <a href="#/detail/${restaurant.id}">${restaurant.name}</a>
      <p>${description}</p>                  
    </div>                
  </div>    
`;
};

const createCategoryItem = (category) => `${category.name}`;

const createFoodItem = (food) => `<li>${food.name}</li>`;

const createDrinkItem = (drink) => `<li>${drink.name}</li>`;

const createRestaurantItemTemplate = (restaurant) => {
  const description = SummaryHelper.createSummary(restaurant.description, 250);

  return `
      <article class="post-item">
        <img
          crossorigin="anonymous"
          class="post-item__thumbnail lazyload"
          width="100%"
          height="350px"
          data-src="${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId}"
          srcset="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId} 480w, ${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId} 800w"
          alt="${restaurant.name}"
        />
        <div class="post-item__city">
          <p>Kota ${restaurant.city}</p>
        </div>
        <div class="post-item__content">
          <p class="post-item__rating">Rating:</p>
          <p class="post-item__rating_value">${restaurant.rating}</p>
          <h1 class="post-item__title">
            <a aria-label="${restaurant.name}" href="#/detail/${restaurant.id}">${restaurant.name}</a>
          </h1>
          <p class="post-item__description">
            ${description}
          </p>
        </div>
      </article>
    `;
};

const createHeadlineItemTemplate = (restaurant) => {
  const description = SummaryHelper.createSummary(restaurant.description, 300);

  return `
    <figure class="headline__figure">
      <img      
        class="lazyload"
        crossorigin="anonymous"
        alt="${restaurant.name}"
        data-src="${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId}"
        srcset="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId} 480w, ${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId} 800w" />
      <figcaption>
        Rekomendasi Restoran Untuk Anda: ${restaurant.name}
      </figcaption>
    </figure>
    <div class="headline__content">
      <h1 class="headline__title">#restopedia : Kelezatan Khas Nusantara</h1>
      <p class="headline__description">
          ${description}
      </p>
      <a aria-label="headline-read-more" href="#/detail/${restaurant.id}" class="headline__button">Read More</a>
    </div>
    `;
};

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const create404Error = () => `
  <div class="error-container">
    <h2 class="error-text">Error 404 Not Found</h2>
    <p>Content you search for cannot be found.</p>
    <a class="back-to-home" href="#/home" aria-label="back-to-home">Back to Home</a>
  </div>
`;

const createNetworkError = () => `
  <div class="error-container">
    <h2 class="error-text">Error Occured</h2>
    <p>Please check your connection and try again.</p>
    <a class="back-to-home" href="#/home" aria-label="back-to-home">Back to Home</a>
  </div>
`;

export {
  createNetworkError,
  create404Error,
  createRestaurantListAside,
  createRestaurantListItem,
  createReviewItem,
  createReviewCustomerContainer,
  createCategoryItem,
  createDrinkItem,
  createFoodItem,
  createRestaurantItemTemplate,
  createHeadlineItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
