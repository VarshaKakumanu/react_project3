import React from 'react'
import Video from '../assert/video.mp4'
import Music from '../assert/music.mp3'

const About = () => {
  return (
    <div>
      About US
      <center>
        <video width="600px" height="400px" controls>
        <source src={Video} type="video/mp4" ></source>
        </video><br />
        <audio controls>
          <source src={Music} type="music/mp3" />
        </audio>
      </center>
    </div>
  )
}

export default About
