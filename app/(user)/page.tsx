import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense"
import BlogList from "../../components/BlogList";
import PreviewBlogList from "../../components/PreviewBlogList";

const query = groq`
*[_type=='post']{
    ...,
    author->,
    categories[]->
} | order(_createdAt desc)
`;

export const revalidate = 30;

export default async function HomePage(){
    
    if (previewData()){
        return (<PreviewSuspense fallback={(
            <div role = "status">
                <p className="text-center text-lg animate-pulse text-[#1e516a]">
                    Cargando Preview Data...
                </p>
            </div>
        )}>
        <PreviewBlogList query={query} />
        </PreviewSuspense>
        );
    }
    
    const posts = await client.fetch(query);
    console.log(posts)
    return(
        <BlogList posts={posts}/>
    );
}