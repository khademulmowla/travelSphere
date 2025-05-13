import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import useAuth from '../../hooks/useAuth'
import { TbFidgetSpinner } from 'react-icons/tb'
import { imageUpload, saveUser } from '../../api/utils'
import toast from 'react-hot-toast'
import { useState } from 'react'

const SignUp = () => {
    const { createUser, updateUserProfile, googleSignIn, loading } = useAuth()
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);
    // form submit handler
    const handleSubmit = async (event) => {
        event.preventDefault();
        setSuccess(false);
        setErrorMessage('');

        const form = event.target;
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value;
        const image = form.image.files[0];

        // Validation checks

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrorMessage('Please enter a valid email address.');
            return;
        }

        if (password.length < 6) {
            setErrorMessage('Password should be at least 6 characters long.');
            return;
        }

        if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
            setErrorMessage('Password must contain at least one uppercase and one lowercase letter.');
            return;
        }

        if (!/\d/.test(password)) {
            setErrorMessage('Password must contain at least one number.');
            return;
        }

        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            setErrorMessage('Password must contain at least one special character.');
            return;
        }

        try {
            const photoURL = await imageUpload(image);

            const result = await createUser(email, password);

            await updateUserProfile(name, photoURL);

            // Save user data
            await saveUser({ ...result?.user, displayName: name, photoURL });

            navigate('/');
            toast.success('Signup Successful');
            setSuccess(true);
        } catch (err) {
            console.log(err);
            toast.error(err?.message);
            setSuccess(false);
        }
    };


    // Handle Google Signin
    const handleGoogleSignIn = async () => {
        try {
            const data = await googleSignIn()
            await saveUser(data?.user)

            navigate('/')
            toast.success('Signup Successful')
        } catch (err) {
            console.log(err)
            toast.error(err?.message)
        }
    }
    return (
        <div className='flex justify-center items-center min-h-screen bg-white'>
            <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                <div className='mb-8 text-center'>
                    <Link className='underline' to='/'>Back to Home →</Link>
                    <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
                    <p className='text-sm text-gray-400'>Welcome to TravelSphere</p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    noValidate=''
                    action=''
                    className='space-y-6 ng-untouched ng-pristine ng-valid'
                >
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm text-left'>
                                Name
                            </label>
                            <input
                                type='text'
                                name='name'
                                id='name'
                                placeholder='Enter Your Name Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-gray-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <label htmlFor='image' className='block mb-2 text-sm text-left'>
                                Select Image:
                            </label>
                            <input
                                required
                                type='file'
                                id='image'
                                name='image'
                                accept='image/*'
                                className='block text-left'
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm text-left'>
                                Email address
                            </label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                required
                                placeholder='Enter Your Email Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-gray-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <label htmlFor='password' className='text-sm mb-2 text-left'>
                                    Password
                                </label>
                            </div>
                            <input
                                type='password'
                                name='password'
                                autoComplete='new-password'
                                id='password'
                                required
                                placeholder='*******'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-gray-500 bg-gray-200 text-gray-900'
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type='submit'
                            className='bg-gray-700 w-full rounded-md py-3 text-white'
                        >
                            {loading ? (
                                <TbFidgetSpinner className='animate-spin m-auto' />
                            ) : (
                                'Continue'
                            )}
                        </button>
                    </div>
                </form>
                {
                    errorMessage && <p className="text-red-500 text-center px-3 py-1">{errorMessage}</p>
                }
                {
                    success && <p className="text-green-600 text-center">Successfully login</p>
                }
                <div className='flex items-center pt-4 space-x-1'>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    <p className='px-3 text-sm dark:text-gray-400'>
                        Signup with social accounts
                    </p>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                </div>
                <div
                    onClick={handleGoogleSignIn}
                    className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
                >
                    <FcGoogle size={32} />

                    <p>Continue with Google</p>
                </div>
                <p className='px-6 text-sm text-center text-gray-400'>
                    Already have an account?{' '}
                    <Link
                        to='/login'
                        className='hover:underline hover:text-gray-700 text-gray-500'
                    >
                        Login
                    </Link>
                    .
                </p>
            </div>
        </div>
    )
}

export default SignUp