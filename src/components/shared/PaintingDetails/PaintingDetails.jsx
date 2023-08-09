import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { catchError, getPaintingDetails } from "../../../utils/apiLink/apiLink";
import './PaintingDetails.scss'

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
      <h2>{paintingDetails.title}</h2>
      <img src={imgLink} alt={paintingDetails.title} />
      <div className="information_wrapper">
        <h3>By</h3>
        <h3>{paintingDetails.artist_title}</h3>
        <p>finished</p>
        <p>{paintingDetails.date_end}</p>
        <p>Origin</p>
        <p>{paintingDetails.place_of_origin}</p>
        <p>Style</p>
        <p>{paintingDetails.style_title}</p>
        <p>Artwork type</p>
        <p>{paintingDetails.artwork_type_title}</p>
      </div>
    <button onClick={() => navigator(-1)}>Back to Gallery</button>
    </section>
  );
}

export default PaintingDetails;