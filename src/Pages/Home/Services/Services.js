import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center'>
                <p className='text-2xl font-bold text-orange-500'>Services</p>
                <h2 className='text-5xl font-semibold'>Our Service Area</h2>
                <p className='w-3/4 mx-auto mt-2 mb-3'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'> 
                {
                    services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;