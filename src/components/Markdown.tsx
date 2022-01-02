import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import {
  Prism as SyntaxHighlighter,
  SyntaxHighlighterProps,
} from 'react-syntax-highlighter';
import theme from 'react-syntax-highlighter/dist/esm/styles/prism/nord';

import { styled } from '@mui/material';

const syntaxHighlighter = {
  code({
    node,
    inline,
    className,
    children,
    ...props
  }: SyntaxHighlighterProps) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        style={theme}
        language={match[1]}
        PreTag="div"
        {...props}>
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

const MarkdownStyle = styled('div')(({ theme }) => ({
  '& blockquote': {
    boxShadow: theme.shadows[1],
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.divider,
    overflowX: 'auto',
    margin: 0,
  },

  '& a': {
    color: theme.palette.primary.main,
  },

  '& img': {
    borderRadius: theme.shape.borderRadius,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(5),
    width: '100%',
  },
}));

interface Props {
  text: string | Promise<string>;
}

const Markdown: React.FC<Props> = ({ text }: Props) => {
  return (
    <MarkdownStyle>
      <ReactMarkdown skipHtml components={{ ...syntaxHighlighter }}>
        {text.toString()}
      </ReactMarkdown>
    </MarkdownStyle>
  );
};

export default Markdown;
