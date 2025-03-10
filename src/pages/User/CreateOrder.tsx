/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCreateOrderMutation } from "@/redux/api/orderApi";
import { LiaBicycleSolid } from "react-icons/lia";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { IoChevronBackCircleOutline } from "react-icons/io5";


const CreateOrder = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderInfo = location.state;
  const [createOrder] = useCreateOrderMutation()

  
  const handleCreateOrder = async() => {
    const toastId = toast.loading('Creating..')
    
    const orderData = {
      user:orderInfo?.user?.id,
      product:orderInfo?.product?._id,
      quantity:orderInfo?.quantity,
      totalPrice:orderInfo?.totalPrice,
      status:"pending"
    }
   

    try {
      const result = await createOrder(orderData)
      if(result?.error){
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        toast.error((result?.error as any)?.message || "An error occurred")
      } else {
        toast.success("Order placed successfully completed !",{id:toastId,duration:1200})
        navigate('/user/orders')
      }
    } catch (error) {
      toast.error("Something went wrong",{id:toastId,duration:1200})
    }

  }

  return (
    <div className="overflow-auto rounded-lg border  p-4 m-4">
    {
      !orderInfo? <div>
        <h1 className="text-center font-semibold  text-gray-500 text-xl">No Product is selected !</h1>
        <button className="bg-green-600 py-1 my-4 px-2 font-semibold text-white rounded-md "><Link className="flex text-lg items-center gap-2 justify-between" to="/bicycles">Choose One  <LiaBicycleSolid /></Link></button>
      </div>: 
      <div>
      <div
        key={orderInfo?.product?._id}
        className="bg-white min-w-[300px] shadow-lg rounded-2xl p-4 transition transform hover:shadow-xl"
      >
        <h1
          className="text-center font-semibold text-gray-700 
      p-1 border-green-500 border-2"
        >
          ORDER INFO
        </h1>

        <h2 className="my-2 text-center bg-slate-200">Email: <span className="font-semibold">{orderInfo?.user?.email}</span></h2> <p className="text-gray-500 font-semibold"></p>

        <img
          src={orderInfo?.product?.image}
          alt={orderInfo?.product?.name}
          className="w-full h-48 object-cover rounded-lg"
        />

        <div className="mt-4">
          <div className="flex justify-between items-center my-2">
          <h2 className="text-xl font-bold">{orderInfo?.product?.name}</h2> <p className="text-gray-500 font-semibold">
            {orderInfo?.product?.type}
          </p>
          </div>

         

          <p className="text-lg my-3 font-semibold white ">
            Quantity: {orderInfo?.quantity} 
          </p>
         

          <div className="flex my-3 justify-between items-center">
            <span className="text-lg font-semibold ">
              Total Price : <span className="font-bold">${orderInfo?.totalPrice}</span>
            </span>
          </div>
        </div>
        <div className="text-center my-2">
        <button onClick={()  => handleCreateOrder()} className="w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded-md font-semibold text-lg">Place Order</button>
        </div>
      </div>

      <button
        onClick={() => navigate(-1)}
        className="mt-4 border-2 flex justify-between gap-2 items-center border-green-600 text-green-700 px-2 py-1 rounded-xl"
      >
     <IoChevronBackCircleOutline /> Go Back
      </button>
    </div>
    }
  </div>
  );
};

export default CreateOrder;
