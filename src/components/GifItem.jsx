
export const GifItem = ({image}) => {
  return (
    <>
        <div className="card">
            <img src={image.url} alt={image.title}></img>
            <p>{image.title}</p>
        </div>
        
    </>
  )
}
