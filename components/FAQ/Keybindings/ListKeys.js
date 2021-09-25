import Key from "./Key";
import KeyInfo from "./KeyInfo";


const ListKeys = ({ keys }) => {
  return (<ul className="list-outside list-disc ml-5">
    { keys.map((keysData) => {
      return (
        <li>
          <div className="grid grid-cols-3 gap-x-0" key={ keysData.keyInfo } >
            <KeyInfo info={ keysData.keyInfo } />
            <p className="w-10">→</p>
            <Key keyData={ keysData.key } />
          </div>
        </li>
      );
    }) }
  </ul >
  );
};

export default ListKeys;