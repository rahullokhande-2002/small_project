import './App.css';
import Product from './Product.jsx';
import { Product_data } from './Product _data.js';

const App = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>

          <div className="col-md-12">
            <h1 className="text-center mt-4 bg-warning p-4">Ecommerce Website</h1>
          </div>

          <div className="col-md-12 mt-4">
            <div className="row">

              {/* ======================================================================================= */}


              {/* <div className="col-md-3">
                <Product
                name="iphone 16 pro" 
                image="Assests/p1.jpg"
                btn="ADD CARD"
                btn2="BUY NOW"/>
                
              </div>

              <div className="col-md-3">
                <Product
                name="iphone 15 pro" 
                image="Assests/p1.jpg"
                 btn="ADD CARD"
                btn2="BUY NOW"/>
              </div>

                <div className="col-md-3">
                <Product
                name="iphone 14 pro" 
                image="Assests/p1.jpg"
                 btn="ADD CARD"
                btn2="BUY NOW"/>
              </div> */}


              {/* ========================================================================================== */}

              


{
  Product_data.map((val)=>
  {
    return(
<div className="col-md-3">
                <Product
                  name={val.name}
                  image={val.image}   
                  btn={val.btn}
                  btn2={val.btn2}
                />
              </div>
    )
  })
}

            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default App;
