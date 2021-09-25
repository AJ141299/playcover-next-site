const ListTranslators = ({ data }) => {
  return (
    <div className="flex space-x-4">
      <ul className="font-semibold text-md">
        { data.map((data) => {
          return (
            <li className="flex space-x-4" key={ data.language }>
              <span>{ data.language }</span>
            </li>
          );
        }) }
      </ul>
      <ul>
        { data.map((data) => {
          return (
            <li className="flex space-x-4" key={ data.language }>
              <span>{ data.translator }</span>
            </li>
          );
        }) }
      </ul>
    </div>
  );
};

export default ListTranslators;