import { useEffect, useState } from "react";
import { catchError, getGalleryItems } from "../../../utils/apiLink/apiLink";
import GalleryItem from "../../shared/GalleryItem/GalleryItem";
import './Gallery.scss'

const Gallery = () => {

  const [gallery, setGallery] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [itemsOnPage, setItemsOnPage] = useState("12")

  const [page, setPage] = useState(1)

  useEffect(() => {
    getGalleryItems(itemsOnPage, page)
    .then(galleryData => {
      setGallery(galleryData.data)
      setIsLoading(false)
    })
    .catch(catchError)

    return () => {
      setIsLoading(true)
    }

  }, [itemsOnPage, page])

  if (isLoading) {
    return <p>Loading...</p>
  }

  return ( 
    <section className="gallery_section">
    <h1>Gallery</h1>
    <div className="btn_wrapper">
    {page >= 2 && <button onClick={() => setPage(prevPage => prevPage - 1)}>previous page</button>}
    
      <button className="active_page">{page}</button>
      <button onClick={() => setPage(prevPage => prevPage + 1)}>next page</button>
      <label htmlFor="show_items_counter">items on page: </label>
      <select name="show_items_counter" id="show_items_counter" onChange={(event) => setItemsOnPage(event.target.value)}>
      <option value="12">12</option>
      <option value="24">24</option>
      <option value="36">36</option>
      <option value="48">48</option>
    </select>
    </div>
    <div className="gallery_items_wrapper">
    {gallery.map(painting => <GalleryItem key={painting.id} painting={painting}/>)}
    </div>
    </section>
  );
}

export default Gallery;