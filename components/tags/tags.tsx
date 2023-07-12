import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { BsArrowRight } from 'react-icons/bs'
import format from 'date-fns/format'
import { useRouter } from 'next/router'

export const Tags = ({ data, initialDisplayPosts = [], title }) => {
  const titleColorClasses = {
    blue: 'group-hover:text-blue-600 dark:group-hover:text-blue-300',
    teal: 'group-hover:text-teal-600 dark:group-hover:text-teal-300',
    green: 'group-hover:text-green-600 dark:group-hover:text-green-300',
    red: 'group-hover:text-red-600 dark:group-hover:text-red-300',
    pink: 'group-hover:text-pink-600 dark:group-hover:text-pink-300',
    purple: 'group-hover:text-purple-600 dark:group-hover:text-purple-300',
    orange: 'group-hover:text-orange-600 dark:group-hover:text-orange-300',
    yellow: 'group-hover:text-yellow-500 dark:group-hover:text-yellow-300',
  }
  const NOLABEL = '미분류'
  const tagStyle = {
    default:
      'rounded-md px-1 py-2 shadow-sm transition-all last:mb-0 hover:to-gray-50 hover:shadow-md dark:bg-gray-50 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-1000 dark:hover:to-gray-800 sm:px-1 md:px-1',
    selected:
      'rounded-md bg-gray-50 bg-gradient-to-br from-gray-50 to-gray-50 px-1 py-2 shadow-md transition-all last:mb-0 hover:to-gray-50 hover:shadow-md dark:from-gray-900 dark:to-gray-800 dark:hover:to-gray-800 sm:px-1 md:px-1',
  }

  const [searchValue, setSearchValue] = useState('')
  const router = useRouter()

  const clickTag = (tag) => {
    router.push({ query: { tag } })
    setSearchValue(tag)
  }

  React.useEffect(() => {
    if (!router.isReady) return

    // 첫 호출에는 querystring -> 첫번째 태그가 선택.
    const { tag } = router.query
    if (searchValue === '') {
      const t = tag ? tag : tags[0]
      setSearchValue(t)
    }
  }, [router.isReady])

  const tags = []
  data.map((tagData) => {
    const tagNode = tagData.node.tags
    if (tagNode != null) {
      tagNode.map((t) => {
        if (!tags.includes(t)) {
          tags.push(t)
        }
      })
    } else {
      if (!tags.includes(NOLABEL)) {
        tags.push(NOLABEL)
      }
    }
  })
  tags.sort()

  const filteredBlogPosts = data.filter((postData) => {
    const tagNode = postData.node.tags
    if (tagNode != null) {
      return tagNode.includes(searchValue)
    } else {
      return searchValue === NOLABEL
    }
  })

  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue
      ? initialDisplayPosts
      : filteredBlogPosts

  return (
    <>
      <div className="space-y-2 border-b-[3px] pt-6 pb-8 md:space-y-5">
        <h1 className="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl">
          {title}
        </h1>
      </div>
      {!tags.length && (
        <div className="my-8 text-2xl opacity-80">No Tags found.</div>
      )}
      <div className="grid grid-cols-4 grid-rows-3 gap-1 text-xs">
        {tags.map((tag) => {
          return (
            <button
              key={tag}
              className={
                tag === searchValue ? tagStyle.selected : tagStyle.default
              }
              onClick={() => clickTag(tag)}
            >
              {`#` + tag}
            </button>
          )
        })}
      </div>
      {!filteredBlogPosts.length && (
        <div className="my-8 text-2xl opacity-80">No posts found.</div>
      )}
      {displayPosts.map((postData) => {
        const post = postData.node
        const date = new Date(post.date)
        let formattedDate = ''
        if (!isNaN(date.getTime())) {
          formattedDate = format(date, 'MMM dd, yyyy')
        }
        return (
          <Link
            key={post._sys.filename}
            href={`/posts/` + post._sys.filename}
            passHref
          >
            <a
              key={post.id}
              className="group mb-8 block rounded-md bg-gray-50 bg-gradient-to-br from-gray-50 to-gray-100 px-6 py-10 shadow-sm transition-all duration-150 ease-out last:mb-0 hover:to-gray-50 hover:shadow-md dark:from-gray-900 dark:to-gray-1000 dark:hover:to-gray-800 sm:px-8 md:px-10"
            >
              <h3
                className={`title-font mb-5 text-3xl font-semibold text-gray-700 transition-all duration-150 ease-out dark:text-white lg:text-4xl`}
              >
                {post._values.title}{' '}
                <span className="inline-block opacity-0 transition-all duration-300 ease-out group-hover:opacity-100">
                  <BsArrowRight className="-mt-1 ml-1 inline-block h-8 w-auto opacity-70" />
                </span>
              </h3>
              <div className="prose mb-5 w-full max-w-none opacity-70 dark:prose-dark">
                <TinaMarkdown content={post._values.excerpt} />
              </div>
              <div className="flex items-center">
                <div className="mr-2 flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full object-cover shadow-sm"
                    src={post?.author?.avatar}
                    alt={post?.author?.name}
                  />
                </div>
                <p className="text-base font-medium text-gray-600 group-hover:text-gray-800 dark:text-gray-200 dark:group-hover:text-white">
                  {post?.author?.name}
                </p>
                {formattedDate !== '' && (
                  <>
                    <span className="mx-2 font-bold text-gray-200 dark:text-gray-500">
                      —
                    </span>
                    <p className="text-base text-gray-400 group-hover:text-gray-500 dark:text-gray-300 dark:group-hover:text-gray-150">
                      {formattedDate}
                    </p>
                  </>
                )}
              </div>
            </a>
          </Link>
        )
      })}
    </>
  )
}
