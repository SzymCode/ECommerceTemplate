import { API_URL, STRAPI_API_TOKEN } from "./urls"

export const fetchDataFromApi = async (endpoint) => {
  try {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${STRAPI_API_TOKEN}`
      }
    }

    const res = await fetch(`${API_URL}${endpoint}`, options)
    const data = await res.json()

    return data
  } catch (error) {
    console.error("Error fetching data from API:", error)
    throw error
  }
}
