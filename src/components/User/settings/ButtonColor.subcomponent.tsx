import { useAuth } from '../../../hooks';
import '../../../styles/components/subcomponent/ButtonColor.subcomponent.scss';

const ButtonColor = ({ color, setTheme=null, setColor=null, setState , ...props }: any) => {

  const { updateUser } = useAuth();

  const changeTheme = (theme: any) => {
    document.documentElement.dataset.theme = theme;
    setState(theme);
    updateUser({
      'settings.theme': theme,
      'settings.color': `${theme}-${document.documentElement.dataset.color?.split('-')[1]}`,
    });
  };
  
  const changeColor = (color: any) => {
    document.documentElement.dataset.color = color;
    setState(color);
    updateUser({'settings.color': color});
    updateUser({
      'settings.color': color
    });
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