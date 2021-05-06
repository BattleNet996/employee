import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { About,Home,Employees,Employee,List } from './pages'
import store from './store'


export default function RouterApp() {
  return (
    <Router>
      <Provider store={store}>
        <div className="container">
        <div>
            <div>
              <Link to="/">To Home</Link>
            </div>
            <div>
              <Link to="/about">To About</Link>
            </div>
            <div>
              <Link to="/Employees">To Employees</Link>
            </div>
            <div>
              <Link to="/List">To List</Link>
            </div>
          </div>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/Employees" exact>
              <Employees />
            </Route>
            <Route path="/List">
              <List />
            </Route>
            <Route path="/Employees/:key">
              <Employee />
            </Route>
          </Switch>
        </div>
      </Provider>
    </Router>
  )
}