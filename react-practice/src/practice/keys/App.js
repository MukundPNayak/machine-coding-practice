import { useState } from "react";

const initialItems = [
  { id: 1, text: "Apple" },
  { id: 2, text: "Banana" },
  { id: 3, text: "Cherry" },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  const deleteFirst = () => {
    setItems((prev) => prev.slice(1));
  };

  const deleteItem = (index) => {
    setItems((prev) => prev.filter((_, pos) => pos !== index));
  };

  return (
    <div style={{ padding: 20 }}>
      <button onClick={deleteFirst}>Delete first item</button>

      <ul>
        {items.map((item, index) => (
          // 🔁 TRY changing key from index → item.id
          <li key={index}>
            <input defaultValue={item.text}  />
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
