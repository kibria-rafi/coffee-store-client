import { Link, useLoaderData } from 'react-router-dom'
import './App.css'

function App() {
     const data = useLoaderData()
     console.log(data);
  return (
    <>
     
      <h1 className='text-2xl text-white font-semibold mt-5 text-center'>Coffee Store admin pannel</h1>
      <div className='flex mt-6 mb-6 justify-center'>
      <Link to="/addCoffee"><button className='btn btn-outline'>Add coffee</button></Link>
      </div>
      {
        data.map((coffee)=>{
          return(
            <div key={coffee._id}>
              <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1' >
        <div className=" card w-80 h-96 h bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={coffee.photoUrl} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{coffee.name}</h2>
    <p>Quantity: {coffee.quantity} pics</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
      </div>
            </div>
          )
        }   ) 
      }
      
    </>
  )
}

export default App
