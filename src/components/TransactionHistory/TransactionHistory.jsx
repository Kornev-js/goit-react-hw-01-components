import React from "react";
import { StatisticLine, StatisticTable } from "./TransactionHistory.styled";
import PropTypes from 'prop-types'; 


export const TransactionHistory = ({data}) => {
   
    return (
        <StatisticTable className="transaction-history">
            <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
           {data.map(item => 
    <StatisticLine key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </StatisticLine>
  )} 
      </tbody>  
      </StatisticTable>)
       
    
}

