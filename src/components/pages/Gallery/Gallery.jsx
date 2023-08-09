import { useEffect, useState } from "react";
import { catchError, getGalleryItems } from "../../../utils/apiLink/apiLink";
import GalleryItem from "../../shared/GalleryItem/GalleryItem";

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
    <>
    <h1>Gallery</h1>
    {page >= 2 && <button onClick={() => setPage(prevPage => prevPage - 1)}>{page - 1}</button>}
    
    <button style={{color: "red"}}>{page}</button>
    <button onClick={() => setPage(prevPage => prevPage + 1)}>{page + 1}</button>
    <select name="show_items_counter" id="show_items_counter" onChange={(event) => setItemsOnPage(event.target.value)}>
      <option value="12">12</option>
      <option value="24">24</option>
      <option value="36">36</option>
      <option value="48">48</option>
    </select>
    {gallery.map(painting => <GalleryItem key={painting.id} painting={painting}/>)}
    </>
  );
}

export default Gallery;