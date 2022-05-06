import React from 'react';
import DiscountItem from './DiscountItem/DiscountItem';
import Items from './Items/Items';
import TermsCondiotions from './TermsConditons/TermsCondiotions';


//stackoverflow question link: https://stackoverflow.com/questions/72133000/how-can-i-fixed-this-issue

const Home = () => {
    return (
        <div>
            <Items/>
            <DiscountItem/>
            <TermsCondiotions/>
        </div>
    );
};

export default Home;