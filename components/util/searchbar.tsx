interface ListLayoutProps {
  title: string
  searchYn: boolean
  searchValue: string
  listener: any
}

export default function SearchBar({
  title,
  searchYn,
  searchValue,
  listener,
}: ListLayoutProps) {
  return (
    <div className="space-y-2 border-b-[3px] pt-6 pb-8 md:space-y-5">
      <h1 className="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl">
        {title}
      </h1>
      <div className="relative max-w-lg">
        {searchYn && (
          <>
            <label>
              <span className="sr-only">Search posts</span>
              <input
                aria-label="Search posts"
                type="text"
                id="searchbar_input"
                onChange={(e) => listener(e.target.value)}
                value={searchValue}
                placeholder="Search posts"
                className="focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
              />
            </label>
            {/* <svg
              className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14"
              />
            </svg> */}
            <button onClick={() => listener('')}>
              <img
                className="absolute right-3 top-3 h-5 w-5"
                src="/icons8-x-64.png"
              />
            </button>
          </>
        )}
      </div>
    </div>
  )
}
