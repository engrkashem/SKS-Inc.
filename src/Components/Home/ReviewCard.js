import { StarIcon } from '@heroicons/react/solid';
import React from 'react';
import bgReviewcard from '../../images/bgReviewCard.jpg';


const ReviewCard = ({ review: { description, rating, reviewer } }) => {
    return (
        <div className="card  bg-base-100 shadow-xl image-full" >
            <figure><img src={bgReviewcard} alt="review" /></figure>
            <div className="card-body ">
                <p className=' text-center mb-10'>{description}</p>
                <div>
                    <h2 className="card-title">{reviewer}</h2>
                    <p className=' flex items-center'><span>Ratings: ({rating}) </span> <StarIcon className=' text-orange-600 w-5'></StarIcon><StarIcon className=' text-orange-600 w-5'></StarIcon><StarIcon className=' text-orange-600 w-5'></StarIcon><StarIcon className=' text-orange-600 w-5'></StarIcon><StarIcon className=' text-orange-600 w-5'></StarIcon></p>
                </div>

            </div>
        </div>
    );
};

export default ReviewCard;