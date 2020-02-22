import React, { useRef } from "react";

export const EditTodo: React.FC<{
  edit: boolean;
  onUpdated: (name: string, description: string) => {};
}> = ({ edit, onUpdated }) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (nameRef.current?.value && descriptionRef.current?.value) {
      onUpdated(nameRef.current.value, descriptionRef.current.value);
      nameRef.current.value = "";
      descriptionRef.current.value = "";
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" ref={nameRef} />
      <br />
      <textarea ref={descriptionRef}></textarea>
      <button>{edit ? "Edit Todo" : "Add Todo"}</button>
    </form>
  );
};
