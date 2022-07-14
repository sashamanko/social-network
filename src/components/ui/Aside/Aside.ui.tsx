import './Aside.ui.scss';

const Aside = ({ className, children }: any): JSX.Element => {
  return (
    <aside className={'Aside ' + className}>
      <ul className="list-none">
        {
          children
        }
      </ul>
    </aside>
  );
};

export default Aside;