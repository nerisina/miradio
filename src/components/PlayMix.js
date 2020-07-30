import React from 'react'

const PlayMix = ({playMix, id, currentMix, children}) => (
    <div className={`pointer ${id === currentMix && 'playing'}`} onClick={ () => playMix(id)}>
        {children}
    </div>
);

export default PlayMix;