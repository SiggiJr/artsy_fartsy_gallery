export const apiBaseLink = "https://api.artic.edu/api/v1";

const responseToJson = (response) => {
  if (!response.ok) {
    throw new Error("Fetch ist fehlgeschlagen");
  }
  return response.json();
};

export const catchError = (error) => console.log(error.message);

export const getGalleryItems = (limit, page) => {
  return fetch(
    `${apiBaseLink}/artworks?page=${page}&limit=${limit}&fields=id,image_id,title,artist_title,date_end`
  ).then(responseToJson);
};

export const getPaintingDetails = (id) => {
  return fetch(
    `${apiBaseLink}/artworks/${id}?fields=image_id,title,artist_title,date_end,place_of_origin,style_title,artwork_type_title`
  ).then(responseToJson);
};
