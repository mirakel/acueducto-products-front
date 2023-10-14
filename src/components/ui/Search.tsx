import router from 'next/router';
import { useState } from 'react';

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return;

    navigateTo(`/search?q=${searchTerm}`);
  };

  const navigateTo = (url: string) => {
    router.push(url);
  };

  return (
    <form>
      <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input
          autoFocus
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => (e.key === 'Enter' ? onSearchTerm() : null)}
          type="text"
          id="default-search"
          className="block w-full p-4 pl-10 text-s border rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:text-white"
          placeholder="Buscar..."
        />
      </div>
    </form>
  );
};
