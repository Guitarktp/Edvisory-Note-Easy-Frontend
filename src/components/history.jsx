
import { MdClose } from "react-icons/md";

const NoteEditHistory = ({onClose, editHistory}) => {



    return (
    <div className="relative">
      <button
        className="w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-50"
        onClick={onClose}
      >
        <MdClose className="text-xl text-slate-400" />
      </button>

      <h2 className="text-lg font-bold mb-4">Edit History</h2>


      {editHistory.length > 0 ? (
        <ul className="space-y-4">
            {editHistory.map((history,index) => (
                <li key={index} className="p-4 border rounded-md">
                  <p>Edited On: {new Date(history.editedOn).toLocaleString()}</p>
                  <p>Edited By: {history.editedBy}</p>
                  <p>Title: {history.oldTitle}</p>
                  <p>Content: {history.oldContent}</p>
                  <p>Tags: {history.oldTags.join(', ')}</p>
                </li>
            ))}
        </ul>
      ):(
        <p>No edit history available.</p>
      )}
    </div>
    )
}

export default NoteEditHistory