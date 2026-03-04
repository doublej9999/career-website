import { Outlet, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/jobs', label: 'Jobs' },
  { to: '/campus', label: 'Campus' },
  { to: '/login', label: 'Login' },
  { to: '/profile', label: 'Profile' }
]

export default function RootLayout() {
  return (
    <div className="min-h-screen">
      <header className="border-b">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="text-lg font-semibold">Career</div>
          <nav className="flex gap-5 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `transition ${isActive ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-10">
        <Outlet />
      </main>
    </div>
  )
}
