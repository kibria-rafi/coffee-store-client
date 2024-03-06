import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="md:m-28 m-3">
      <h1 className="text-2xl text-white font-semibold mt-5 text-center">
        Coffee Store admin pannel
      </h1>
      <div className="flex mt-6 mb-6 justify-center">
        <Link to="/addCoffee">
          <button className="btn btn-outline">Add coffee</button>
        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
      {data.map((coffee) => {
        return (
          <CoffeeCard coffee={coffee} key={coffee._id} />
        );
      })}
      </div>
    </div>
  );
}

export default App;
