import date from '../../../utils/moment';
// import './ChatBoxMessagesListDateItem.css';

const ChatBoxMessagesListDateItem = ({ seconds, textContent }: any) => {
  return (
    <li 
      className='item-block mx-auto rounded-fill font-600 font-sm'
      style={{
        background: 'var(--main)',
        color: 'white',
        padding: '4px 6px',
      }}
    >
      { textContent }
      { date(seconds, 'messegerMessageDay')}
    </li>
  );
};

export default ChatBoxMessagesListDateItem;