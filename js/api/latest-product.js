import { getDataFromApi } from "../connectBackend/connect.js";

if (document.querySelector('#fillLatestProducts')) {
    getDataFromApi('#fillLatestProducts','https://fakestoreapi.com/products?limit=8');
}


