import { SpeakerConstants } from "./src/constants/SpekerConstants";
import { playAudio } from "./src/lib/speaker";
import { generateVoice } from "./src/lib/voicevox";

const text = "今日はいい天気ですね。";

const main = async () => {
  try {
    const random = Math.floor(Math.random() * SpeakerConstants.loli.length);
    const speakerId = SpeakerConstants.kuudere[random];
    const audio = await generateVoice(text, speakerId);
    await playAudio(audio);
  } catch (error) {
    console.log(error);
  }
};

main();
