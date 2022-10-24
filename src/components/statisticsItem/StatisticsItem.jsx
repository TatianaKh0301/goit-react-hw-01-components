import PropTypes from 'prop-types';
import css from './StatisticsItem.module.css';

const StatisticsItem = ( {label, percentage} ) => {
    return (
        <div className={css.spanStatisticsWrap}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{`${percentage}%`}</span>
        </div>
    );
}

StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

export default StatisticsItem;