import PropTypes from 'prop-types';
import StatisticsItem from 'components/statisticsItem/StatisticsItem';
import css from './Statistics.module.css';

const Statistics = ( {title, stats} ) => {
    
    return (
        <div className={css.sectionWrap}>
            <section className={css.statistics}>
                {title && <h2 className={css.titleStatistics}>{title}</h2>}
                <ul className={css.statisticsList}>
                    { stats.map(data => (
                        <li key = {data.id} className={css.item}  style={{backgroundColor: `${getRandomHexColor()}`}}>
                            <StatisticsItem
                                label = {data.label}
                                percentage = {data.percentage}
                            />
                        </li>
                    ))}   
                </ul>            
            </section>
        </div>
        
    );
}

Statistics.propTypes = {
  title: PropTypes.string,
}

export default Statistics;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}