import PropTypes from 'prop-types';
import StatisticsItem from 'components/statisticsItem/StatisticsItem';

const StatisticsList = ({stats}) => {
    return (
        <ul className="stat-list">
            { stats.map(data => (
                <li key = {data.id} className="item">
                    <StatisticsItem
                        label = {data.label}
                        percentage = {data.percentage}
                    />
            </li>
            ))}            
        </ul>
    )
}

StatisticsList.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    )
}

export default StatisticsList;

