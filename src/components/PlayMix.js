import React from 'react'

const PlayMix = ({playMix, id, children}) => (
    <div className='pointer' onClick={ () => playMix(id)}>
        {children}
    </div>
);

export default PlayMix;