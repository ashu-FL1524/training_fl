/*var obj = {
    name : {
        x:{
            x :  "xx",
            y : '',
        }  
    },
};
obj.name.x.y = 12 ;
console.log(obj.name.x.y); */

/* var obj = {
    name : {
         x :  "xx",
    },
};
obj.name.y = 12 ;
console.log(obj.name.y);
*/


import React from 'react';

function Hero({lapName}) {
    if(lapName === "Sony"){
        throw new Error('Not a lap!')
    }
    return(
        <div>
            {lapName}
        </div>
    )
}

export default Hero;
