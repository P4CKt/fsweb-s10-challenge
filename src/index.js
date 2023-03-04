import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk'
import { applyMiddleware ,legacy_createStore as createStore} from 'redux';
import { reducer } from './reducers';
import { Provider } from 'react-redux';
import { ToastContainer} from 'react-toastify';
import { createLogger } from 'redux-logger';
import 'react-toastify/dist/ReactToastify.css';


const logger= createLogger({
  diff:true,
  collapsed: true
})

const myStore = createStore(reducer, applyMiddleware(thunk,logger))
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <Provider store={myStore}>
  <BrowserRouter>
    <>
      <App />
      <ToastContainer
      	position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"/>
    </>
  </BrowserRouter>
   </Provider>
);
