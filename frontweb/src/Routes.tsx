import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from './pages/Home'
import Navbar from "components/Navbar"
import Catalog from "pages/Catalog/Index"
import Admin from "pages/Admin"

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/products'>
            <Catalog />
          </Route>
          <Route path='/admin'>
            <Admin />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}
export default Routes