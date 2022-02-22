import reducer from '@reducers/index';
import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const configuration = () => {
  const middlewares = [];
  const enhancer =
    process.env.NODE_END === 'production'
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  return createStore(reducer, enhancer);
};

const wrapper = createWrapper(configuration, {
  debug: process.env.NODE_END === 'developmnet',
});

export default wrapper;
