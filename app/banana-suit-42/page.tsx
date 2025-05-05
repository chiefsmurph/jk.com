'use client';
import { useState } from 'react';
import { useQuery, useMutation, QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function AdminPanel() {
  const [password, setPassword] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [amount, setAmount] = useState(1);

  const codesQuery = useQuery({
    queryKey: ['codes'],
    queryFn: () => fetch('/api/list').then(res => res.json()),
    enabled: unlocked,
  });

  const mutation = useMutation({
    mutationFn: (count: number) =>
      fetch('/api/generate', {
        method: 'POST',
        body: JSON.stringify({ count }),
        headers: { 'Content-Type': 'application/json' },
      }).then(res => res.json()),
    onSuccess: () => codesQuery.refetch(),
  });

  const login = () => {
    if (password === 'alphabetsoup') setUnlocked(true);
  };

  return (
    <div className="panel">
      {!unlocked ? (
        <>
          <input
            type="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Admin Password"
          />
          <button className="button" onClick={login}>Login</button>
        </>
      ) : (
        <>
          <h2>Admin Panel</h2>
          <input
            type="number"
            className="input"
            value={amount}
            min={1}
            onChange={(e) => setAmount(parseInt(e.target.value))}
          />
          <button className="button" onClick={() => mutation.mutate(amount)}>Generate Codes</button>
          <h3>All Codes</h3>
          <ul>
            {codesQuery.data?.map((c: any, i: number) => (
              <li key={i}>
                {c.value} - {c.redeemed ? `✅ ${c.user?.name}` : '❌ not redeemed'}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default function AdminPageWrapper() {
  return (
    <QueryClientProvider client={queryClient}>
      <AdminPanel />
    </QueryClientProvider>
  );
}