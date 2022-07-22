import React from "react";
import PropTypes from 'prop-types';
import { StatisticList, StatisticsWrapper } from "./Statistics.styled";
export const Statistics = ({props, title}) => {
    function RandomBGColor() {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        let color = '#' + randomColor;
        return color;
      }
    
    return (
       
        
        <StatisticsWrapper >
        {title ? <h2>Upload stats</h2> : ''}
  
        
  <StatisticList>
    {props.map(item => <li style={{ backgroundColor: RandomBGColor() }} key={item.id}>
      <span>{item.label}</span>
      <span>{item.percentage}%</span>
    </li>)}
    
   
  </StatisticList>
</StatisticsWrapper>
    )
}

Statistics.propTypes = {
    props : PropTypes.array.isRequired
}

