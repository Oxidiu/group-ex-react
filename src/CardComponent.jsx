import "./Login.css"

export default function CardComponent({
  content,
  index,
  updateItem,
  deleteItem,
  loggedIn
}) {
  return (
    <div  className={loggedIn === true ? "": "hidden"}>
      <input
        type="text"
        value={content}
        onChange={(ev) => {
          updateItem(index, ev.target.value);
        }}
      />
      <button
        onClick={() => {
          deleteItem(index);
        }}
      >
        Delete Me
      </button>
      <br />
    </div>
  );
}
