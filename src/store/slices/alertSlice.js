import { createSlice } from '@reduxjs/toolkit';

export const alertSlice = createSlice({
    name: 'alert',
    initialState: {
        error: [],
        success: null,
    },
    reducers: {
        resetError: (state) => {
            state.error = [];
        },
        resetSuccess: (state) => {
            state.success = null;
        },
        addError: (state, action) => {
            state.error = action.payload;
            state.success = null;
        },
        addSuccess: (state, action) => {
            state.success = action.payload;
            state.error = [];
        },
    },
});

export const { resetError, resetSuccess, addError, addSuccess } = alertSlice.actions;
export const selectError = (state) => state.alert.error;
export const selectSuccess = (state) => state.alert.success;
export default alertSlice.reducer;
