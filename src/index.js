import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import reportWebVitals from '../../reportWebVitals';
import { Provider } from 'react-redux'
import rootReducer from './reducers/index'
import { createStore } from 'redux'
import { BrowserRouter as Router} from 'react-router-dom';


const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
    <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// reportWebVitals();