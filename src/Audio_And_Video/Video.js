import React from 'react';
import VideoFile from '../Audio_And_Video/Badshah.mp4';
export const Video = () => {
  return (
    <div>
      <h2>Video</h2>
      <hr/><br/>
        <div>
           <center>
               <video controls width='500' height='450'>
                   <source src={VideoFile} type="video/mp4" />
               </video>
           </center>
        </div>
    </div>
  )
}
