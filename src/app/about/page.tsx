import React from 'react'
import WhoWeAre from './WhoWeAre';
import OurNumbers from '../components/OurNumbers';
import { DigitalTransformation } from './DigitalTransformation';
import AboutTool from './AboutTool';
import { WeBringSkills } from './WeBringSkills';
import { AboutFounder } from './AboutFounder';

const About = () => {
  return (
    <div>
      <WhoWeAre/>
      <OurNumbers/>
      <DigitalTransformation/>
      <AboutTool/>
      <WeBringSkills/>
      <AboutFounder/>
    </div>
  )
}

export default About;
