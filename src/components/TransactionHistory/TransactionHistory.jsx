import React from 'react';

const TransactionHistory = ({transactions}) => {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(t => <TableRow transaction = {t}/>)}
        
      </tbody>
    </table>
  )
}

export default TransactionHistory;

const TableRow = ({transaction}) => {
  const { id, type, amount, currency } = transaction;
  return (
    <tr id = {id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  )    
}