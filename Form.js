import "./Form.css";
function Form() {
    return(
        <div>
             <div className="form-container inactive-form">
                    <form>
                    <input type="text" className="note-text" placeholder="Take a note..." />
                    <div className="form-actions">
                        <div className="tooltip">
                        <span className="material-symbols-outlined hover">check_box</span>
                        <span className="tooltip-text">New List</span>
                        </div>
                        <div className="tooltip">
                        <span className="material-symbols-outlined hover">brush</span>
                        <span className="tooltip-text">New Drawing</span>
                        </div>
                        <div className="tooltip">
                        <span className="material-symbols-outlined hover">image</span>
                        <span className="tooltip-text">New Image</span>
                        </div>
                    </div>
                    </form>
                </div>
      
      <div className="form-container active-form">
        <form className="form" id="form" >
          <input
            id="note-title"
            type="text"
            className="note-title"
            placeholder="Title" />
          <input
            id="note-text"
            type="text"
            className="note-text"
            placeholder="Take a note..."/>
          <div className="form-actions">
            <div className="icons">
              <div className="tooltip">
                <span className="material-symbols-outlined hover small-icon"
                  >add_alert</span
                >
                <span className="tooltip-text">Remind me</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover small-icon"
                  >person_add</span
                >
                <span className="tooltip-text">Collaborator</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover small-icon"
                  >palette</span
                >
                <span className="tooltip-text">Change Color</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover small-icon"
                  >image</span
                >
                <span className="tooltip-text">Add Image</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover small-icon"
                  >archive</span
                >
                <span className="tooltip-text">Archive</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover small-icon"
                  >more_vert</span
                >
                <span className="tooltip-text">More</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover small-icon"
                  >undo</span
                >
                <span className="tooltip-text">Undo</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover small-icon"
                  >redo</span
                >
                <span className="tooltip-text">Redo</span>
              </div>
            </div>
            <button className="close-btn">Close</button>
          </div>
        </form>
      </div>
        </div>
    )

}
export default Form;