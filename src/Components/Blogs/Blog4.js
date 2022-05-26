import React from 'react';

const Blog4 = () => {
    return (
        <div>
            <div className="card  glass">
                <div className="card-body">
                    <h2 className="card-title mb-3 text-2xl">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h2>
                    <div>
                        <p className='mb-5'>If useState is used, it rerenders the view. Variables by themselves only change bits in memory and the state of your app can get out of sync with the view.
                        </p>

                        <p className='mb-5'> If we try to increase the counter by clicking on the button the count will not change because the react rendered the component only once and since there is no state change, it won't get re-rendered. The count will remain at 0 on-screen.</p>

                        <p className='mb-5 font-bold'>useState use cases:
                        </p>
                        <ul className=' grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-3 list-decimal px-10 mb-5'>
                            <li>State management</li>
                            <li>Conditional rendering</li>
                            <li>Toggle flags (true/false)</li>
                            <li>Counter</li>
                            <li>Get API data and store it in state</li>
                        </ul>
                    </div>
                    <div className="card-actions justify-center">
                        <a href='https://www.google.com/' className="btn btn-accent text-white">Learn more!</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog4;