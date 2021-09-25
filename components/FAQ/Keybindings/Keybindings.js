import ListKeysData from "./ListKeysData";
import KeysVersion from "./KeysVersion";

const Keybindings = () => {
  const updateText = "Last updated for version";
  const version = "0.7.0";

  const keysData = [
    {
      "title": "Keymapper Toggle",
      "keys": [
        {
          "key": "ctrl + p",
          "keyInfo": "Toggle keymap mode"
        },
      ]
    },
    {
      "title": "Controller Guide",
      "keys": [
        {
          "key": "CTRL + N  AND  Shift + A,X,B,Y",
          "keyInfo": "Bind"
        },
        {
          "key": "Shift + 1/2/3/4",
          "keyInfo": "Dpad"
        },
        {
          "key": "Shift + 5,6,7,8",
          "keyInfo": " L1/L2/R1/R2"
        },
        {
          "key": "Shift + 9",
          "keyInfo": "Left Stick"
        },
        {
          "key": "Ctrl + M",
          "keyInfo": "Right Stick"
        },
      ]
    }
  ];

  return (<div>
    <KeysVersion text={ updateText } version={ version } />
    <ListKeysData keysData={ keysData } />
  </div>);
};

export default Keybindings;