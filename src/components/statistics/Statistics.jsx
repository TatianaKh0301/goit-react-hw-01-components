import PropTypes from 'prop-types';
import StatisticsList from 'components/statisticsList/StatisticsList';

const Statistics = ( {stats} ) => {
    
    return (
        <section className="statistics">
            <h2 className="title">Upload stats</h2>
            <StatisticsList 
                stats = {stats}
            />            
        </section>
    );
}

Statistics.propTypes = {
  title: PropTypes.string,
}
export default Statistics;