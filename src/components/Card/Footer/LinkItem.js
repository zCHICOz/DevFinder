export default function LinkItem({ children, info, url }) {
  return(
    <a
      href={url ? url : '#'}
      className="item"
      target={url ? '_blank' : '_parent'}
      rel="noreferrer"
    >
      { children }
      <span>{ info || 'No data.' }</span>
    </a>
  )
}