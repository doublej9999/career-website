import { useMemo, useState } from 'react'
import { jobs } from '../../mock/jobs'

const departments = ['All', 'Engineering', 'Product', 'Data']
const types = ['All', 'Full-time', 'Internship', 'Contract']

export default function JobList() {
  const [department, setDepartment] = useState('All')
  const [type, setType] = useState('All')

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const depOk = department === 'All' || job.department === department
      const typeOk = type === 'All' || job.type === type
      return depOk && typeOk
    })
  }, [department, type])

  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold">Open positions</h1>
        <p className="mt-2 text-sm text-slate-600">Explore roles across engineering, data, and product.</p>
      </div>

      <div className="flex flex-wrap gap-4">
        <select
          value={department}
          onChange={(event) => setDepartment(event.target.value)}
          className="rounded-lg border px-3 py-2 text-sm"
        >
          {departments.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select value={type} onChange={(event) => setType(event.target.value)} className="rounded-lg border px-3 py-2 text-sm">
          {types.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-4">
        {filteredJobs.map((job) => (
          <a key={job.id} href={`/jobs/${job.id}`} className="rounded-2xl border p-5 transition hover:shadow">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs">{job.type}</span>
            </div>
            <p className="mt-2 text-sm text-slate-600">{job.summary}</p>
            <div className="mt-3 text-xs text-slate-500">
              {job.department} · {job.location}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
