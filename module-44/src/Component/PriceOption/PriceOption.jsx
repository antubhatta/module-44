import Feature from "../Feature/Feature";


const PriceOption = ({priceOption}) => {
    const {name,price,features}=priceOption
    return (
        <div className="bg-blue-700 flex flex-col rounded-lg p-5 mx-6 lg:mx-0 text-white">
            <h1 className="mb-6 text-center">
                <span className="text-5xl font-extrabold">{price}</span>
                <span className="text-2xl">/mon</span>
            </h1>
            <h2 className="text-2xl text-center mb-6">{name}</h2>
            <div className="flex-grow">
                {
                    features.map((item,idx)=><Feature key={idx} feature={item}></Feature>)
                }
            </div>
            <button className="mt-10 bg-green-500 w-full text-center py-3 rounded-xl hover:bg-green-900">Buy Now</button>
        </div>
    );
};

export default PriceOption;