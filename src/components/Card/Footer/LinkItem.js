export default function LinkItem({ children, info, url }) {
  return(
    <a href={url} className="item" target="_blank" rel="noreferrer">
      { children }
      <span>{ info || 'No data.' }</span>
    </a>
  )
}