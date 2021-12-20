import React from 'react'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../../redux/cart/cart.actions'

import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg'

const CartIcon = ({ toggleCartHidden }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
)

const mapDispatchtoProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

// const mapStateToProps = state => {
//   return state.hidden
// }

export default connect(null, mapDispatchtoProps)(CartIcon)
