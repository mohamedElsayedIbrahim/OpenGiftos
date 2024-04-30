import {getDataFromApi} from '../connectBackend/connect.js';

if (document.querySelector('#fillAllProducts')) {
    getDataFromApi('#fillAllProducts','https://fakestoreapi.com/products');
}
