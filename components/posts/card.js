import styles from '../../styles/post.module.scss'
import { colors } from '../../globals/constants';
import moment from 'moment';
const categoryName = {
    anime: {
      name: '電視動畫系列', color:'blue',
    },
    movie: {
      name: '電影', color:'orange',
    },
    good: {
      name: '商品', color:'green',
    },
    app: {
      name: '應用程式', color:'purple',
    },
    game: {
      name: '遊戲', color:'rose',
    },
    event: {
      name: '活動', color:'yellow',
    },
  }

export default function Card(props) {
    const { topic, showHeader = false } = props;
    return <div key={topic.id} className={`flex flex-col ${styles.post} group bg-white drop-shadow-md rounded text-sm `}>
    {showHeader && <header className={`flex-none ${colors['bg'][categoryName[topic?.category.type].color]} text-white rounded-t`}>
      {topic?.category.name}
    </header>}
    <div className={`grow flex flex-col`}>
      <div className={`flex-none border-b-4 ${colors['border'][categoryName[topic?.category.type].color]}`}>
        <img
            src={`/assets/images/${topic.image}`}                  
            className={`group-hover:opacity-75 mx-auto object-cover w-full`}
          />
      </div>
      <div className={`grow`}>
        <p className={`m-2 text-base`}>{topic.description}</p>
      </div>
      <div className={`flex-none`}>
        <p className={`${colors['text'][categoryName[topic?.category.type].color]} text-right m-2 font-bold`}>{moment(topic.publishDate).format('L')}</p>
      </div>
    </div>
  </div>
}