import { client } from '../shared/api';

export const sendFeedback = ({
  type,
  comment,
  screenshotBase64,
}: {
  type: string;
  comment: string;
  screenshotBase64: string | null;
}) => {
  return client.post('/feedback', {
    type,
    comment,
    screenshot: screenshotBase64
      ? `data:image/png;base64, ${screenshotBase64}`
      : null,
  });
};
