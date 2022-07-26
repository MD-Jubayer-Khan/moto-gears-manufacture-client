import { useQuery } from 'react-query';
import Tool from './Tool';

const Tools = () => {
    const { data, isLoading} = useQuery('allTools', () => fetch('https://limitless-fjord-63635.herokuapp.com/parts')
    .then(res => res.json()))

    if(isLoading){
        return <p>Loading...</p> 
    }

    return (
        <div className=' my-10'>
        <div className='text-center'>
            <h3 className='text-primary  text-xl font-bold uppercase'>Our Parts</h3>
            <h2 className='text-4xl my-6'>Parts We Provide</h2>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-12 pb-14'>
            {
                data?.map(tool =><Tool
                    key={tool._id}
                    tool={tool}
                ></Tool>)
            }
        </div>
    </div>
    );
};

export default Tools;