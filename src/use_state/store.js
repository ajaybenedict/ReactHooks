// import {configureStore, combineReducers} from '@reduxjs/toolkit';
// import * as reducers from './reducers';

// const rootReducer = combineReducers({
//     numberOfClicks: reducers.numberOfClicksReducers,
// });

// export const store = configureStore(rootReducer);

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import * as reducers from './reducers';

const rootReducer = combineReducers({
    numberOfClicks: reducers.numberOfClicksReducers,
});

export const store =  configureStore({ reducer: rootReducer })