import React, { useRef, useEffect } from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './soundplayer.scss';

// eslint-disable-next-line react/prop-types
const SoundPlayer = (({ src, stop, layout }) => {
  const player = useRef();

  useEffect(() => {
    if (stop) {
      player.current.audio.current.pause();
      player.current.audio.current.currentTime = 0;
    }
  }, [stop]);

  return (
    <div className="soundPlayer">
      <AudioPlayer
        layout={layout}
        src={src}
        ref={player}
        customControlsSection={[RHAP_UI.MAIN_CONTROLS, RHAP_UI.VOLUME_CONTROLS]}
        showJumpControls={false}
        showDownloadProgress={false}
        autoPlayAfterSrcChange={false}
        defaultCurrentTime="00:00"
        defaultDuration="00:00"
      />
    </div>
  );
});

export default SoundPlayer;
