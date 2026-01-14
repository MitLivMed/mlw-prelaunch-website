import { useEffect, useRef, useCallback } from 'react';
import { useVideoTracking } from '@/hooks/use-analytics';

interface YouTubePlayerProps {
  videoId: string;
  title?: string;
}

// YouTube IFrame API types
declare global {
  interface Window {
    YT: {
      Player: new (
        elementId: string,
        config: {
          videoId: string;
          host?: string;
          playerVars?: Record<string, unknown>;
          events?: {
            onReady?: (event: { target: YTPlayer }) => void;
            onStateChange?: (event: { data: number; target: YTPlayer }) => void;
          };
        }
      ) => YTPlayer;
      PlayerState: {
        PLAYING: number;
        PAUSED: number;
        ENDED: number;
      };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

interface YTPlayer {
  getCurrentTime: () => number;
  getDuration: () => number;
  destroy: () => void;
}

const PROGRESS_MILESTONES = [25, 50, 75, 100];

export default function YouTubePlayer({ videoId, title = 'Video' }: YouTubePlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const progressIntervalRef = useRef<number | null>(null);
  const trackedMilestonesRef = useRef<Set<number>>(new Set());
  const hasTrackedPlayRef = useRef(false);

  const { trackVideoPlay, trackVideoProgress } = useVideoTracking();

  const checkProgress = useCallback(() => {
    if (!playerRef.current) return;

    const currentTime = playerRef.current.getCurrentTime();
    const duration = playerRef.current.getDuration();
    if (duration <= 0) return;

    const percentWatched = (currentTime / duration) * 100;

    PROGRESS_MILESTONES.forEach((milestone) => {
      if (percentWatched >= milestone && !trackedMilestonesRef.current.has(milestone)) {
        trackedMilestonesRef.current.add(milestone);
        trackVideoProgress(videoId, milestone);
      }
    });
  }, [videoId, trackVideoProgress]);

  const onPlayerStateChange = useCallback(
    (event: { data: number }) => {
      // YT.PlayerState.PLAYING = 1
      if (event.data === 1) {
        if (!hasTrackedPlayRef.current) {
          hasTrackedPlayRef.current = true;
          trackVideoPlay(videoId);
        }

        if (!progressIntervalRef.current) {
          progressIntervalRef.current = window.setInterval(checkProgress, 1000);
        }
      } else {
        if (progressIntervalRef.current) {
          clearInterval(progressIntervalRef.current);
          progressIntervalRef.current = null;
        }
      }
    },
    [videoId, trackVideoPlay, checkProgress]
  );

  useEffect(() => {
    const playerId = `yt-player-${videoId}-${Date.now()}`;

    const initPlayer = () => {
      if (!containerRef.current || !window.YT) return;

      const playerDiv = document.createElement('div');
      playerDiv.id = playerId;
      containerRef.current.appendChild(playerDiv);

      playerRef.current = new window.YT.Player(playerId, {
        videoId,
        host: 'https://www.youtube-nocookie.com',
        playerVars: {
          rel: 0,
          modestbranding: 1,
          origin: window.location.origin,
        },
        events: {
          onStateChange: onPlayerStateChange,
        },
      });
    };

    if (!window.YT) {
      const existingScript = document.querySelector('script[src*="youtube.com/iframe_api"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        document.head.appendChild(script);
      }

      const existingCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        existingCallback?.();
        initPlayer();
      };
    } else {
      initPlayer();
    }

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
      playerRef.current?.destroy();
    };
  }, [videoId, onPlayerStateChange]);

  return (
    <div
      ref={containerRef}
      title={title}
      className="w-full h-full [&>iframe]:w-full [&>iframe]:h-full"
    />
  );
}
