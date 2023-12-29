import { useState } from "react";
import "./Input.css";

export const Input = () => {
  const { date, setDate } = useState("");
  const { name, setName } = useState("");
  const { author, setAuthor } = useState("");
  const { description, setDescription } = useState("");

  return (
    <div className="input">
      <h1>Добавить фото</h1>
      <h3>Дата:</h3>
      <input type="date" onChange={(e) => setDate(e.target.value)} />
      <h3>Название:</h3>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <h3>Автор:</h3>
      <input type="text" onChange={(e) => setAuthor(e.target.valuer)} />
      <h3>Описание:</h3>
      <input type="text" onChange={(e) => setDescription(e.target.value)} />
      <h3>Фото:</h3>
      <button>Выберите файл</button>
      <button className="create">Создать</button>
    </div>
  );
};
