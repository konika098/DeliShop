const MyCart = ({ ItemData, coffees, setCoffees }) => {
  const { _id, Image, Name, Price, Rating, BrandName } = ItemData || {}
  
  const handleDetele = _id => {
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(https:entice-server.vercel.app/cart/${_id}, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              const remaining = coffees.filter(cof => cof._id !== _id)
              setCoffees(remaining)
            }
          })
      }
    })

  }
    return (
     <>
         <div>
      <div className="card lg:w-[500px] bg-[#bdd9ca] w-96 text-[#3b644c] shadow-xl">
        <figure className="lg:w[500px] lg:h-[500px]">
          <img src={Image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="lg:text-4xl text-2xl font-semibold">Brand:{BrandName}</h2>
          <p className="lg:text-xl text-lg font-medium">{Name}</p>
          <p className="lg:text-3xl font-semibold">{Price}TK</p>
          <div className="lg:flex justify-between">

            <button onClick={() => handleDetele(_id)} className="btn lg:p-2 p-1 bg-[#3b644c] hover:bg-slate-600 text-white">Delete</button>

          </div>
        </div>
      </div>
    </div>
     </>
    );
};

export default MyCart;