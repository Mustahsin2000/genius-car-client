import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const {user,logOut} = useContext(AuthContext);

    const [orders,setOrders] = useState([]);
     
    useEffect(()=>{

        fetch(`https://genius-car-server-self-ten.vercel.app/orders/?email=${user?.email}`,{
          headers:{
            authorization : `Bearer ${localStorage.getItem('genius-token')}`
          }
        })
        .then(res=>{
          if(res.status === 401 || res.status === 403){
               return logOut();
          }
          return res.json();
        })
        .then(data=>{
          // console.log('received',data);
          setOrders(data)
        })
    },[user?.email,logOut])


    const handledelete = id =>{
        const proceed = window.confirm('are you sure,you want to cancel this');
        if(proceed){
          fetch(`https://genius-car-server-self-ten.vercel.app/orders/${id}`,{
              method:'DELETE',
                headers:{
                  authorization : `Bearer ${localStorage.getItem('genius-token')}`
                }
          })
          .then(res=>res.json())
          .then(data=>{
              console.log(data);
              if(data.deletedCount > 0){
                alert('del successfully');
                const remaining = orders.filter(odr => odr._id !== id);
                setOrders(remaining);
              }
          })
        }
  }

  //update er jonno
  const handleStatusUpdate = id =>{
    fetch(`https://genius-car-server-self-ten.vercel.app/orders/${id}`,{
        method: 'PATCH',
        headers:{
            'content-type':'application/json',
             authorization : `Bearer ${localStorage.getItem('genius-token')}`
        },
        body: JSON.stringify({status:'Approved'})
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.modifiedCount > 0){
            const remaining = orders.filter(odr=>odr._id !== id);
            const approving = orders.find(odr=>odr._id === id);
            approving.status = 'Approved'

            const newOrders = [approving,...remaining];
            setOrders(newOrders);

        }
    })
  }

    return (
        <div>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th>message</th>
      </tr>
    </thead>
    <tbody>
       {
        orders.map(order=><OrderRow key={order._id} order={order}
             handledelete={handledelete}
             handleStatusUpdate={handleStatusUpdate}
             ></OrderRow>)
       }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Orders;