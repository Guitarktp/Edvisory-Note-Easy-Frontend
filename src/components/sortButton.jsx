const SortButton = ({sortOption, setSortOption}) => {


  return (
    <div className="flex justify-between items-center mt-4 mb-2">
      <h2 className="text-2xl font-bold">Your Notes</h2>
      <div>
        <select
          value={sortOption}
          onChange={setSortOption}
          className="border rounded p-2"
        >
          <option value="dateDesc">Newest first</option>
          <option value="dateAsc">Oldest first</option>
          <option value="titleAsc">Name A-Z</option>
          <option value="titleDesc">Name Z-A</option>
        </select>
      </div>
    </div>
  );
};

export default SortButton
