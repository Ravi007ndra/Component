import { createSlice } from '@reduxjs/toolkit';
import { productService } from '../services/productService';
import { errorHandler } from '../helpers/errorhandler';
import { addError } from './alertSlice';

const initialState = [];

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProduct: (state, action) => {
            console.log(action.payload);
            console.log(state);
            state = action.payload;
            console.log(state);
        },
        addProduct: (state, action) => {
            state.push(action.payload);
        },
        updateProduct: (state, action) => {
            const { id, updatedProduct } = action.payload;
            const index = state.findIndex(product => product.id === id);
            if (index !== -1) {
                state[index] = { ...state[index], ...updatedProduct };
            }
        },
        deleteProduct: (state, action) => {
            return state.filter(product => product.id !== action.payload);
        },
        toggleLike: (state, action) => {
            const index = state.findIndex(product => product.id === action.payload);
            if (index !== -1) {
                state[index].like = !state[index].like;
            }
        }
    }
});

export const { addProduct, updateProduct, deleteProduct, toggleLike, setProduct } = productSlice.actions;

export const product = () => (dispatch) => {
    return productService.fetchProduct().then(
        (response) => {
            dispatch(setProduct(response));
        },
        (error) => {
            dispatch(addError(errorHandler.catchErrors(error)));
            return false;
        }
    );
};

export const selectProduct = (state) => state.product;

export default productSlice.reducer;
