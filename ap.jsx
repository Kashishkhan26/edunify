import { useState } from 'eact';
import { useForm } from 'eact-hook-form';
import axios from 'axios';

const AddSchool = () => {
  const { register, handleSubmit, errors } = useForm();
  const [image, setImage] = useState(null);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('address', data.address);
    formData.append('city', data.city);
    formData.append('state', data.state);
    formData.append('contact', data.contact);
    formData.append('email_id', data.email_id);
    formData.append('image', image);

    try {
      const response = await axios.post('/api/addSchool', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Add School</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name:</label>
        <input type="text" {...register('name', { required: true })} />
        {errors.name && <p>Name is required</p>}

        <label>Address:</label>
        <input type="text" {...register('address', { required: true })} />
        {errors.address && <p>Address is required</p>}

        <label>City:</label>
        <input type="text" {...register('city', { required: true })} />
        {errors.city && <p>City is required</p>}

        <label>State:</label>
        <input type="text" {...register('state', { required: true })} />
        {errors.state && <p>State is required</p>}

        <label>Contact:</label>
        <input type="number" {...register('contact', { required: true })} />
        {errors.contact && <p>Contact is required</p>}

        <label>Email ID:</label>
        <input type="email" {...register('email_id', { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })} />
        {errors.email_id && <p>Email ID is invalid</p>}

        <label>Image:</label>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        {errors.image && <p>/Image is required</p>}

        <button type="submit">Add School</button>
      </form>
    </div>
  );
};

export default AddSchool;