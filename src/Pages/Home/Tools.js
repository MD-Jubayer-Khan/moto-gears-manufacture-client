import React, { useEffect, useState } from 'react';
// import { useQuery } from 'react-query';
import Tool from './Tool';

const Tools = () => {
    // const { data: tools, isLoading } = useQuery('allTools', () => fetch('http://localhost:5000/parts')
    // .then(res => res.json()))

    // if(isLoading){
    //     return <p>Loading...</p> 
    // }
    const [tools, setTools] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/parts')
        .then(res => res.json())
        .then(data => setTools(data))
    })

    return (
        <div className=' my-10'>
        <div className='text-center'>
            <h3 className='text-primary  text-xl font-bold uppercase'>Our Parts</h3>
            <h2 className='text-4xl my-12'>Parts We Provide</h2>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-12 pb-14'>
            {
                tools?.map(tool =><Tool
                    key={tool._id}
                    tool={tool}
                ></Tool>)
            }
        </div>
    </div>
    );
};

export default Tools;