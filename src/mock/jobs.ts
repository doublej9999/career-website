export type Job = {
  id: string
  title: string
  location: string
  department: string
  type: 'Full-time' | 'Internship' | 'Contract'
  summary: string
}

export const jobs: Job[] = [
  {
    id: 'ai-platform-engineer',
    title: 'AI Platform Engineer',
    location: 'Shanghai, CN',
    department: 'Engineering',
    type: 'Full-time',
    summary: 'Build scalable ML platform components for enterprise clients.'
  },
  {
    id: 'product-manager-enterprise',
    title: 'Enterprise Product Manager',
    location: 'Beijing, CN',
    department: 'Product',
    type: 'Full-time',
    summary: 'Own the roadmap for mission-critical AI platform capabilities.'
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    location: 'Shenzhen, CN',
    department: 'Data',
    type: 'Full-time',
    summary: 'Deliver analytics and insights that power customer success.'
  },
  {
    id: 'campus-frontend-intern',
    title: 'Frontend Intern',
    location: 'Hangzhou, CN',
    department: 'Engineering',
    type: 'Internship',
    summary: 'Work with senior engineers to build delightful UX.'
  }
]
