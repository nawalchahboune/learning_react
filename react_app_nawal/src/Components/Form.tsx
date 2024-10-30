import React, { FormEvent } from "react";
import { useRef } from "react";
import "./Form.css";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log(nameRef.current ? nameRef.current.value : nameRef.current);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label label">
          Name
        </label>
        <input
          id="name"
          ref={nameRef}
          type="text"
          className="form-control input"
        />

        <label htmlFor="age" className="form-label label">
          Age
        </label>
        <input id="age" type="number" className="form-control input" />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
