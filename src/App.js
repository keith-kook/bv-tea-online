import React from 'react'
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/ShopPage'
import CheckoutPage from './pages/checkout/CheckoutPage'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUpPage'
import Header from './components/header/Header'
import { selectCurruntUser } from './redux/user/user.selector'
import { setCurrentUser } from './redux/user/user.actions'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import './App.css'

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })

          // console.log(this.state)
        })
      }
      // set null to current user
      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={() => (this.props.currentUser ? <Redirect to='./' /> : <SignInAndSignUpPage />)} />
        </Switch>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurruntUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
