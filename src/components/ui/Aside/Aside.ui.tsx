import './Aside.ui.scss';

const Aside = ({ children }: any): JSX.Element => {
  return (
    <aside className="Aside ml-1">
      <ul className="list-none">
        {
          children
        }
      </ul>
    </aside>
  );
};

export default Aside;