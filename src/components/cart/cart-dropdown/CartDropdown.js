import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import { selectCartItems } from '../../../redux/cart/cart.selector'
import CustomButton from '../../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem'
import { toggleCartHidden } from '../../../redux/cart/cart.actions'

import './CartDropdown.scss'

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map(item => {
          return <CartItem key={item.id} item={item} />
        })
      ) : (
        <span className='cart-empty-message'>Your cart is empty</span>
      )}
    </div>
    <CustomButton
      inverted
      onClick={() => {
        history.push('/checkout')
        dispatch(toggleCartHidden())
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
