import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import cuid from 'cuid';
import { addSmurf } from '../actions/index';
import { connect } from 'react-redux';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .required('The smurf must have a name'),
  age: Yup.number()
    .min(1, 'Age must be at least 1')
    .positive('Age must be a positive number')
    .required('The smurf must have an age'),
  height: Yup.string()
    .required('The smurf must have a height')
});

const AddSmurfForm = (props) => {
  const { register, handleSubmit, errors } = useForm({ validationSchema: validationSchema });

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    props.addSmurf({
      name: name,
      age: age,
      height: height,
      id: cuid()
    });
    setName('');
    setAge('');
    setHeight('');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" ref={register} />
        {errors.name && (
          <span>{errors.name.message}</span>
        )}
      </div>

      <div>
        <label htmlFor="age">Age</label>
        <input id="age" name="age" type="text" ref={register} />
        {errors.age && (
          <span>{errors.age.message}</span>
        )}
      </div>

      <div>
        <label htmlFor="height">Height</label>
        <input id="height" name="height" type="text" ref={register} />
        {errors.height && (
          <span>{errors.height.message}</span>
        )}
      </div>

      <button type="submit">Add Smurf</button>
    </form>
  );
};

export default connect(null, { addSmurf })(AddSmurfForm)