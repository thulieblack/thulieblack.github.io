import { writeFileSync } from 'fs'
import { slug } from 'github-slugger'
import { allBlogs } from '../.contentlayer/generated/index.mjs'

/**
 * Count the occurrences of all tags across blog posts and write to json file
 */
async function createTagCount(allBlogs) {
  const tagCount = {}
  allBlogs.forEach((file) => {
    if (file.tags && file.draft !== true) {
      file.tags.forEach((tag) => {
        const formattedTag = slug(tag)
        if (formattedTag in tagCount) {
          tagCount[formattedTag] += 1
        } else {
          tagCount[formattedTag] = 1
        }
      })
    }
  })
  writeFileSync('./app/tag-data.json', JSON.stringify(tagCount, null, 2))
  console.log('Tag data generated successfully!')
}

// Generate tag data
await createTagCount(allBlogs)
