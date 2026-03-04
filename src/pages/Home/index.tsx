const stats = [
  { label: 'Open Roles', value: '128+' },
  { label: 'Cities', value: '26' },
  { label: 'Countries', value: '8' },
  { label: 'New Grads', value: '2,000+' }
]

const values = [
  {
    title: 'Mission-driven',
    desc: 'Build products that move the needle for global enterprises.'
  },
  {
    title: 'Growth culture',
    desc: 'Ownership, speed, and continuous learning are the default.'
  },
  {
    title: 'Best teams',
    desc: 'Work alongside experts in AI, cloud, and product engineering.'
  }
]

export default function Home() {
  return (
    <section className="space-y-12">
      <div className="rounded-3xl border bg-gradient-to-r from-slate-900 to-slate-700 p-10 text-white">
        <p className="text-sm uppercase tracking-widest text-slate-200">Join us</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
          Create impact at the next-generation enterprise AI company
        </h1>
        <p className="mt-4 max-w-2xl text-slate-200">
          We build intelligent platforms for global enterprises. Explore roles across product, data,
          engineering, and business teams.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900"
            href="/jobs"
          >
            Explore jobs
          </a>
          <a className="rounded-full border border-white/40 px-5 py-2 text-sm" href="/campus">
            Campus hiring
          </a>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border p-6">
            <p className="text-2xl font-semibold">{stat.value}</p>
            <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {values.map((value) => (
          <div key={value.title} className="rounded-2xl border p-6">
            <h3 className="text-lg font-semibold">{value.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{value.desc}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border bg-slate-50 p-8">
        <h2 className="text-2xl font-semibold">Life at Career</h2>
        <p className="mt-3 text-sm text-slate-600">
          Flexible working, learning budget, and a culture of radical candor. We care about
          well-being as much as performance.
        </p>
      </div>
    </section>
  )
}
