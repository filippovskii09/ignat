import React from 'react'
import { useForm } from 'react-hook-form';

const PromoForm = () => {

	const {register, handleSubmit, reset, formState: { errors }} = useForm()
	const onSubmit = (data) => {
		console.log(data);

		reset()
	}

  return (
	<form onSubmit={handleSubmit(onSubmit)} noValidate action="#" className={`promo__form ${errors.email && "promo__form-error"}`}>
		<input 
			{...register("email", { 
				required: 'Email is required',
				pattern: {
					value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
					message: 'Invalid email address'
				}
			})} 
			placeholder="введіть" 
			type="email" 
			name="email" 
			className={`promo__input ${errors.exampleRequired && "promo__input-error"}`} />
		{/* {errors.email && <p className='promo__error'>This field is required</p>} */}
		{errors.email && <p className="error-message promo__error">{errors.email.message}</p>}
		<button type="submit" className="promo__button">Підписатись</button>
	</form>
  )
}

export default PromoForm
