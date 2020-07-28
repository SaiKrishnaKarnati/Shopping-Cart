"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decreaseproductcount = exports.increaseproductcount = exports.removeProductFromCart = exports.addProducttoCart = exports.DECREASE_PRODUCT_COUNT = exports.INCREASE_PRODUCT_COUNT = exports.REMOVE_FROM_CART = exports.ADD_TO_CART = void 0;
exports.ADD_TO_CART = 'ADDTOCART';
exports.REMOVE_FROM_CART = 'REMOVE_FROM_CART';
exports.INCREASE_PRODUCT_COUNT = 'INCREASE_PRODUCT_COUNT';
exports.DECREASE_PRODUCT_COUNT = 'DECREASE_PRODUCT_COUNT';
exports.addProducttoCart = product => {
    return {
        type: exports.ADD_TO_CART,
        product: product
    };
};
exports.removeProductFromCart = product => {
    return {
        type: exports.REMOVE_FROM_CART,
        product: product
    };
};
exports.increaseproductcount = product => {
    return {
        type: exports.INCREASE_PRODUCT_COUNT,
        product: product
    };
};
exports.decreaseproductcount = product => {
    return {
        type: exports.DECREASE_PRODUCT_COUNT,
        product: product
    };
};
