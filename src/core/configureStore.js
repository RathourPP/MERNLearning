import { applyMiddleware, createStore } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const configureStore=()=>{
    const sagaMiddleware=createSagaMiddleware();
    return{
        ...createStore(
            rootReducer,
            composeWithDevTools(applyMiddleware(sagaMiddleware))
        ),
        runSage:sagaMiddleware.run(rootSaga),
    };
};

export default configureStore;