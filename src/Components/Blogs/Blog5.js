import React from 'react';

const Blog5 = () => {
    return (
        <div>
            <div className="card  glass">
                <div className="card-body">
                    <h2 className="card-title mb-3 text-2xl">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                    <div>
                        <p className='mb-5'> We can find the product by name from an array of objects by applying filter operation. The process is described by a real example below.</p>

                        <p className='mb-5'> Suppose we have an array of objects maned 'const mobiles'. then apply filter operation as follows: const desiredMobile = mobiles.filter(mobile=('arrow function')  mobile.name.includes('mobile name')) . Now the desiredMobile variable will the desired output.
                        </p>
                    </div>
                    <div className="card-actions justify-center">
                        <a href='https://www.google.com/' className="btn btn-accent text-white">Learn more!</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog5;