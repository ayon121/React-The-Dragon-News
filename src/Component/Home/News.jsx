
import PropTypes from 'prop-types';

const News = ({ news }) => {
    const { title, thumbnail_url,details } = news
    return (
        <div>
            <h1 className='text-2xl py-3 px-4'>{title}</h1>
            <div className='w-4/5 mx-auto'>
                <img className='w-full' src={thumbnail_url} alt="" />
            </div>
            <p className='text-sm font-extralight text-slate-500 py-3 px-2'>{details}</p>
        </div>
    );
};

News.propTypes = {
    news: PropTypes.object
};

export default News;