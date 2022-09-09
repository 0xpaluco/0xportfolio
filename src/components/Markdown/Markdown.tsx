import Image from "next/image";
import Link from "next/link";
import ReactMarkdown, { Components } from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import remarkGfm from "remark-gfm"



interface MarkdownProp {
    children: string;
}

const defaultImg = "https://picsum.photos/200/300"

const mdxComponents: Components = {
    h1: ({ children }) => <h1 className="font-bold text-3xl my-4 text-white">{children}</h1>,
    h2: ({ children }) => <h2 className="font-semibold text-2xl my-4 text-white">{children}</h2>,
    h3: ({ children }) => <h3 className="font-medium text-lg my-4 text-white">{children}</h3>,
    ul: ({ children }) => <ul className="list-disc ml-4 mt-4">{children}</ul>,
    li: ({ children }) => <li className="mt-1 text-base">{children}</li>,
    a: ({ children, href }) => <Link href={href || ""}><a target="_blank" className="font-medium text-base my-4 text-c-l-primary hover:cursor-pointer">{children}</a></Link>,
    p: ({ children }) => <p className="mt-4 text-base">{children}</p>,
    pre: ({ children }) => <pre className="whitespace-pre-wrap bg-black text-white text-sm my-2 p-4">{children}</pre>,
    code: ({ children }) => <code className="text-white text-sm">{children}</code>,
    img: ({ alt, src, children }) => (
        <figure>
              <img
                className="w-full rounded-lg"
                src={src || defaultImg}
                alt={alt}
                width={1310}
                height={873}
              />
              <figcaption>{alt}</figcaption>
            </figure>
    ),
    // ...
};

const Markdown = (props: MarkdownProp) => {
    return (
        <>
            <ReactMarkdown 
                remarkPlugins={[remarkGfm]} 
                rehypePlugins={[rehypeHighlight]}
                components={mdxComponents}>{props.children}</ReactMarkdown>
        </>
    )
}

export default Markdown;