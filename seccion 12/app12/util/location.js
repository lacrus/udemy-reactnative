import { privado } from "../privado";

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${privado.GOOGLE_API_KEY}`;
  return imagePreviewUrl;
}

export async function getAdrress(lat, lng) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${privado.GOOGLE_API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Fallo al solicitar la dirección");
  }

  const data = await response.json();
  const address = data.results[0].formatted_address;
  return address;
}
