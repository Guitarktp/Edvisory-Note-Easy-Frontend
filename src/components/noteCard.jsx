import { MdOutlinePushPin } from "react-icons/md";
import { MdCreate, MdOutlineHistory } from "react-icons/md";

const NoteCard = ({
  title,
  date,
  content,
  tags,
  author,
  editHistory,
  onEdit,
  category,
}) => {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h6 className="text-lg font-medium">{title}</h6>
          <span className="font-semibold text-xs">Created at</span>
          <span className="text-xs text-slate-500">
            {new Date(date).toLocaleString()}
          </span>

          <br />
          <span className="font-semibold text-xs">Author</span>
          <span className="text-xs text-slate-500">{author}</span>

          <br />
          <span className="font-semibold text-xs">Category</span>
          <span className="text-xs text-slate-500">{category}</span>
        </div>
        <MdOutlineHistory className="mt-1 icon-btn" onClick={editHistory} />
      </div>
    </div>
  );
};

export default NoteCard
