import { useAuth } from '../../../hooks';
import '../../../styles/components/subcomponent/ButtonColor.subcomponent.scss';

const ButtonColor = ({ color, setTheme=null, setColor=null, setState , ...props }: any) => {

  const { updateUser } = useAuth();

  const changeTheme = (theme: any) => {
    document.documentElement.dataset.theme = theme;
    setState(theme);
    updateUser({'settings.theme': setTheme});
    setTimeout(() => {
      updateUser({'settings.color': document.documentElement.dataset.color});
    }, 1000);
  };
  
  const changeColor = (color: any) => {
    document.documentElement.dataset.color = color;
    setState(color);
    updateUser({'settings.color': setColor});
    setTimeout(() => {
      updateUser({'settings.theme': document.documentElement.dataset.theme});
    }, 1000);
  };

  return (
    <input
      className={`ButtonColor ${props.className}`}
      type="button"
      style={{
        background: color,
      }}
      onClick={() => {
        if (setTheme !== null) {
          changeTheme(setTheme);
        } else if (setColor !== null) {
          changeColor(setColor);

        }
      }}
    />
  );
};

export default ButtonColor;