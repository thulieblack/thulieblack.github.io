import { slug } from 'github-slugger'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import ListLayout from '@/layouts/ListLayoutWithTags'
import { allBlogs } from 'contentlayer/generated'
import tagData from 'app/tag-data.json'
import { notFound } from 'next/navigation'

const POSTS_PER_PAGE = 5

export async function generateStaticParams() {
  try {
    const tagCounts = tagData as Record<string, number>
    const params: { tag: string; page: string }[] = []

    if (!tagCounts || Object.keys(tagCounts).length === 0) {
      console.warn('No tag data found. Returning empty array.')
      return []
    }

    Object.keys(tagCounts).forEach((tag) => {
      const filteredPosts = allCoreContent(
        sortPosts(
          allBlogs.filter((post) => post.tags && post.tags.map((t) => slug(t)).includes(slug(tag)))
        )
      )
      const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
      for (let i = 1; i <= totalPages; i++) {
        params.push({
          tag: slug(tag),
          page: i.toString(),
        })
      }
    })

    return params
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

export default async function TagPage({ params }: { params: { tag: string; page: string } }) {
  const tag = decodeURI(params.tag)
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)
  const pageNumber = parseInt(params.page)
  const filteredPosts = allCoreContent(
    sortPosts(allBlogs.filter((post) => post.tags && post.tags.map((t) => slug(t)).includes(tag)))
  )
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)

  if (pageNumber <= 0 || pageNumber > totalPages || isNaN(pageNumber)) {
    return notFound()
  }

  const initialDisplayPosts = filteredPosts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: totalPages,
  }

  return (
    <ListLayout
      posts={filteredPosts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title={title}
    />
  )
}
