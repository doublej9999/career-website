# Project Structure

```
src
├── api            # API clients and request wrappers
├── assets         # Static assets (images, icons)
├── components     # Reusable UI components
├── hooks          # Custom React hooks
├── layouts        # Layout shells (nav, footer)
├── pages          # Route-level pages
│   ├── Home
│   ├── JobList
│   ├── JobDetail
│   ├── Campus
│   ├── Login
│   └── Profile
├── router         # React Router configuration
├── store          # Zustand stores
├── mock           # Mock data sources
├── utils          # Helper utilities
├── App.tsx        # App entry
└── main.tsx       # React root
```

## Key Files
- `src/router/index.tsx` - routing map
- `src/layouts/RootLayout.tsx` - nav + outlet shell
- `src/mock/jobs.ts` - mock jobs dataset
