import { useState } from 'react'

export default function Login() {
  const [mode, setMode] = useState<'login' | 'register'>('login')

  return (
    <section className="mx-auto max-w-md space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">{mode === 'login' ? 'Welcome back' : 'Create account'}</h1>
        <p className="mt-2 text-sm text-slate-600">Manage your applications and saved jobs.</p>
      </div>

      <div className="rounded-2xl border p-6">
        <div className="flex gap-2">
          <button
            className={`flex-1 rounded-full px-4 py-2 text-sm ${
              mode === 'login' ? 'bg-slate-900 text-white' : 'border'
            }`}
            onClick={() => setMode('login')}
          >
            Login
          </button>
          <button
            className={`flex-1 rounded-full px-4 py-2 text-sm ${
              mode === 'register' ? 'bg-slate-900 text-white' : 'border'
            }`}
            onClick={() => setMode('register')}
          >
            Register
          </button>
        </div>

        <form className="mt-6 space-y-4">
          {mode === 'register' && (
            <input className="w-full rounded-lg border px-3 py-2 text-sm" placeholder="Full name" />
          )}
          <input className="w-full rounded-lg border px-3 py-2 text-sm" placeholder="Email" />
          <input
            className="w-full rounded-lg border px-3 py-2 text-sm"
            placeholder="Password"
            type="password"
          />
          <button className="w-full rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white">
            {mode === 'login' ? 'Sign in' : 'Create account'}
          </button>
        </form>
      </div>
    </section>
  )
}
