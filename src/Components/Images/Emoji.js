import React from 'react';
import styled from '@emotion/styled';
const Emoji = props => (
    <Wave
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </Wave>
);
export default Emoji;



const Wave = styled.span`


animation-name: wave-animation;  
  animation-duration: 2.5s;        
  animation-iteration-count: infinite;  
  transform-origin: 70% 70%;       
  display: inline-block;
  @keyframes wave-animation {
    0% { transform: rotate( 0.0deg) }
   10% { transform: rotate(14.0deg) }  
   20% { transform: rotate(-8.0deg) }
   30% { transform: rotate(14.0deg) }
   40% { transform: rotate(-4.0deg) }
   50% { transform: rotate(10.0deg) }
   60% { transform: rotate( 0.0deg) }  
  100% { transform: rotate( 0.0deg) }
}


`;