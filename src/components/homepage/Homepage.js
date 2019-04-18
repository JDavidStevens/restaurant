import React from 'react';
import {Link} from '@reach/router';

const Homepage = () => {
    return (
        <div>
            <Link to={'/beverages'}>Begin Order</Link>            
        </div>
      );
}
 
export default Homepage;