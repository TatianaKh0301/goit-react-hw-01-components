import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ( {title, stats} ) => {
    
    return (
        <div className={css.sectionWrap}>
            <section className={css.statistics}>
                {title && <h2 className={css.titleStatistics}>{title}</h2>}
                <ul className={css.statisticsList}>
                    { stats.map(data => (
                        <li key = {data.id} className={css.item}  style={{backgroundColor: `${getRandomHexColor()}`}}>
                            <div className={css.spanStatisticsWrap}>
                                <span className={css.label}>{data.label}</span>
                                <span className={css.percentage}>{`${data.percentage}%`}</span>
                            </div>                            
                        </li>
                    ))}   
                </ul>            
            </section>
        </div>        
    );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
})).isRequired
}

export default Statistics;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}