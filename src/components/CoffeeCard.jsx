import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee }) => {
  const { name, _id, photoUrl, quantity, taste } = coffee;

  const handleDelete = (_id) => 

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
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
              });
            }
          });
      }
    });

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
              <Link to={`/updateCoffee/${_id}`}>
              <button className="btn btn-info">Edit</button>
              </Link>
              <button onClick={()=> handleDelete(_id)} className="btn btn-error">X</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
  coffee: PropTypes.shape({
    name: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    taste: PropTypes.string.isRequired,
  }).isRequired,
};

export default CoffeeCard;
