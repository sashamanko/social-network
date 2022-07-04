import { useAuth } from '../../../hooks';
import '../../../styles/components/subcomponent/ButtonColor.subcomponent.scss';

const ButtonColor = ({ color, setTheme=null, setColor=null, setState , ...props }: any) => {

  const { updateUser } = useAuth();

  const changeTheme = (theme: any) => {
    document.documentElement.dataset.theme = theme;
    setState(theme);
    setTimeout(() => {
      updateUser({'settings.theme': setTheme});
      updateUser({'settings.color': document.documentElement.dataset.color});
    }, 1000);
  };
  
  const changeColor = (color: any) => {
    document.documentElement.dataset.color = color;
    setState(color);
    setTimeout(() => {
      updateUser({'settings.color': setColor});
      updateUser({'settings.theme': document.documentElement.dataset.theme});
    }, 1000);
  };

  return (
    <input
      className={`${setTheme !== null ? 'ButtonTheme' : 'ButtonColor'} ${props.className}`}
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