import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../Shared/Loader';
import ReviewCard from './ReviewCard';


const Reviews = () => {
    //load reviews from database
    const { data: reviews, isLoading } = useQuery('allReviews', () => {
        // const url = `http://localhost:5000/review`;
        const url = `https://agile-badlands-34653.herokuapp.com/review`;

        return fetch(url)
            .then(res => res.json())
    });

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5'>

            {reviews.map(review => <ReviewCard
                key={review._id}
                review={review}
            ></ReviewCard>)}

        </div>
    );
};

export default Reviews;