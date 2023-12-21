// StateContext.js
import React, { createContext, useEffect, useReducer } from "react";
import steamProducts from "./products-object/steamProducts"; // Adjust the path accordingly

const initialState = {
  productState: {
    products: steamProducts.map((product) => ({
      ...product,
      amount: 0,
      isClicked: false,
    })),
  },
  cartState: {
    cart: [],
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_PRODUCT_AMOUNT":
      return {
        ...state,
        productState: {
          ...state.productState,
          products: state.productState.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, amount: action.payload.amount }
              : product
          ),
        },
      };
    case "TOGGLE_PRODUCT_CLICK":
      return {
        ...state,
        productState: {
          ...state.productState,
          products: state.productState.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, isClicked: !product.isClicked }
              : product
          ),
        },
      };
    case "ADD_TO_CART":
      const selectedProduct = state.productState.products.find(
        (product) => product.id === action.payload.id
      );
      return {
        ...state,
        cartState: {
          ...state.cartState,
          cart: [
            ...state.cartState.cart,
            { ...selectedProduct, amount: action.payload.amount },
          ],
        },
      };
    default:
      return state;
  }
};

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateContext;
