import React, { useContext } from 'react';
import { json, Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const {_id,title,price} = useLoaderData();
    const  {user} = useContext(AuthContext);

    const handlePlaceOrder = event =>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstname.value} ${form.lastname.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer:name,
            email,
            phone,
            message,
        
        }
        // if(phone.length > 10){
        //     alert('phoner number should or longer')
        // }
        fetch('http://localhost:5000/orders',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.acknowledged){
                alert('order placed successfully')
                form.reset();
            }
        }
        )
        .then(re=>console.error(re))
    }
    return (
        <div className='py-3'>
            <form onSubmit={handlePlaceOrder}> 
                <h2 className='text-3xl font-semibold text-orange-600'>{title}</h2>
                <h4 className='text-2xl mb-3 font-semibold'>price:{price}</h4>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-3'>
          <input name='firstname' type="text" placeholder="First Name" className="input input-bordered w-full " />
            <input name='lastname' type="text" placeholder="Last Name" className="input input-bordered w-full " />
            <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full " required/>
            <input name='email' type="text" placeholder="Your Mail" defaultValue={user?.email} className="input input-bordered w-full" readOnly  required/>
          </div>
          <textarea name='message' className="textarea h-24 w-full textarea-bordered" placeholder="Your Massege"></textarea>
          <Link to='/orders'><input className='btn mt-3 bg-orange-700' type="submit" value="Place Your Order" required/></Link>
            </form>
        </div>
    );
};

export default Checkout;