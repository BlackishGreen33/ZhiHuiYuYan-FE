'use client';

import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import { bubbleType, ChatRecordProps } from '@/common/hooks/useChatStore';

export const bubbleConfig: { [key in bubbleType]: ChatRecordProps } = {
  user: {
    role: 'user',
    renderFunction: (children, additionalElem) => (
      <>
        {additionalElem}
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{children}</ReactMarkdown>
      </>
    ),
  },
  robot: {
    role: 'robot',
    renderFunction: (children, additionalElem) => (
      <>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{children}</ReactMarkdown>
        {additionalElem}
      </>
    ),
  },
};
