import PropTypes from 'prop-types';
import { TransactionsTable } from "./style"




export default function TransactionHistory({items}) {
    return (

        
        <TransactionsTable>
            
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead><tbody>
  {items.map(({id, type, amount, currency}) => ( 
  
    <tr key={id} className='table-string'>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
   
  ))}
 </tbody>
</TransactionsTable>
    )
} 

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string,
        })
    )
}