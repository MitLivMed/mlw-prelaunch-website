import { posthog } from './posthog';

// Tally types
interface TallySubmitPayload {
  responseId: string;
  submissionId: string;
  respondentId: string;
  formId: string;
  formName: string;
  createdAt: string;
  fields: Array<{
    key: string;
    label: string;
    type: string;
    value: unknown;
  }>;
}

interface TallyPopupOptions {
  layout?: 'default' | 'modal';
  width?: number;
  alignLeft?: boolean;
  hideTitle?: boolean;
  overlay?: boolean;
  emoji?: {
    text: string;
    animation: 'none' | 'wave' | 'tada' | 'heart-beat' | 'spin' | 'flash' | 'bounce' | 'rubber-band' | 'head-shake';
  };
  autoClose?: number;
  onOpen?: () => void;
  onClose?: () => void;
  onPageView?: (page: number) => void;
  onSubmit?: (payload: TallySubmitPayload) => void;
}

declare global {
  interface Window {
    Tally?: {
      openPopup: (formId: string, options?: TallyPopupOptions) => void;
      closePopup: (formId: string) => void;
    };
  }
}

const FORM_ID = '0Q87J0';

export function openSignupForm(location: string) {
  if (!window.Tally) {
    console.warn('Tally not loaded');
    return;
  }

  window.Tally.openPopup(FORM_ID, {
    emoji: {
      text: '👋',
      animation: 'wave',
    },
    onOpen: () => {
      posthog.capture('form_start', {
        form_id: FORM_ID,
        location,
      });
    },
    onSubmit: (payload) => {
      posthog.capture('form_submit', {
        form_id: FORM_ID,
        form_name: payload.formName,
        location,
      });
    },
  });
}
