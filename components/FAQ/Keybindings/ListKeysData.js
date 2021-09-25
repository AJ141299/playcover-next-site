import KeysTitle from "./KeysTitle";
import ListKeys from "./ListKeys";

const ListKeysData = ({ keysData }) => {
  return (<div className="space-y-10">
    { keysData.map((data) => {
      return (
        <div key={ data.title }>
          <KeysTitle title={ data.title } />
          <ListKeys keys={ data.keys } />
        </div>
      );
    }) }
  </div>);
};

export default ListKeysData;