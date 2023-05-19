import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'
import ActiveMenuContext from '../../context/ActiveMenuContext'

const VideosCard = props => {
  const {videoDetails} = props
  const {
    thumbnailUrl,
    channel,
    viewCount,
    title,
    id,
    publishedAt,
  } = videoDetails
  let videoPostedAt = formatDistanceToNow(new Date(publishedAt))
  const videoPostedAtList = videoPostedAt.split(' ')
  console.log(videoPostedAtList)
  if (videoPostedAtList.length === 3) {
    videoPostedAtList.shift()
    videoPostedAt = videoPostedAtList.join(' ')
  }
  console.log(videoPostedAt)
  return (
    <>
      <li>hiee</li>
    </>
  )
}
export default VideosCard
