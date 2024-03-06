
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee =useLoaderData()
    const { name, _id, photoUrl, quantity,supplier,category,details, taste } = coffee;

    const handleUpdateCoffee = e =>{
        e.preventDefault()
        const name = e.target.name.value;
        const quantity = e.target.quantity.value;
        const supplier = e.target.supplier.value;
        const taste = e.target.taste.value;
        const category = e.target.category.value;
        const details = e.target.details.value;
        const photoUrl = e.target.photoUrl.value;
        const updatedCoffee ={name,quantity,supplier,taste,category,details,photoUrl}
        // sent data to the server
        fetch(`http://localhost:5000/coffee/${_id}`,{
          method:"PUT",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify(updatedCoffee)
        })
        .then(res=>res.json())
        .then(data=>{ 
            console.log(data)
            if(data.modifiedCount>0){
              Swal.fire({
                title: 'Success',
                text: 'Coffee Updated successfully',
                icon: 'success',
                confirmButtonText: 'Okh'
              })
            }
            
        })
       }

    return (
        <div className=" bg-[#F4F3F0] p-24 h-[900px]">
        <h2 className="text-black text-3xl text-center mb-3 font-bold">Update a coffee: <span className="text-purple-700">{name}</span></h2>
        <form onSubmit={handleUpdateCoffee}>
          
          <div className="md:flex md:mb-5 gap-2">
            <div className="join md:w-1/2">
              <input
              name="name"
              defaultValue={name}
                className="input md:w-full input-bordered join-item"
                placeholder="Coffee name"
                type="text"
              />
            </div>
            <div className="join md:w-1/2">
              <input
              name="quantity"
                className="input md:w-full input-bordered join-item"
                placeholder="Available quantity"
                type="number"
                defaultValue={quantity}
              />
            </div>
          </div>
          {/* supplier and taste row */}
          <div className="md:flex md:mb-5 gap-2">
            <div className="join md:w-1/2">
              <input
              name="supplier"
                className="input md:w-full input-bordered join-item"
                placeholder="Supplier name"
                type="text"
                defaultValue={supplier}
              />
            </div>
            <div className="join md:w-1/2">
              <input
              name="taste"
                className="input md:w-full input-bordered join-item"
                placeholder="Taste"
                type="text"
                defaultValue={taste}
              />
            </div>
          </div>
          
          {/* category and details */}
          <div className="md:flex md:mb-5 gap-2">
            <div className="join md:w-1/2">
              <input
              name="category"
                className="input md:w-full input-bordered join-item"
                placeholder="Category"
                type="text"
                defaultValue={category}
              />
            </div>
            <div className="join md:w-1/2">
              <input
              name="details"
                className="input md:w-full input-bordered join-item"
                placeholder="Details"
                type="text"
                defaultValue={details}
              />
            </div>
          </div>
          <input
              name="photoUrl"
                className="md:mb-5 input md:w-full input-bordered join-item"
                placeholder="Photo Url"
                type="text"
                defaultValue={photoUrl}
              />
              <input type="submit" className="btn btn-block" value="Update coffee" />
        </form>
      </div>
    );
};

export default UpdateCoffee;