import React from 'react';

const Blog1 = () => {
    // const navigate = useNavigate();
    return (
        <div>
            <div className="card  glass">
                <div className="card-body">
                    <h2 className="card-title mb-3 text-2xl">How will you improve the performance of a React Application?</h2>
                    <div>
                        <p className='mb-5'>There are Different ways to improve React app Performance which are listed below:</p>
                        <ul className=' grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-3 list-decimal'>
                            <li>Consider Server-side Rendering</li>
                            <li>Spreading props on DOM elements</li>
                            <li>Using Immutable Data Structures</li>
                            <li>Using CSS Animations Instead of JS Animations</li>
                            <li>Using Function/Stateless Components and Keeping component state local where necessary</li>
                            <li>Multiple Hunk Files</li>
                            <li>Use React.Fragments to Avoid Additional HTML Element Wrappers</li>
                            <li>Avoid Inline Function Definition in the Render Function.</li>
                            <li>Throttling and Debouncing Event Action in JavaScript</li>
                            <li>Avoid using Index as Key for map</li>
                            <li>Avoiding Props in Initial States</li>
                            <li>Use Reselect in Redux to Avoid Frequent Re-render</li>
                            <li>Using a CDN</li>
                            <li>Enable Gzip Compression on Web Server</li>
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

export default Blog1;