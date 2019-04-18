import React from 'react';
import {Link} from '@reach/router';

const Homepage = () => {
    return (
        <div>
            <Link to={'/beverages'}>start with drinks and/or appetizers</Link>
            <p>-OR-</p>
            <p>place order</p>
        </div>
      );
}
 
export default Homepage;