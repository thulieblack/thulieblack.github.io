import { slug } from 'github-slugger'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import ListLayout from '@/layouts/ListLayoutWithTags'
import { allBlogs } from 'contentlayer/generated'
import tagData from 'app/tag-data.json'
import { notFound } from 'next/navigation'

const POSTS_PER_PAGE = 5

export const generateStaticParams = async () => {
  const tagCounts = tagData as Record<string, number>
  const params: { tag: string; page: string }[] = []

  Object.keys(tagCounts).forEach((tag) => {
    const filteredPosts = allCoreContent(
      sortPosts(
        allBlogs.filter((post) => post.tags && post.tags.map((t) => slug(t)).includes(slug(tag)))
      )
    )

    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)

    // Generate pages starting from page 2 (page 1 is handled by /tags/[tag])
    for (let i = 2; i <= totalPages; i++) {
      params.push({
        tag: slug(tag),
        page: i.toString(),
      })
    }
  })

  return params
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string; page: string }>
}) {
  const resolvedParams = await params
  const tag = decodeURI(resolvedParams.tag)
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)
  const pageNumber = parseInt(resolvedParams.page)
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
