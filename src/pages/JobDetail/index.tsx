import { useParams } from 'react-router-dom'
import { jobs } from '../../mock/jobs'

export default function JobDetail() {
  const { id } = useParams()
  const job = jobs.find((item) => item.id === id)

  if (!job) {
    return <div className="text-slate-600">Role not found.</div>
  }

  return (
    <section className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-widest text-slate-500">{job.department}</p>
        <h1 className="mt-2 text-3xl font-semibold">{job.title}</h1>
        <p className="mt-2 text-sm text-slate-600">
          {job.location} · {job.type}
        </p>
      </div>

      <div className="rounded-2xl border p-6">
        <h2 className="text-lg font-semibold">Role overview</h2>
        <p className="mt-2 text-sm text-slate-600">{job.summary}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border p-6">
          <h3 className="text-sm font-semibold">Responsibilities</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Design and ship customer-facing features.</li>
            <li>Collaborate with product and data teams.</li>
            <li>Own code quality and system stability.</li>
          </ul>
        </div>
        <div className="rounded-2xl border p-6">
          <h3 className="text-sm font-semibold">Qualifications</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>3+ years of relevant experience.</li>
            <li>Strong communication and teamwork.</li>
            <li>Passion for enterprise AI products.</li>
          </ul>
        </div>
      </div>

      <div className="rounded-2xl border bg-slate-50 p-6">
        <h3 className="text-lg font-semibold">Ready to apply?</h3>
        <p className="mt-2 text-sm text-slate-600">Submit your resume and we will be in touch.</p>
        <button className="mt-4 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white">
          Apply now
        </button>
      </div>
    </section>
  )
}
