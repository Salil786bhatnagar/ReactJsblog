import React from 'react';
import AudioFile from '../Audio_And_Video/rookOn.mp3';

export const Audio = () => {
  return (
    <div>
      <h2>Audio</h2>
      <hr/><br/>
        <div>
           <center>
              <audio controls>
                 <source src={AudioFile} type='audio/ogg' />
              </audio>
           </center>
        </div>
    </div>
  )
}
