import { createStore,applyMiddleware  } from "redux";

import rootReducer from "./index";


const store = createStore(rootReducer,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)));
export default store;