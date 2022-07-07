// import './Decor.page.scss';

import { useEffect, useState } from "react";
import { Button, Input } from "../../../components/ui";
import { useAuth, useInput } from "../../../hooks";

const ProfilePage = () => {

  const { displayName, updateUser } = useAuth();

  const [displayNameBind, displayNameValue, displayNameReset] = useInput(displayName);
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    if (displayNameValue !== displayName) {
      if (!isChange) {
        setIsChange(true);
      }
    }
  }, [displayNameValue]);

  return (
    <div className="item-block">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e);
          
          updateUser({
            'displayName': displayNameValue,
          });
        }}
      >
        <label className="flex align-center">
          <span
            className="mr-1"
            style={{
              whiteSpace: 'nowrap'
            }}
          >
            Display name:
          </span>
          <Input
            {...displayNameBind}
            name='displayName'
            type="text"
            variant='primary'
            style={{
              maxWidth: 300,
            }}
          />
        </label>
        { isChange &&
          <Button variant='primary' type='submit'>Save</Button>
        }
      </form>
    </div>
  );
};

export default ProfilePage;