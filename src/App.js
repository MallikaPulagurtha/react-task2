import './App.css';
import Card from "./card"
import {useState} from "react"

function App() {
  const products = [
    {
      img: "iphone.jpg",
      id: 1,
      productName: "iPhone",
      price: 24.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
    {
      img: "samsung.jpg",
      id: 2,
      productName: "Samsung",
      price: 40.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
    {
      img: "nokia.jpg",
      id: 3,
      productName: "Nokia",
      price: 67.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
    {
      img: "realme.jpg",
      id: 4,
      productName: "Realme Oppo",
      price: 48.89,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
    {
      img: "oneplus.jpg",
      id: 5,
      productName: "One Plus",
      price: 79.69,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
    {
      img: "blackberry.jpg",
      id: 6,
      productName: "BlackBerry",
      price: 45.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    }
  ];

  const [cartItems, setCartItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  function handleAddtoCart(product) {
    cartItems.push(product);
    setCartItem([...cartItems]);
    let grandTotal = parseFloat(totalPrice) + parseFloat(product.price);
    setTotalPrice(grandTotal.toFixed(2));
  }

  function handleRemoveFromCart(product,index) {
    cartItems.splice(index,1)
    setCartItem([...cartItems]);
    let grandTotal = parseFloat(totalPrice) - parseFloat(product.price);
    setTotalPrice(grandTotal.toFixed(2));
  }

  return (
    <>
      
      <div class="row">
      <div class="col-lg-3">          
      <h2 class="my-4">My Cart</h2>
      <h3>Total: ${totalPrice}</h3>
      <div class="list-group">
      {
        cartItems.map((product, index) => {
          return (
            <li class="list-group-item d-flex justify-content-between align-items-center">
            <b>{product.productName} | Price: Rs.{product.price}</b>
            <button type="button" class="btn btn-info dark" onClick={() => handleRemoveFromCart(product,index)}>Remove</button>
          </li>
          )
        })
      }
      </div>
      </div>
      <div class="col-lg-9"> 
      <div className="container">
        <div className="row">
            {
              products.map(product => {
                return <div className = "col-lg-4">
                 <Card data={product} handleAddtoCart={handleAddtoCart}></Card>
                 </div>
              })
            }
        </div>
      </div>
      </div>
      </div>
      
    </>
  );
}

export default App;
