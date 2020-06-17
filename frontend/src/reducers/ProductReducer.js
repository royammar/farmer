

const initialState = {
  products: [],
  wishlist: [],
  cart: [],
  filterBy: {
    label: [],
    title: ''
  }

};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: [...action.products] };
    case 'REMOVE_PRODUCT':
      return { ...state, products: state.products.filter(prod => prod._id !== action.id) };
    case 'PRODUCT_ADD':
      return { ...state, products:[...state.products,action.newProduct] };
    case 'PRODUCT_UPDATE':
      return {
        ...state,
        products: state.products.map(product =>
          product._id === action.updatedProduct._id ? action.updatedProduct : product
        )
      };
    case 'SET_FILTER':
      return {
        ...state, filterBy: { ...state.filterBy, label: action.labelFilters }
      };
    case 'SET_SEARCH':
      return {
        ...state, filterBy: { label: [], title: action.filterBy.txt }
      };
    case 'SET_WISHLIST':
      console.log(action.wishlist, 'asdasd');

      return {
        ...state, wishlist: [...action.wishlist]
      };
    case 'SET_CART':
      return {
        ...state, cart: [...action.cart]
      };

    default:
      return state;
  }
}
