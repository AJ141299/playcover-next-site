import KeybindingsVersion from "./KeybindingsVersion";

const Keybindings = () => {
  const updateText = "Last updated for version";
  const version = "0.7.0";

  return (<div>
    <KeybindingsVersion text={ updateText } version={ version } />
  </div>);
};

export default Keybindings;