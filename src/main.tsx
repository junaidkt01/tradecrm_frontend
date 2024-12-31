import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    
      <BrowserRouter>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        <App />
      </BrowserRouter>
    
  </QueryClientProvider>,
)
