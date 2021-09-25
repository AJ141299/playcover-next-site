const ListTeam = ({ icon, role, name }) => {
  return (
    <div>
      <div className="flex items-center space-x-1">
        <div className="pb-[2px]">{ icon }</div>
        <div className="flex flex-wrap items-center space-x-4">
          <h1 className="pl-[2px] font-semibold text-lg">{ role }</h1>
          <h2>{ name }</h2>
        </div>
      </div>
    </div>
  );
};

export default ListTeam;