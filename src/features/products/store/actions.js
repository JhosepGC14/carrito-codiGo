import { SET_PRODUCTS, SET_PRODUCT_DETAIL } from "./constans";

function setProducts(payload) {
  return {
    type: SET_PRODUCTS,
    payload,
  };
}

function setProductDetail(payload) {
  return {
    type: SET_PRODUCT_DETAIL,
    payload,
  };
}

// function getCategoryProducts(payload) {
//   return {
//     type: GET_CATEGORY_PRODUCTS,
//     payload,
//   };
// }



function getProducts() {
  return function (dispatch) {
    fetch("https://carallenglish.herokuapp.com/apis_product/List_Products")
      .then((response) => response.json())
      .then((products) => dispatch(setProducts(products)));
  };
}

function getProductDetail(id) {
  return function (dispatch) {
    fetch(`https://carallenglish.herokuapp.com/apis_product/Detail_Products/${id}`)
      .then((response) => response.json())
      .then((product) => dispatch(setProductDetail(product)));
  };
}

// function getCategory(name) {
//   return function (dispatch) {
//     fetch(`https://carallenglish.herokuapp.com/apis_category/List_Category_Products/${id}`)
//       .then((response) => response.json())
//       .then((category) => dispatch(getCategoryProducts(category)));
//   };
// }


export { setProducts, setProductDetail, getProducts, getProductDetail };
