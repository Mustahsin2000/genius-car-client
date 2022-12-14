import React, { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services,setServices] = useState([]);
    const [isAsc,setAsc] = useState(true);
    const [search,setSearch] = useState('');
    const searchRef = useRef();

    const handleSearch = () =>{
        setSearch(searchRef.current.value);
    }

    useEffect(()=>{
        fetch(`http://localhost:5000/services?search=${search}&order=${ isAsc ? 'asc' : 'desc'}`)
        .then(res=>res.json())
        .then(data=>setServices(data))
    }, [isAsc,search])
    return (
        <div>
            <div className='text-center'>
                <p className='text-2xl font-bold text-orange-500'>Services</p>
                <h2 className='text-5xl font-semibold'>Our Service Area</h2>
                <p className='w-3/4 mx-auto mt-2 mb-3'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <input className='input input-sm mx-3' ref={searchRef}  type="text" />
                <button onClick={handleSearch} className='mx-3'>Search</button>
                <button className='btn btn-outline btn-primary mb-3' onClick={()=>setAsc(!isAsc)}>{isAsc ? 'desc' : 'asc'}</button>
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