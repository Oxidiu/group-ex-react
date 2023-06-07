export default function CardComponent({
  updateItem,
  deleteItem,
  index,
  content,
}) {
  return (
    <div>
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
        Delete me
      </button>
      <br />
    </div>
  );
}
