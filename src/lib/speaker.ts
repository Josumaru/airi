import { writeFileSync } from "fs";
import { join } from "path";
import { PathConstants } from "../constants/PathConstants";

const player = require("node-wav-player");

export const generateAudio = async (audioBuffer: Buffer) => {
  const pathName = join(__dirname, PathConstants.audio);

  // Write generated audio buffer
  writeFileSync(pathName, audioBuffer);

  // Play the audio
  player.play({
    path: pathName,
  });
};
