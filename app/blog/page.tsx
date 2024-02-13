import {Metadata} from "next";
import Posts from "@/components/Posts";
import PostSearch from "@/components/PostSearch";

export const metadata: Metadata = {
    title: 'Blog | Create Next App',
}

// Server Components могут быть async
export default async function Blog() {
    return (
        <>
            <h1>Blog page</h1>
            <PostSearch />
            <Posts />
        </>
    )

};