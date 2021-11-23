import React from 'react';
import PropTypes from 'prop-types';
import './transactionHistory.scss';


function TransactionHistory({ transactions }) {
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
                {transactions.map((transaction) => {
                    const { id, type, amount, currency } = transaction;
                    return (
                        <tr key={id}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                    )
                })}
          </tbody>
        </table>
    )
};

TransactionHistory.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
};



export default TransactionHistory;