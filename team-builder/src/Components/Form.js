
import React from 'react';




export default function Form(props) {

  const { values, update, submit } = props;

  const onChange = evt =>{
    const name = evt.target.name;

    const value = evt.target.value

    update(name,value);
  }

  const onSubmit = evt =>{
    evt.preventDefault();

    submit();
  }


    
    return (
      <form className='Form' onSubmit={onSubmit}>
        <div className='Inputs'>
          <label>Name
            <input
              type='text'
              name='name'
              value={values.name}
              placeholder='Full Name'
              maxLength='45'
              onChange={onChange}
            />
          </label>

          <label>E-mail
            <input
              type='email'
              name='email'
              value={values.email}
              maxLength='75'
              placeholder='E-mail'
              onChange={onChange}
            />
          </label>

          <label>Role
            <select value={values.role} name="role" onChange={onChange}>
              <option value=''>*Select a Role*</option>
              <option value='Backend Engineer'>Backend Engineer</option>
              <option value='Frontend Engineer'>Frontend Engineer</option>
              <option value='Designer'>Designer</option>
            </select>
          </label>
          <div className='submit'>
            <button>Submit</button>
          </div>
        </div>
      </form>
    );
  }