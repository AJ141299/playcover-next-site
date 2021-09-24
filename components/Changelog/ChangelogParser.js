const ChangelogParser = (props) => {

  return (
    <div>
      <ul className="text-gray-700 dark:text-gray-400 space-y-2 changelog-list list-outside list-disc pl-5 pt-1">
        { props.data.body.split("*").map((para, index) => {
          if (para.includes("- ")) {
            return para.split("- ").map((para, index) => {
              if (para) {
                return <li key={ index }>{ para }</li>;
              }
            });
          } else if (para) {
            return <li key={ index }>{ para }</li>;
          }
        }) }
      </ul>
    </div>
  );
};

export default ChangelogParser;