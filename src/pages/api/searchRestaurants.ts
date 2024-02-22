import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req.query;
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
  const radius = 5000; 
  const latitude = 49.2513; 
  const longitude = -123.0035; 

  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&keyword=${query}&key=${apiKey}`
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error searching restaurants:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}