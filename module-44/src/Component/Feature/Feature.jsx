import { FaCheck } from 'react-icons/fa'

const Feature = ({feature}) => {
    return (
        <div >
            <p className='flex items-center gap-2 mx-5 text-base'><FaCheck></FaCheck>{feature}</p>
        </div>
    );
};

export default Feature;