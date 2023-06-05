import "./note.style.css";
const Note = ({ note }) => {
  const { noteContent, noteTitle, createdAt } = note[0];

  const createdAt1 = new Date(createdAt).toLocaleString();
  console.log(createdAt1);

  console.log(noteContent);
  return (
    <div class="container bootstrap snippets bootdey">
      <div class="row">
        <ul class="notes">
          <li>
            <div class="rotate-1 lazur-bg">
              <small>{createdAt1}</small>
              <h4>{noteTitle}</h4>
              <p>{noteContent}</p>
              <a href="#" class="text-danger pull-right">
                <i class="fa fa-trash-o "></i>
              </a>
            </div>
          </li>
          <li>
            <div class="rotate-2 red-bg">
              <small>12:03:28 12-04-2014</small>
              <h4>Awesome date</h4>
              <p>
                The years, sometimes by accident, sometimes on purpose (injected
                humour and the like).
              </p>
              <a href="#" class="text-danger pull-right">
                <i class="fa fa-trash-o "></i>
              </a>
            </div>
          </li>
          <li>
            <div class="rotate-1 yellow-bg">
              <small>12:03:28 12-04-2014</small>
              <h4>Awesome project</h4>
              <p>
                The years, sometimes by accident, sometimes on purpose (injected
                humour and the like).
              </p>
              <a href="#" class="text-danger pull-right">
                <i class="fa fa-trash-o "></i>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Note;
