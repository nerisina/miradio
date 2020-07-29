import React from 'react';
import Mix from './Mix'

const Home = props => 
<div className='flex flex-wrap justify-between mixes ph3 ph4-l'>
    <div className='mix mb4'>
        <Mix name='Torre Cabrera by Gonzalo Mirabella' id='/gonzalo-mirabella/torre-cabrera/' {...props} />
        <Mix name='Sunset in Sicily by Gonzalo Mirabella' id='/gonzalo-mirabella/sunset-in-sicily/' {...props} />
        <Mix name='Fleshy Lingerie by Gonzalo Mirabella' id='/gonzalo-mirabella/fleshy-lingerie/' {...props} />
    </div>
</div>
;
export default Home;