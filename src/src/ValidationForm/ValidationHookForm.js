import React from 'react';
import { useForm } from 'react-hook-form';

function ValidationHook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
      Name:&nbsp;<input type="text" {...register('name', { required: true })} placeholder="enter your name" /><br/>
      <span>{errors.name && <p>name is required.</p>}</span>
      </div>
      <div>
      Last Name:&nbsp;<input type="text" {...register('lastName', { required: true })} placeholder="enter your last name" /><br/>
      <span>{errors.lastName && <p>Last name is required.</p>}</span>
      </div>
      <div>
      Age:&nbsp;<input {...register('age', { pattern: /\d+/ })} />
      <span>{errors.age && <p>Please enter number for age.</p>}</span>

      </div>

      <div>
      Email:&nbsp;<input type="email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} placeholder="enter your email" /><br/>
      <span>{errors.email && <p>Email is required.</p>}</span>
      </div>

     <div>
        <input type='submit' value='sumit' />
     </div>
      
    </form>
  );
}

export default ValidationHook; 