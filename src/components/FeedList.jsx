import Feed from './Feed';
import { motion, AnimatePresence } from 'framer-motion';
import './FeedList.css';
function FeedList({ feeds, HandleDelete }) {
  if (feeds.length === 0) {
    return <h4 className='nothing'>you dont have any reviews</h4>;
  }
  return (
    <div className='feed-list'>
      <AnimatePresence>
        {feeds.map((item) => (
          <motion.div
            key={item.id}
            initial={{ x: '50%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0, height: 0,padding: 0 }}

          >
            <Feed
              HandleDelete={() => HandleDelete(item.id)}
              key={item.id}
              text={item.text}
              rate={item.rate}
            />
          </motion.div>
        ))}
      </AnimatePresence>

    </div>
  );
}

export default FeedList;
