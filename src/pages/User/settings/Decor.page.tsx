import '../../../styles/pages/User/settings/Decor.page.scss';

const DecorPage = () => {
  return (
    <>
      <div className="flex">
        <div className="Theme item-block w-30 mr-1">
          <h4 className="ml-2">Theme</h4>
          <div className="Theme__btn-block flex">
            <input
              className="rounded-fill"
              style={{
                width: '40px',
                height: '40px',
                background: '#FFFFFF',
                border: 'none',
                boxShadow: '0px 0px 5px 3px #403c4336',
                cursor: 'pointer',
              }}
              type='button'
            />
            <input
              className="rounded-fill ml-1"
              style={{
                width: '40px',
                height: '40px',
                background: '#252525',
                border: 'none',
                cursor: 'pointer',
              }}
              type='button'
            />
          </div>
        </div>
        <div className="Theme item-block w-70 mr-1">
          <h4 className="ml-2">Color</h4>
          <div className="Theme__btn-block flex">
            <input
              className="rounded-fill"
              style={{
                width: '40px',
                height: '40px',
                background: '#4F11bA',
                border: 'none',
                cursor: 'pointer',
              }}
              type='button'
            />
            <input
              className="rounded-fill ml-1"
              style={{
                width: '40px',
                height: '40px',
                background: '#252525',
                border: 'none',
                cursor: 'pointer',
              }}
              type='button'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DecorPage;