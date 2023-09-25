import React from 'react'
import { Provider } from 'react-redux'

import Router from './Router'
import { Store } from './context/Store'

const Wrapper = () => {
  return (
    <Provider store={Store}>
       <Router/>
    </Provider>
  )
}

export default Wrapper