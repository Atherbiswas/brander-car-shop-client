import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import OrderRow from "./OrderRow";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(
      `https://brander-car-shop-server.vercel.app/orders?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you cancel this order?");
    if (proceed) {
      fetch(`https://brander-car-shop-server.vercel.app/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Delete successfully");
            const remaining = orders.filter((odr) => odr._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  const handleStatusUpdate = (id) => {
    fetch(`https://brander-car-shop-server.vercel.app/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = orders.filter((odr) => odr._id !== id);
          const approving = orders.find((odr) => odr._id === id);
          approving.status = "Approved";

          const newOrders = [approving, ...remaining];
          setOrders(newOrders);
        }
      });
  };

  return (
    <div>
      <h2 className="text-2xl text-center">
        You have <span className="font-bold">{orders.length}</span> orders.
      </h2>
      {/* table order data */}
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label></label>
              </th>
              <th>Customer Name</th>
              <th>Service name & Price</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrderRow
                key={order._id}
                order={order}
                handleDelete={handleDelete}
                handleStatusUpdate={handleStatusUpdate}
              ></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
