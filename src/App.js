import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import TitlesPage from './pages/TitlesPage'
import DetailsPage from './pages/DetailsPage'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Route path='/' exact={true} component={TitlesPage} />
        <Route path='/details/:id' component={DetailsPage} />
      </div>
    </BrowserRouter>
  )
}

export default App
