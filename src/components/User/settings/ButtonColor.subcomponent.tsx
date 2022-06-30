import { useAuth } from '../../../hooks';
import '../../../styles/components/subcomponent/ButtonColor.subcomponent.scss';

const ButtonColor = ({ color, setTheme=null, setColor=null, setState , ...props }: any) => {

  const { updateUser } = useAuth();

  const changeTheme = (theme: any) => {
    document.documentElement.dataset.theme = theme;
    setState(theme);
    updateUser({'settings.theme': setTheme});
  };
  
  const changeColor = (color: any) => {
    document.documentElement.dataset.color = color;
    setState(color);
    updateUser({'settings.color': setColor});
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
          setTimeout(() => {
            updateUser({'settings.color': document.documentElement.dataset.color});
          }, 1000);
        } else if (setColor !== null) {
          changeColor(setColor);
          setTimeout(() => {
            updateUser({'settings.theme': document.documentElement.dataset.theme});
          }, 1000);
        }
      }}
    />
  );
};

export default ButtonColor;