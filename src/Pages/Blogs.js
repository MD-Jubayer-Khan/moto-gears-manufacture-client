import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-28 lg:ml-96 text-white'>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                 <div className="card-body bg-secondary items-center text-center">
                     <h2 className="card-title font-bold text-2xl">How will you improve the performance of a React Application?</h2>
                     <p>Image result for How will you improve the performance of a React Application? To optimize React rendering, you need to make sure that components receive only necessary props. It will let you control the CPU consumption and avoid over-rendering unnecessary features. The solution is to create a functional component that will collect all props and redistribute them to other components.

                     </p>
                 </div>
            </div> 
                 

            <div className="card lg:max-w-lg bg-base-100 shadow-xl my-4">
                 <div className="card-body bg-primary items-center text-center">
                     <h2 className="card-title font-bold text-2xl">What are the different ways to manage a state in a React application?</h2>
                     <p>There are four main types of state you need to properly manage in your React apps:
                     <br />
                      01.Local state. <br />
                       02.Global state. <br /> 
                       03.Server state. <br /> 
                       04.URL state.
                     </p>
                 </div>
            </div> 

            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                 <div className="card-body bg-secondary items-center text-center">
                     <h2 className="card-title font-bold text-2xl">How does prototypical inheritance work?</h2>
                     <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                 </div>
            </div> 

            <div className="card lg:max-w-lg bg-base-100 shadow-xl my-4">
                 <div className="card-body bg-primary items-center text-center">
                     <h2 className="card-title font-bold text-2xl">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h2>
                     <p>One should never update the state directly because If you update it directly, calling the setState() afterward may just replace the update you made. When you directly update the state, it does not change this.</p>
                 </div>
            </div> 

            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                 <div className="card-body bg-secondary items-center text-center">
                     <h2 className="card-title font-bold text-2xl">What is a unit test? Why should write unit tests?</h2>
                     <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                 </div>
            </div> 
        </div>

                
    );
};

export default Blogs;