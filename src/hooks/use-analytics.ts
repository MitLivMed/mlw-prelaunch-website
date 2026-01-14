import { useCallback, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { posthog } from '@/lib/posthog';

// Track page views on route change
export function usePageView() {
  const location = useLocation();

  useEffect(() => {
    posthog.capture('$pageview', {
      $current_url: window.location.href,
      path: location.pathname,
    });
  }, [location.pathname]);
}

// Video tracking
export function useVideoTracking() {
  const trackVideoPlay = useCallback((videoId: string) => {
    posthog.capture('video_play', { video_id: videoId });
  }, []);

  const trackVideoProgress = useCallback((videoId: string, percent: number) => {
    posthog.capture('video_progress', {
      video_id: videoId,
      percent: Math.round(percent),
    });
  }, []);

  return { trackVideoPlay, trackVideoProgress };
}

// CTA click tracking
export function useCtaTracking() {
  const trackCtaClick = useCallback((location: string, label?: string) => {
    posthog.capture('cta_click', {
      location,
      label,
    });
  }, []);

  return { trackCtaClick };
}

// Form tracking (for Tally embeds)
export function useFormTracking() {
  const trackFormStart = useCallback((formId: string) => {
    posthog.capture('form_start', { form_id: formId });
  }, []);

  const trackFormSubmit = useCallback((formId: string) => {
    posthog.capture('form_submit', { form_id: formId });
  }, []);

  return { trackFormStart, trackFormSubmit };
}

// Crisis modal tracking
export function useCrisisModalTracking() {
  const trackCrisisModalOpen = useCallback(() => {
    posthog.capture('crisis_modal_open');
  }, []);

  return { trackCrisisModalOpen };
}

// Scroll depth tracking
export function useScrollDepth() {
  const tracked = useRef<Set<number>>(new Set());
  const milestones = [25, 50, 75, 100];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      milestones.forEach((milestone) => {
        if (scrollPercent >= milestone && !tracked.current.has(milestone)) {
          tracked.current.add(milestone);
          posthog.capture('scroll_depth', { percent: milestone });
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}
