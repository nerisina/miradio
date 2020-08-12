import React from "react";
import PlayButton from './PlayButton';
import PlayMix from './PlayMix'
const Archive = ({mixes, ...props}) => (
  <ul className="list p10 archive">
    {mixes.map((mix) => (
      <li className="ph3 ph4-1">
          <PlayMix {...props} id="mix.key">
            <div className="pc3 bb b--light-gray flex justify-between intems-center">
            <h1>{mix.name}</h1>
            <PlayButton />
            </div>
            </PlayMix>
      </li>
    ))}
  </ul>
);

export default Archive;
