import React from 'react';

const Blog6 = () => {
    return (
        <div>
            <div className="card  glass">
                <div className="card-body">
                    <h2 className="card-title mb-3 text-2xl">What is a unit test? Why should write unit tests?</h2>
                    <div>

                        <p className='mb-5'> Unit testing is a vital step in the development process because if it is carried out  accordingly, it can help detect early flaws in code which may be more suffocated to find in later testing stages.</p>

                        <p className='mb-5'>The Prime purpose of unit testing is to isolate written code to test and determine if it performs as expected.
                        </p>



                        <p className='mb-5 font-bold'>Typically a unit test  combines three stages:
                        </p>
                        <ul className=' grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-3 list-decimal px-10 mb-5'>
                            <li>plan</li>
                            <li>cases and scripting</li>
                            <li>the unit test itself</li>
                        </ul>
                        <p className='mb-5 '>In the first step- the unit test is prepared and reviewed. The next step- test the cases and scripts to be made. Finally the code is tested.</p>
                    </div>
                    <div className="card-actions justify-center">
                        <a href='https://www.google.com/' className="btn btn-accent text-white">Learn more!</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog6;