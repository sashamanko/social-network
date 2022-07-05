import '../../../styles/components/subcomponent/ThemeBlock.subcomponent.scss';

const ColorBlock = ({ children }: any) => {

  

  return (
    <div className="ColorBlock item-block w-70">
      <h4 className="ml-2">Color</h4>
      <div className="ColorBlock__btn-block flex">
        {
          children
        }
      </div>
    </div>
  );
};

export default ColorBlock;