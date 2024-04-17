import { compose, createStore,applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducers } from "./root-reducer";

const middleware = [logger]

const composedEnhacers = compose(applyMiddleware(...middleware))

export const store = createStore(rootReducers,undefined,composedEnhacers)