import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart/cart-icon/CartIcon'
import CartDropdown from '../cart/cart-dropdown/CartDropdown'
import { selectCartHidden } from '../../redux/cart/cart.selector'
import { selectCurruntUser } from '../../redux/user/user.selector'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import './Header.scss'

function Header({ currentUser, hidden }) {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
        <div>
          <CartIcon />
        </div>
      </div>
      {hidden || <CartDropdown />}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurruntUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
