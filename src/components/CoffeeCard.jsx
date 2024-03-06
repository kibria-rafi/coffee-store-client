import Swal from 'sweetalert2'
const CoffeeCard = ({ coffee }) => {
  const { name,_id, photoUrl, quantity, taste } = coffee;


    const handleDelete =  (_id) => { 
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "DELETE",
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
                Swal.fire({
                    title: 'Success',
                    text: 'Coffee Deleted successfully',
                    icon: 'success',
                    confirmButtonText: 'Okh'
                })
            }
        });
        }
        
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            className="h-48 w-full object-cover rounded-t-lg "
            src={photoUrl}
            alt="Movie"
          />
        </figure>
        <div className=" flex  justify-between w-full pr-3">
          <div className="mt-9 ps-10">
            <h2 className="card-title"> {name} </h2>
            <p>Quantity: {quantity} pcs</p>
            <p>{taste}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="join join-vertical space-y-4">
              <button className="btn btn-success">View</button>
              <button className="btn btn-info">Edit</button>
              <button onClick={()=> handleDelete(_id)} className="btn btn-error">X</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
