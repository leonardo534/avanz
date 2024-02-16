import { QueryClient, QueryClientProvider } from 'react-query';
import { HomePage } from './components/homepage';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  );
}
