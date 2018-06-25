import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import createAppStore from './store'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'

const history = createHistory()
const store = createAppStore(history)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
