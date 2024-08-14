import { SpeakerConstants } from "./src/constants/SpekerConstants";
import { generateResponse } from "./src/lib/gemini";
import { generateAudio } from "./src/lib/speaker";
import { generateVoice } from "./src/lib/voicevox";


const main = async () => {
  try {
    const text = await generateResponse("");
    console.log(text);
    const random = Math.floor(Math.random() * SpeakerConstants.loli.length);
    const speakerId = SpeakerConstants.kuudere[random];
    const audio = await generateVoice(text, speakerId);
    await generateAudio(audio);
  } catch (error) {
    console.log(error);
  }
};

main();
