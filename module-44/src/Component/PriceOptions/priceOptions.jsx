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
          ],
          price: 69.99,
        },
        {
          id: 4,
          name: 'Student Membership',
          features: [
            'Access to gym facilities',
            'Standard workout equipment',
            'Locker room access',
            'Valid student ID required',
          ],
          price: 19.99,
        },
      ];
    
      
    return (
        <div>
            <h2 className="text-3xl text-center mt-4">Best Price in the town</h2>
            {
                gymMembershipOptions.map(priceOption=><PriceOption key={priceOption.id}priceOption={priceOption}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;