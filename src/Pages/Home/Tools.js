import React from 'react';
import Tool from './Tool';

const Tools = () => {
    const tools = [
        {
          "_id": "124e13b9-2d54-4b2f-a74d-a77b362d6ead",
          "name": "CNC key",
          "text": "For YAMAHA NMAX 150 2015-2019. For YAMAHA NMAX 125 2015-2019. Product material: CNC aluminum alloy. Reminder: This is only a key cover, does not contain the ...",
          "price": 699,
          "qty":100,
          "availableQty": 351,
          "img": "https://ae01.alicdn.com/kf/Hce357a18942243b4a8752fc36908cb75T/Universal-Motorcycle-Accessories-CNC-Key-Cap-Creative-Product-Key-Case-Auto-Accessories-for-Yamaha-Fzs-Fz600.jpg_Q90.jpg_.webp"
        },
        {
            "_id": "4b2f-a74d-a77b362d6ead",
            "name": "Front shock absorber",
            "text": "Motorcycle shock absorber compatible with most vehicles. Easy to install and remove. Made of superior quality iron, waterproof, shockproof, ...",
            "price": 799,
            "qty":100,
            "availableQty": 751,
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ejRhqM7KYNc9INIbsCrbzQ4U-FbqyGjuUQ&usqp=CAU"
          },
          {
            "_id": "124e13b9-2d54-4b2f",
            "name": "Protector Kit",
            "text": "Our complete DIY Motorcycle Kits are perfect for any garage Custom Motorcycle Built Project. We specialize in creating one off bikes, built for the rider.",
            "price": 1500,
            "qty":100,
            "availableQty": 551,
            "img": "https://ae01.alicdn.com/kf/HTB1.c3MOVXXXXb6aFXXq6xXFXXXa/Injection-ABS-Complete-Fairings-For-BMW-S1000RR-2010-Year-10-ABS-Plastic-Motorcycle-Fairing-Kit-White.jpg"
          }
    ]

    return (
        <div className='my-28 mx-12'>
        <div className='text-center'>
            <h3 className='text-primary  text-xl font-bold uppercase'>Our Parts</h3>
            <h2 className='text-4xl my-12'>Parts We Provide</h2>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                tools.map(tool =><Tool
                    key={tool._id}
                    tool={tool}
                ></Tool>)
            }
        </div>
    </div>
    );
};

export default Tools;