import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'

const statex = {

};

export const store = createStore(reducer, statex, compose(applyMiddleware(thunk)))
