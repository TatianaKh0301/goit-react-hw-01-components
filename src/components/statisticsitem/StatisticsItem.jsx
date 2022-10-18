import PropTypes from 'prop-types';

const StatisticsItem = ( {label, percentage} ) => {
    return (
        <div>
            <span class="label">{label}</span>
            <span class="percentage">{percentage}</span>
        </div>
    );
}

export default StatisticsItem;