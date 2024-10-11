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
    <div className="border rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out">
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

      <p className="text-xs text-slate-600 mt-2">{content?.slice(0, 60)}</p>

      <div className="flex items-center justify-between mt-2">
        <div className="text-xs text-slate-500">
          {tags.map((item) => `#${item}`)}
        </div>

        <div className="flex items-center gap-2">
          <MdCreate
            className="icon-btn hover:text-green-600"
            onClick={onEdit}
          />      
        </div>
      </div>
    </div>
  );
};

export default NoteCard
