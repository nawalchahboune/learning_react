import React, { FormEvent } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FieldValues, useForm } from "react-hook-form";
import "./Form.css";
import { z } from "zod";

const Form = () => {
  const schema = z.object({
    name: z.string().min(3, { message: "Please enter at least 3 characters" }),
    age: z.number({invalid_type_error:"should enter a number"}).min(16, { message: "min value must be 16" }),
  });
  type FormData = z.infer<typeof schema>;
  // const nameRef = useRef<HTMLInputElement>(null);

  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();
  // };
  // interface FormData {
  //   name: string;
  //   age: number;
  // }

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  console.log(isValid);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label ">
          Name
        </label>
        <input
          // id="name"
          // ref={nameRef}
          {...register("name")}
          type="text"
          className="form-control input"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
        {/* {errors.name?.type === "minLength" && (
          <p className="text-danger">
            the name field must conatain more than 3 caracters
          </p>
        )} */}

        <label htmlFor="age" className="form-label ">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          //  id="age"
          type="number"
          className="form-control input"
        />
        {/* {errors.age?.type === "required" && (
          <p className="text-danger">the age field is required</p>
        )}
        {errors.age?.type === "min" && (
          <p className="text-danger">the age must be gretter than 0</p>
        )} */}
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
        <button  type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
