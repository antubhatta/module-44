import PriceOption from "../PriceOption/PriceOption";




const PriceOptions = () => {
    const gymMembershipOptions = [
        {
          id: 1,
          name: 'Basic Membership',
          features: [
            'Access to gym facilities',
            'Standard workout equipment',
            'Locker room access',
            'Access to gym facilities',
          ],
          price: 29.99,
        },
        {
          id: 2,
          name: 'Premium Membership',
          features: [
            'Access to gym facilities',
            'Advanced workout equipment',
            'Locker room access',
            'Group fitness classes',
          ],
          price: 49.99,
        },
        {
          id: 3,
          name: 'Family Membership',
          features: [
            'Access to gym facilities',
            'Standard workout equipment',
            'Locker room access',
            'Childcare services',
            'Locker room access',
            'Childcare services',
          ],
          price: 69.99,
        },
       
      ];
    
      
    return (
        <div>
            <h2 className="text-3xl mt-4">Best Price in the town</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {
                gymMembershipOptions.map(priceOption=><PriceOption key={priceOption.id}priceOption={priceOption}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;