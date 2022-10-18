import PropTypes from 'prop-types';

const StatisticsItem = ( {label, percentage} ) => {
    return (
        <div>
            <span class="label">{label}</span>
            <span class="percentage">{percentage}</span>
        </div>
    );
}

StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

export default StatisticsItem;