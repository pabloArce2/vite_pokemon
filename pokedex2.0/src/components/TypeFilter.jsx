import React from "react";


export default function TypeFilter({ typesList, onTypeChange, onSelectAll, onDeselectAll }) {

  const [allChecked, setAllChecked] = React.useState(true);

  const handleAllChange = () => {
    if (allChecked) {
      onDeselectAll();
    } else {
      onSelectAll();
    }
    setAllChecked(!allChecked);
  };

  return (
    <div>
      <p className="font-semibold text-lg">Filtrar por tipo:</p>

      {typesList.map((type) => (
        <label className = "flex flex-row items-center border p-1 mb-1" key={type.name}>
            <p className="first-letter:uppercase text-lg">{type.name}</p>
            <input
              type="checkbox"
              className="ml-auto"
              value={type.name}
              checked={type.selected}
              onChange={() => onTypeChange(type.name)}
            />
        </label>
      ))}

      <div className="flex py-2 px-1">
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" onChange={handleAllChange} checked={allChecked}/>
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Seleccionar todos</span>
        </label>
      </div>
    </div>
  );
}
