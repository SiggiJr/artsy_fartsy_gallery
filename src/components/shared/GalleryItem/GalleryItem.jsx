import { Link } from "react-router-dom";
import defaultImg from '../../../assets/img/error.jpg'

const GalleryItem = ({painting}) => {

  const imgLink = painting.image_id ? `https://www.artic.edu/iiif/2/${painting.image_id}/full/843,/0/default.jpg` : defaultImg

  return ( 
    <div className="gallery_item_wrapper">
      <Link to={`/painting/${painting.id}`}>
      <img src={imgLink} alt={painting.title} />
      </Link>
      <h2>{painting.title}</h2>
      <h3>{painting.artist_title}</h3>
      <p>{`finished ${painting.date_end}`}</p>
    </div>
  );
}

export default GalleryItem;