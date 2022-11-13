import React, { useEffect, useState } from 'react';

const OrderRow = ({order,handledelete,handleStatusUpdate}) => {
    const {_id,serviceName,price,customer,phone,service,status} = order;

    const [orderService,setOrderservice] = useState({});
    useEffect(()=>{

        fetch(`https://genius-car-server-self-ten.vercel.app/services/${service}`)
        .then(res=>res.json())
        .then(data=>setOrderservice(data))

    },[service])

    //ekhane handle delete chilo ta orders a niye jete hobe


    return (
              <tr>
        <th>
          <label>
            <button onClick={()=>handledelete(_id)} className='btn btn-ghost font-bold bg-orange-600'>X</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                {
                    orderService?.img && 
                    <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
                }
              </div>
            </div>
            <div>
              <div className="font-bold">{customer}</div>
              <div className="text-sm opacity-50">{phone}</div>
            </div>
          </div>
        </td>
        <td>
          {serviceName}
          <br/>
          <span className="badge badge-ghost badge-sm">{price}</span>
        </td>
        <td>Purple</td>
        <th>
          <button onClick={()=>handleStatusUpdate(_id)} className="btn btn-ghost btn-xs">{status? status: 'pending'}</button>
        </th>
      </tr>
        
    );
};

export default OrderRow;