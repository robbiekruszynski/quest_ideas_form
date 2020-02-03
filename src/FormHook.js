import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";

function FormValidate() {
  const {
    register,
    handleSubmit,
    errors,
    setError,
    clearError,
    formState: { isSubmitting }
  } = useForm();
  const onSubmit = data => {
    alert(JSON.stringify(data));
  };
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  const validateUserName = async value => {
    await sleep(1000);
    if (value !== "bill") {
      setError("username", "validate");
    } else {
      clearError("username");
    }
  };

  return (
    <form className="App" onSubmit={handleSubmit(onSubmit)}>
      <h1>Your Quest Idea!</h1>
      <label>First Name:</label>
      <input name="firstName" ref={register({ required: true })} />

      <label>Last Name:</label>
      <input name="lastName" ref={register({ required: true, minLength: 2 })} />

      <label>Email</label>
      <input
        name="email"
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />

      <label>Quest Idea</label>
      <textarea name="idea" ref={register} />

      <input disabled={isSubmitting} type="submit" />
    </form>
  );
}

export default FormValidate;
