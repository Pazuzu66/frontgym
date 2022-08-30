import React from 'react'
import { Provider } from 'react-redux'
import { RouterComponent } from './Components/Router/RouterComponent'
import { store } from './redux/store/store'

const App = () => {
  return (
    <Provider store={store}>
        <RouterComponent />
    </Provider>
  )
}

export default App