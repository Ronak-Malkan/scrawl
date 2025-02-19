import React, { useState } from 'react';
import "../../style/settings.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form";
import ChangeTheme from "./changeTheme";
import ChangePassword from "./changePassword";
import ChangeName from "./changeName";

function Settings (): JSX.Element {
   const navigate = useNavigate();

   const [settingsForm, setForm] = useState(0);

   const updatePassword = <ChangePassword/>;
   const updateName = <ChangeName/>
   const theme = <ChangeTheme/>

   function setFormState (whichForm: number) {
      if (whichForm == 0) {
         console.log("In 0");
         setForm(0);
      }
      else if (whichForm == 1) {
         console.log("1");
         setForm(1);
      }
      else if (whichForm == 2) {
         setForm(2);
      }
   }


   function changeForm () : JSX.Element {
      console.log("in here");
      if (settingsForm == 0) {
         console.log("In return 1");
         return updatePassword;
      }
      else if (settingsForm == 1) {
         console.log("In return 2");
         return updateName;
      }
      else if (settingsForm == 2) {
         console.log("In return 3");
         return theme;
      }
      else {
         return updatePassword;
      }
   }


   return (
      <div className="settingsContainer">
         <div className='heading'>
            <strong>
               Settings
            </strong>
            <button className='icon' onClick={() => navigate(`/home`)}><FontAwesomeIcon className="icons" icon={faHouse} /></button>
         </div>
         <div className='settings'>
                <button className='settingList' onClick={() => setFormState(0)}>Update Password</button>
                <button className='settingList' onClick={() => setFormState(1)}>Update Name</button>
                <button className='settingList' onClick={() => setFormState(2)}>Theme</button>
         </div>
         {
            changeForm()
         }
      </div>
   );
} 

export default Settings;