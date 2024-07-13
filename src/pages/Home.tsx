import { useState } from "react";

type MoodType =
  | "sad"
  | "shocked"
  | "happy"
  | "blissful"
  | "lovestruck"
  | "excited"
  | "ko";

import "./Home.css";
import { HumanDinosaur } from "react-kawaii";

const Home = () => {
  const [mood, setMood] = useState<MoodType>("blissful");
  const moods: MoodType[] = [
    "sad",
    "shocked",
    "happy",
    "blissful",
    "lovestruck",
    "excited",
    "ko",
  ];

  const Dinosaur = () => (
    <HumanDinosaur size={280} mood={mood} color="#fd1ec5" />
  );

  const randomMood = () => {
    const randomIndex = Math.floor(Math.random() * moods.length);
    setMood(moods[randomIndex]);
  };

  return (
    <div className="home-container">
      <h2>Hi, I am a tiny dinosaur and i am {mood}</h2>
      <Dinosaur />
      <button onClick={randomMood}>Click me!</button>
    </div>
  );
};

export default Home;
