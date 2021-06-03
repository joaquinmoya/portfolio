//Se utiliza para combinar todos los reducer porque debemos tener uno solo
//Cada reducer tiene su propio state

import {combineReducers} from 'redux';
import productosReducer from './productosReducer';

export default combineReducers({
    productos: productosReducer
})
