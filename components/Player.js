import { useSession } from "next-auth/react";
import useSpotify from "../hooks/useSpotify";
import { currentTrackIdState, isPlayingState } from '../atoms/songAtom';
import { useRecoilState } from "recoil";
import { useState } from "react";


function Player() {
  const spotifyApi = useSpotify();
  const {data: sessionStorage, status} = useSession();
  const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const [volum, setVolum] = useState(50);

  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default Player;