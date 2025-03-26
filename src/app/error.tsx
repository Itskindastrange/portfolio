'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">Oops!</h1>
        <p className="text-xl mb-4">Something went wrong.</p>
        <button
          onClick={reset}
          className="text-primary hover:underline mb-4 block mx-auto"
        >
          Try again
        </button>
        <Link href="/" className="text-primary hover:underline">
          Return Home
        </Link>
      </div>
    </div>
  );
} 