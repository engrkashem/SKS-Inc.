import React from 'react';
import exportIcon from '../../images/icons/export.png';
import review from '../../images/icons/customerReview.png';
import clients from '../../images/icons/clients.png';
import { TrendingUpIcon } from '@heroicons/react/solid'

const BusinessSummery = () => {
    return (
        <div class="stats stats-vertical lg:stats-horizontal shadow bg-transparent">

            <div class="stat">
                <div class="stat-title w-24 my-3"><TrendingUpIcon></TrendingUpIcon></div>
                <div class="stat-value">$ 20M+</div>
                <div class="">Annual Revenue</div>
            </div>

            <div class="stat">
                <div class="stat-title"><img className='w-24 my-3' src={exportIcon} alt="" /></div>
                <div class="stat-value">12 +</div>
                <div class="">Exprots Globally</div>
            </div>

            <div class="stat">
                <div class="stat-title"><img className='w-24 my-3' src={review} alt="" /></div>
                <div class="stat-value">300 +</div>
                <div >Costomers Testimony</div>
            </div>

            <div class="stat">
                <div className="stat-title"><div className="radial-progress w-24 my-3" style={{ '--value': '70', '--size': '6rem', '--thickness': '1rem' }}>80%</div></div>
                <div className="stat-value">80% +</div>
                <div >Repeat Order</div>
            </div>

            <div class="stat">
                <div class="stat-title"><img className='w-24 my-3' src={clients} alt="" /></div>
                <div class="stat-value">4.8K +</div>
                <div >Clients</div>
            </div>

        </div>
    );
};

export default BusinessSummery;