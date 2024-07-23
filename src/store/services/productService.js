import { reqHelper } from "../helpers/reqHelper";

export const productService = {
    fetchProduct,
};

export function fetchProduct() {
    return fetch(`http://localhost:5000/product`)
        .then(reqHelper.handleResponse)
        .then((response) => {
            return response;
        });
}
