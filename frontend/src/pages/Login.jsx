import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserIcon, LockClosedIcon, FingerPrintIcon } from '@heroicons/react/24/outline';

function Login() {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isSuccess = await login(username, password);
    if (!isSuccess) {
      setError('Neuro-Authentication Failed! Invalid credentials');
    } else {
      setError('');
      navigate('/dashboard');
    }
  };

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
            ACCESS THE MVU
          </h2>
          <p className="text-gray-400 mt-2">Authenticate your Virtual identity</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username Field */}
          <div className="group relative">
            <UserIcon className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400 group-focus-within:text-purple-400 transition-colors" />
            <input
              type="text"
              placeholder="Neuro-Username"
              className="w-full pl-10 pr-4 py-3 bg-white/90 backdrop-blur-sm rounded-lg border border-cyan-500/80 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div className="group relative">
            <LockClosedIcon className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400 group-focus-within:text-purple-400 transition-colors" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Encryption Key"
              className="w-full pl-10 pr-4 py-3 bg-white/90 backdrop-blur-sm rounded-lg border border-cyan-500/80 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

          {/* Error Message */}
          {error && (
            <div className="text-red-400 text-sm text-center animate-pulse">
              ⚠️ {error}
            </div>
          )}

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-bold text-black hover:shadow-cyan-500/30 hover:shadow-xl transition-all relative overflow-hidden"
          >
            <span className="relative z-10">Login Protocal</span>
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity" />
          </motion.button>

          {/* Signup Link */}
          <div className="text-center text-gray-400 text-sm">
            You have not an account?{' '}
            <Link 
              to="/signup" 
              className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover:underline"
            >
              Create your account
            </Link>
          </div>

          {/* Additional Auth Options */}
          <div className="text-center text-gray-400 text-sm">
            — or authenticate with —
          </div>
          <div className="flex justify-center gap-4">
            <button className="p-2 rounded-full bg-black/30 border border-cyan-500/30 hover:border-purple-500/50 transition-colors">
              <img src="/neuro-github.svg" className="w-6 h-6" alt="GitHub" />
            </button>
            <button className="p-2 rounded-full bg-black/30 border border-cyan-500/30 hover:border-purple-500/50 transition-colors">
              <img src="/neuro-google.svg" className="w-6 h-6" alt="Google" />
            </button>
            <button className="p-2 rounded-full bg-black/30 border border-cyan-500/30 hover:border-purple-500/50 transition-colors">
              <img src="/neuro-wallet.svg" className="w-6 h-6" alt="Wallet" />
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default Login;