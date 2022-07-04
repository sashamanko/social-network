import { useEffect, useState } from 'react';
import ButtonColor from '../../../components/User/settings/ButtonColor.subcomponent';
import ColorBlock from '../../../components/User/settings/ColorBlock.component copy';
import ThemeBlock from '../../../components/User/settings/ThemBlock.component';
import { useAuth } from '../../../hooks';
import '../../../styles/pages/User/settings/Decor.page.scss';

const DecorPage = () => {

  const [theme, setTheme] = useState(document.documentElement.dataset.theme);
  const [color, setColor] = useState(document.documentElement.dataset.color);

  const { settings } = useAuth();

  useEffect(() => {
    document.documentElement.dataset.theme = settings.theme;
    document.documentElement.dataset.color = `${settings.theme}-${color?.split('-')[1]}`;
  }, [theme]);

  return (
    <>
      <div className="flex">
        
        <ThemeBlock>
          {
            theme === 'white' &&
            <ButtonColor
              className="rounded-fill"
              color='#252525'
              setTheme='dark'
              setState={setTheme}
            />
          }
          {
            theme === 'dark' &&
            <ButtonColor
              className="rounded-fill"
              color='#FFFFFF'
              setTheme='white'
              setState={setTheme}
            />
          }
        </ThemeBlock>
        <ColorBlock>
          {
            theme === 'white' &&
            <>
              <ButtonColor
                className="rounded-fill"
                color='#4F11ba'
                setColor='white-purple'
                setState={setColor}
              />
              <ButtonColor
                className="rounded-fill"
                color='#0e77b0'
                setColor='white-blue'
                setState={setColor}
              />
            </>
          }
          {
            theme === 'dark' &&
            <>
              <ButtonColor
                className="rounded-fill"
                color='#A26AF6'
                setColor='dark-purple'
                setState={setColor}
              />
              <ButtonColor
                className="rounded-fill"
                color='#57a7dd'
                setColor='dark-blue'
                setState={setColor}
              />
            </>
          }
        </ColorBlock>

      </div>
    </>
  );
};

export default DecorPage;