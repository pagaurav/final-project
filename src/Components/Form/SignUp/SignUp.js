import React from 'react'
import './SignUp.css'
import { useFormik } from 'formik';
import * as Yup from 'yup'

const initialValues = {
	firstname: '',
	lastname: '',
	username: '',
	password: '',
	dateofbirth: ''
}

const validationSchema = Yup.object().shape({
	firstname: Yup.string()
		.min(2, 'firstname must be at least 6 characters')
		.max(20, 'firstname must not exceed 20 characters')
		.required('firstname is required'),
	lastname: Yup.string()
		.min(2, 'lastname must be at least 6 characters')
		.max(20, 'lastname must not exceed 20 characters')
		.required('lastname is required'),
	username: Yup.string()
		.email('Invalid UserName')
		.required('Required UserName'),
	password: Yup.string()
		.required('Required Password'),
	dateofbirth: Yup.date()
		.required()

});

export default function SignUp() {

	const singupFormSubmit = (values) => {

		fetch('http://localhost:8000/user',{
        method:"POST",
				headers : {
					"Content-Type" : "application/json"
				},
        body:{"name":"dksjhf"}
      }).then((res)=>{
				return res.json();
      }).catch((err)=>{
        console.log(err.message)
      })
		console.log(values)
	}

	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: validationSchema,
		onSubmit: () => {singupFormSubmit(formik.values)}
	})

	return (
		<div className='signup-box'>
			<section>
				<span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
				<div className='signup'>
					<div className="content">

						<form onSubmit={formik.handleSubmit}>
							<h2>Sign Up</h2>
							<div className="form">
								<div className="inputBox">
									<input type="text" name='firstname' onChange={formik.handleChange} value={formik.values.firstname} placeholder='Ex.virat' /><i>FirstName</i>
									<p className='error'>{formik.errors.firstname}</p>
								</div>
								<div className="inputBox">
									<input type="text" name='lastname' onChange={formik.handleChange} value={formik.values.lastname} placeholder='Ex.kohli' /> <i>LastName</i>
									<p className='error'>{formik.errors.lastname}</p>
								</div>
								<div className="inputBox">
									<input type="text" name='username' onChange={formik.handleChange} value={formik.values.username} placeholder='Ex.xyz@gmail.com' /> <i>Username</i>
									<p className='error'>{formik.errors.username}</p>
								</div>
								<div className="inputBox">
									<input type="password" name='password' onChange={formik.handleChange} value={formik.values.password} placeholder='Ex.Pass@123' /> <i>Password</i>
									<p className='error'>{formik.errors.password}</p>
								</div>
								<div className="inputBox">
									<input type="date" name='dateofbirth' onChange={formik.handleChange} value={formik.values.dateofbirth} /> <i>Date Of Birth</i>
									<p className='error'>{formik.errors.dateofbirth}</p>
								</div>
								<div className="inputBox">
									<input type="submit" value="Sign Up" />
								</div>
							</div>
						</form>
					</div>
				</div>
			</section>

		</div>
	)
}
