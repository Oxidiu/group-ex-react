export default function CardComponent({
  index,
  content,
  updateItem,
  deleteItem,
}) {
  return (
    <div>
      <input type="text" value={content} onChange={(event) => updateItem(index, event.target.value)}/>
      <button onClick={() => deleteItem(index)}>Delete me</button>
      <br />
    </div>
  );
}
