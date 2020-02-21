import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { addSmurf } from '../actions/index';
import { connect } from 'react-redux';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .required('The smurf must have a name'),
  age: Yup.number()
    .required('The smurf must have an age'),
  height: Yup.string()
    .required('The smurf must have a height')
});

const AddSmurfForm = (props) => {
  const { register, handleSubmit, errors } = useForm({ validationSchema: validationSchema });

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');

  const onSubmit = () => {
    let newAge = parseInt(age);
    props.addSmurf({
      name: name,
      age: newAge,
      height: height
    });
    setName('');
    setAge('');
    setHeight('');
  };

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onAgeChange = (event) => {
    setAge(event.target.value);
  };

  const onHeightChange = (event) => {
    setHeight(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-input">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" ref={register} onChange={onNameChange} />
        {errors.name && (
          <span>{errors.name.message}</span>
        )}
      </div>

      <div className="form-input">
        <label htmlFor="age">Age</label>
        <input id="age" name="age" type="text" ref={register} onChange={onAgeChange} />
        {errors.age && (
          <span>{errors.age.message}</span>
        )}
      </div>

      <div className="form-input">
        <label htmlFor="height">Height</label>
        <input id="height" name="height" type="text" ref={register} onChange={onHeightChange} />
        {errors.height && (
          <span>{errors.height.message}</span>
        )}
      </div>

      <button type="submit">Add Smurf</button>
    </form>
  );
};

export default connect(null, { addSmurf })(AddSmurfForm)