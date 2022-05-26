import React from 'react';

const Blog2 = () => {
    return (
        <div>
            <div className="card  glass">
                <div className="card-body">
                    <h2 className="card-title mb-3 text-2xl">What are the different ways to manage a state in a React application?</h2>
                    <div>
                        <p className='mb-5'>There are four main types of state you need to properly manage in your React apps:</p>
                        <ul className=' grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-3 list-decimal px-10 mb-5'>
                            <li>Local state</li>
                            <li>Global state</li>
                            <li>Server state</li>
                            <li>URL state</li>
                        </ul>
                        <p className='mb-5'> <span className=' font-bold'>Local state:</span>  The data we manage in one or another component.

                            In React most often it is managed  using the useState hook.

                            For example, local state could be needed to show or hide a modal component. </p>

                        <p className='mb-5'> <span className=' font-bold'>Global state:</span>  The data we manage across multiple components.

                            It is necessary when we want to get and update data anywhere in app or in multiple components at least.

                            For example, global state is authenticate user state. If a user is logged into app, it is necessary to get and change their data throughout the application.</p>

                        <p className='mb-5'> <span className=' font-bold'>Server state:</span>   Data that comes from an external server  must be integrated with UI state.

                            Server state is a simple concept, but can be hard to manage alongside all of local and global UI state.

                            There are multiple state that must be managed every time you fetch or update data from external server including loading and error state.</p>

                        <p className='mb-5'> <span className=' font-bold'>URL state:</span>  Data that exists onto URLs, including the pathname and query parameters.

                            It is often missing as a category of state, an important one indeed.
                            Often, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!</p>

                        <p>Undoubtedly there are many more pieces of state that we could identify, but these are the major categories worth focusing on to build most application.</p>

                    </div>
                    <div className="card-actions justify-center">
                        <a href='https://www.google.com/' className="btn btn-accent text-white">Learn more!</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog2;