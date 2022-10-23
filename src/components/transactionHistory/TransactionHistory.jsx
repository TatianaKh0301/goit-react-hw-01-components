import PropTypes from 'prop-types';
import TransactionHistoryRow from 'components/transactionHistoryRow/transactionHistoryRow';

const TransactionHistory = ({ items }) => {
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
            {items.map(transaction => (
                <tr key={transaction.id}>
                    <TransactionHistoryRow
                        type = {transaction.type}
                        amount = {transaction.amount}
                        currency = {transaction.currency}
                    />
                </tr>
            ))}
            </tbody>
         </table>
    )
}

TransactionHistory.propTypes = {
    transaction: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    )
}

export default TransactionHistory;
