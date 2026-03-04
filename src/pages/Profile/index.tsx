const applications = [
  { role: 'AI Platform Engineer', status: 'In review', date: '2026-03-02' },
  { role: 'Data Scientist', status: 'Interview', date: '2026-02-20' }
]

export default function Profile() {
  return (
    <section className="space-y-8">
      <div className="rounded-2xl border p-6">
        <h1 className="text-2xl font-semibold">My Profile</h1>
        <p className="mt-2 text-sm text-slate-600">Keep your information up to date.</p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <input className="rounded-lg border px-3 py-2 text-sm" defaultValue="J. Chen" />
          <input className="rounded-lg border px-3 py-2 text-sm" defaultValue="j.chen@email.com" />
          <input className="rounded-lg border px-3 py-2 text-sm" defaultValue="+86 138 0000 0000" />
          <input className="rounded-lg border px-3 py-2 text-sm" defaultValue="Shanghai, CN" />
        </div>
        <button className="mt-4 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
          Save changes
        </button>
      </div>

      <div className="rounded-2xl border p-6">
        <h2 className="text-lg font-semibold">My applications</h2>
        <div className="mt-4 space-y-3">
          {applications.map((app) => (
            <div key={app.role} className="flex items-center justify-between rounded-xl border px-4 py-3">
              <div>
                <p className="text-sm font-semibold">{app.role}</p>
                <p className="text-xs text-slate-500">Applied {app.date}</p>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-700">
                {app.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
