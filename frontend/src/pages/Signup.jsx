import { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import { LockClosedIcon, UserIcon, AtSymbolIcon, FingerPrintIcon } from '@heroicons/react/24/outline'

function Signup() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(0)
  const { registerUser } = useContext(AuthContext)
  const navigate = useNavigate()

  // Password strength calculator
  const calculateStrength = (pass) => {
    let strength = 0
    if (pass.match(/[A-Z]/)) strength += 1
    if (pass.match(/[a-z]/)) strength += 1
    if (pass.match(/[0-9]/)) strength += 1
    if (pass.match(/[^A-Za-z0-9]/)) strength += 1
    if (pass.length >= 8) strength += 1
    return Math.min(strength, 5)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (passwordStrength < 3) {
      alert('Password too weak! Please use a stronger password.')
      return
    }
    
    const success = await registerUser(username, email, password)
    if(success){
      navigate('/dashboard', { state: { newUser: true } })
      alert('✨Welcome✨, Registration successfull✨')
    } else {
      alert('Registration failed! Email already registered.')
    }
  }

  // Floating animation variants
  const floatingVariants = {
    float: {
      y: [-10, 10],
      transition: {
        y: {
          duration: 3,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut'
        }
      }
    }
  }

  return (
    <div className="min-h-screen pt-24 bg-black flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative backdrop-blur-lg bg-opacity-20 bg-black rounded-2xl shadow-2xl p-8 w-full max-w-md border border-cyan-500/20"
      >
        {/* Floating Particles Background */}
        <motion.div 
          variants={floatingVariants}
          animate="float"
          className="absolute -top-8 -left-8 w-16 h-16 bg-cyan-500/30 rounded-full blur-xl"
        />
        <motion.div 
          variants={floatingVariants}
          animate="float"
          className="absolute -bottom-8 -right-8 w-16 h-16 bg-purple-500/30 rounded-full blur-xl"
        />

        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            JOIN THE MVU
          </h2>
          <p className="text-gray-400 mt-2">Create your Virtual identity</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username Field */}
          <div className="group relative">
            <UserIcon className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400 group-focus-within:text-purple-400 transition-colors" />
            <input
              type="text"
              placeholder="Username"
              className="w-full pl-10 pr-4 py-3 bg-white/80 backdrop-blur-sm rounded-lg border border-cyan-500/80 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {/* Email Field */}
          <div className="group relative">
            <AtSymbolIcon className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400 group-focus-within:text-purple-400 transition-colors" />
            <input
              type="email"
              placeholder="Your-Email"
              className="w-full pl-10 pr-4 py-3 bg-white/80 backdrop-blur-sm rounded-lg border border-cyan-500/80 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div className="group relative">
            <LockClosedIcon className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400 group-focus-within:text-purple-400 transition-colors" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Your password"
              className="w-full pl-10 pr-4 py-3 bg-white/80 backdrop-blur-sm rounded-lg border border-cyan-500/80 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                setPasswordStrength(calculateStrength(e.target.value))
              }}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-cyan-400 hover:text-purple-400 transition-colors"
            >
              <FingerPrintIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Password Strength Indicator */}
          <div className="flex gap-1 h-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`flex-1 rounded-full transition-all ${i < passwordStrength ? 'bg-cyan-400' : 'bg-gray-700'}`}
              />
            ))}
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-bold text-black hover:shadow-cyan-500/30 hover:shadow-xl transition-all relative overflow-hidden"
          >
            <span className="relative z-10">SignUp Protocal</span>
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity" />
          </motion.button>

           {/* Signup Link */}
           <div className="text-center text-gray-400 text-sm">
            Already have an account?{' '}
            <Link 
              to="/login" 
              className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover:underline"
            >
              Login your account
            </Link>
            </div>
        </form>
      </motion.div>
    </div>
  )
}

export default Signup