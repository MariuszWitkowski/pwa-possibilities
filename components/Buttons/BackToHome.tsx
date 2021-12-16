import React from 'react';

import Link from 'next/link';

export const BackToHome = () => (
  <Link href="/">
    <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
      Back to home
    </a>
  </Link>
);
