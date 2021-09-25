const Legal = ({ data }) => {
  return (
    <div className="space-y-8">
      { data.map((data) => {
        return (
          <div className="space-y-1">
            <h1 className="font-medium text-2xl">{ data.title }</h1>
            <ul className="list-disc list-outside pl-5 pt-2 space-y-2">
              { data.content.map((text) => {
                return (
                  <li>{ text }</li>
                );
              }) }
            </ul>
          </div>
        );
      })
      }
    </div>
  );
};

export default Legal;