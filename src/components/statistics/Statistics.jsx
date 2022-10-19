import PropTypes from 'prop-types';
import StatisticsItem from 'components/statisticsitem/StatisticsItem';

const Statistics = ( {stats} ) => {
    
    return (
        <section className="statistics">
        <h2 className="title">Upload stats</h2>
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
    </section>
    );
}

Statistics.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    )
}

export default Statistics;