import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { catchError, getPaintingDetails } from "../../../utils/apiLink/apiLink";

import defaultImg from '../../../assets/img/error.jpg'

const PaintingDetails = () => {

  const [paintingDetails, setPaintingDetails] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const paintingId = useParams().id

  const navigator = useNavigate()

  useEffect(() => {
    getPaintingDetails(paintingId)
    .then(paintingData => {
      setPaintingDetails(paintingData.data)
      setIsLoading(false)
    })
    .catch(catchError)
  }, [])

  if (isLoading) {
    return <p>Loading...</p>
  }

  const imgLink = paintingDetails.image_id ? `https://www.artic.edu/iiif/2/${paintingDetails.image_id}/full/843,/0/default.jpg` : defaultImg

  return ( 
    <section className="detailed_painting">
      <img src={imgLink} alt={paintingDetails.title} />
      <h2>{paintingDetails.title}</h2>
      <h3>{paintingDetails.artist_title}</h3>
      <p>{`finished ${paintingDetails.date_end}`}</p>
      <p>{paintingDetails.place_of_origin}</p>
      <p>{paintingDetails.style_title}</p>
      <p>{paintingDetails.artwork_type_title}</p>
    <button onClick={() => navigator(-1)}>Back to Gallery</button>
    </section>
  );
}

export default PaintingDetails;