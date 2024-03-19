'use client'

import { ClipboardDocumentIcon } from '@heroicons/react/24/outline'
import { kebabCase } from 'lodash'
import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown, { Components } from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
// import { toast } from "react-hot-toast";

interface MarkdownProp {
  children: string
}

const defaultImg = 'https://picsum.photos/200/300'

const mdxComponents: Components = {
  h1: ({ children }) => (
    <h1
      className="font-bold text-3xl sm:text-4xl my-4 text-white tracking-tight"
      id={kebabCase(children?.toString().toLowerCase())}
    >
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2
      className="font-semibold text-2xl my-4 text-white"
      id={kebabCase(children?.toString().toLowerCase())}
    >
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3
      className="font-semibold text-lg my-4 text-white"
      id={kebabCase(children?.toString().toLowerCase())}
    >
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4
      className="font-semibold text-base my-4 text-white"
      id={kebabCase(children?.toString().toLowerCase())}
    >
      {children}
    </h4>
  ),
  ul: ({ children }) => (
    <ul className="list-disc ml-4 mt-4 text-white">{children}</ul>
  ),
  li: ({ children }) => (
    <li className="mt-1 text-base text-white">{children}</li>
  ),
  strong: ({ children }) => (
    <strong className="text-base font-semibold text-white">{children}</strong>
  ),
  a: ({ children, href }) => (
    <Link
      href={href || ''}
      target="_blank"
      className="font-medium text-base my-4 text-c-l-primary hover:cursor-pointer"
    >
      {children}
    </Link>
  ),
  p: ({ children }) => <p className="mt-4 text-base text-white">{children}</p>,
  pre: ({ children }) => (
    <pre className="whitespace-pre-wrap bg-c-bg text-white text-sm my-2 p-4">
      {children}
    </pre>
  ),
  code: ({ node, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || '')
    return match ? (
      <CodeBlock
        codestring={String(children).replace(/\n$/, '')}
        language={match[1]}
      />
    ) : (
      <code className="whitespace-pre-wrap break-words border text-[.9em] border-black/30 bg-black/20 px-1 py-0.5 rounded-sm text-black text-sm p-1">
        {children}
      </code>
    )
  },
  img: ({ alt, src, children }) => (
    <figure>
      <Image
        className="w-full rounded-lg"
        src={src || defaultImg}
        alt={alt || ''}
        title={alt || ''}
        width={1310}
        height={873}
      />
      <figcaption>{alt}</figcaption>
    </figure>
  ),
  // ...
}

const CodeBlock = ({
  language,
  codestring,
}: {
  language: string
  codestring: string
}) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(codestring)
    // toast.success('Code Copied!');
  }

  return (
    <div className="bg-black rounded-md mb-4 w-auto">
      <div className="flex items-center relative text-gray-200  px-4 py-2 text-xs font-sans justify-between rounded-t-md">
        <span>{language}</span>
        <button className="flex ml-auto gap-2" onClick={copyToClipboard}>
          <ClipboardDocumentIcon className="w-5 h-5" />
          Copy code
        </button>
      </div>
      <div className="overflow-x-auto !whitespace-pre">
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          PreTag={Pre}
          showLineNumbers={true}
          wrapLines
          wrapLongLines
          horizontalScroll
        >
          {codestring}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

const Code = ({ children }: { children: any }) => {
  return <code className="!whitespace-pre">{children}</code>
}

const Pre = ({ children }: { children: any }) => {
  return <pre>{children}</pre>
}

const Markdown = (props: MarkdownProp) => {
  return (
    <>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdxComponents}>
        {props.children}
      </ReactMarkdown>
    </>
  )
}

export default Markdown
