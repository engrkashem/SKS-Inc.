import React from 'react';

const Blog3 = () => {
    return (
        <div>
            <div className="card  glass">
                <div className="card-body">
                    <h2 className="card-title mb-3 text-2xl">How does prototypical inheritance work?</h2>
                    <div>
                        <p className='mb-5'>JavaScript itself a Object Oriented programming language that rely on prototype-based. After the ECMA-Script-6 updates, JavaScript allowing “prototypal inheritance”, that means any objects or methods can be shared, extended and copied.
                        </p>

                        <p className='mb-5'>Sharing amid objects enables easy inheritance of structure, behavior and state.</p>

                        <p className='mb-5'>JavaScript is the most common among prototype-capable languages and its capabilities are relatively unique. Prototypical inheritance in JavaScript is a powerful tool that can save hours of coding if it is used appropriately.</p>
                    </div>
                    <div className="card-actions justify-center">
                        <a href='https://www.google.com/' className="btn btn-accent text-white">Learn more!</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog3;