import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext/firebaseContext'
import { doPasswordReset } from '../../firebase/auth'

const ForgotPassword = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [isProcessing, setIsProcessing] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    const { userLoggedIn } = useAuth()

    const errorMessages = {
        'auth/invalid-email': 'Please enter a valid email address.',
        'auth/user-not-found': 'No user found with this email address.',
        'auth/network-request-failed': 'Network error, please try again.',
        'default': 'Something went wrong. Please try again.'
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        if (!isProcessing) {
            setIsProcessing(true)
            setErrorMessage('')
            setSuccessMessage('')
            try {
                await doPasswordReset(email)
                setSuccessMessage('Password reset link has been sent to your email.')
            } catch (error) {
                const friendlyMessage = errorMessages[error.code] || errorMessages['default'];
                setErrorMessage(friendlyMessage);
            }
            setIsProcessing(false)
        }
    }

    return (
        <>
            {userLoggedIn && (<Navigate to={'/'} replace={true} />)}

            <main className="w-full h-screen flex self-center place-content-center place-items-center">
                <div className="w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl">
                    <div className="text-center mb-6">
                        <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">Forgot Password</h3>
                    </div>
                    <form
                        onSubmit={onSubmit}
                        className="space-y-4"
                    >
                        <div>
                            <label className="text-sm text-gray-600 font-bold">
                                Email
                            </label>
                            <input
                                type="email"
                                autoComplete='email'
                                required
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                            />
                        </div>

                        {errorMessage && (
                            <span className='text-red-600 font-bold'>{errorMessage}</span>
                        )}

                        {successMessage && (
                            <span className='text-green-600 font-bold'>{successMessage}</span>
                        )}

                        <button
                            type="submit"
                            disabled={isProcessing}
                            className={`w-full px-4 py-2 text-white font-medium rounded-lg ${isProcessing ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300'}`}
                        >
                            {isProcessing ? 'Processing...' : 'Send Reset Link'}
                        </button>
                    </form>
                </div>
            </main>
        </>
    )
}

export default ForgotPassword
