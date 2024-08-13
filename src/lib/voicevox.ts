import axios from "axios";
import { UrlConstants } from "../constants/UrlConstants";
import { EndpointConstants } from "../constants/EndpointConstants";

export const generateVoice = async (katakana: string, speaker: number) => {
  const baseUrl = UrlConstants.baseUrl;

  // Enconde
  const params = new URLSearchParams({
    text: katakana,
    speaker: speaker.toString(),
  }).toString();

  // Get Audio Query
  const audioQuery = await axios.post(
    `${baseUrl}/${EndpointConstants.audioQuery}?${params}`
  );

  // Get Synthesis
  const synthesis = await axios.post(
    `${baseUrl}/${EndpointConstants.synthesis}?${params}`,
    audioQuery.data,
    {
      headers: {
        "Content-Type": "application/json",
      },
      responseType: "arraybuffer",
    }
  );
  // Return audio buffer
  return synthesis.data;
};
