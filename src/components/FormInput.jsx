import { useState, useEffect } from "react";
import "./FormInput.css";

const FormInput = ({ onFormValidChange, onFormDataChange }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  const handleTagKeyDown = (e) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput("");
    }
  };

  const handleTagRemove = (removeTag) => {
    setTags(tags.filter((tag) => tag !== removeTag));
  };

  useEffect(() => {
    const isValid = title.trim() && description.trim() && price.trim() && tags.length > 0;
    onFormValidChange(!!isValid);
    onFormDataChange?.({ title, description, price, tags });
  }, [title, description, price, tags, onFormValidChange, onFormDataChange]);

  return (
    <div>
      <div className="input-field">
        <label className="input-field__label">상품명</label>
        <input className="input-field__input" placeholder="상품명을 입력해주세요" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div className="input-field">
        <label className="input-field__label">상품 소개</label>
        <textarea
          className="input-field__input"
          placeholder="상품 소개를 입력해주세요"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={8}
        />
      </div>

      <div className="input-field">
        <label className="input-field__label">판매가격</label>
        <input className="input-field__input" placeholder="판매 가격을 입력해주세요" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>

      <div className="input-field">
        <label className="input-field__label">태그</label>
        <input
          className="input-field__input"
          placeholder="태그를 입력해주세요"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={handleTagKeyDown}
        />
        <div className="tag-list">
          {tags.map((tag) => (
            <span className="tag-item" key={tag}>
              #{tag}
              <button className="tag-remove" onClick={() => handleTagRemove(tag)}>
                ×
              </button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormInput;
