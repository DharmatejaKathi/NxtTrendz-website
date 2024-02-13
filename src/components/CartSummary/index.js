// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummery = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(each => {
        total += each.price * each.quantity
      })
      return (
        <div>
          <h1 className="total">
            Order Total: <span className="total-amount">{total}/- </span>
          </h1>
          <p className="quantity-in-cart">{cartList.length} Items in cart</p>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummery
