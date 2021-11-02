import React from 'react';
import PropTypes from 'prop-types';
import './transactionHistory.scss'



const TransactionHistory = ({transactions}) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(t => <TableRow key = {t.id} transaction = {t}/>)}
        
      </tbody>
    </table>
  )
}

const TableRow = ({transaction}) => {
  const { id, type, amount, currency } = transaction;
  return (
    <tr key = {id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  )    
}

export default TransactionHistory;