import Link from 'next/link';
import React from 'react';

const NotFound = () => (
  <div>
    <div>
      <h1>404</h1>
    </div>
    <Link href='/'>Вернуться</Link>
  </div>
);

export default NotFound;
