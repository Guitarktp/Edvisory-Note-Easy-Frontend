const DropdownList = ({categoryList, setCategoryList}) => {
    return (
        <div>
            <select 
                className="bg-slate-50" 
                onChange={(e) => setCategoryList(e.target.value)}
                value={categoryList}
            >
                <option value="personal">Personal</option>
                <option value="work">Work</option>
                <option value="study">Study</option>
                <option value="ideas">Ideas</option>
                <option value="reminders">Reminders</option>
            </select>
        </div>
    )

}

export default DropdownList;