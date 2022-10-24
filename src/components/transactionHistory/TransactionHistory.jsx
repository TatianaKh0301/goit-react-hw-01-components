import PropTypes from 'prop-types';
import TransactionHistoryRow from 'components/transactionHistoryRow/transactionHistoryRow';
import css from './transactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transactionhistory}>
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
    ).isRequired,
}

export default TransactionHistory;
