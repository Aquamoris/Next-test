'use client'
import useSWR from "swr";
import {getAllPosts} from "@/services/getPosts";
import Link from "next/link";

export default function Posts() {
    const {data: posts, isLoading } = useSWR('posts', getAllPosts);

    return isLoading ? (
        <h2>Loading...</h2>
    ) : (
        <ul>
            { posts.map((post: any) => (
                <li key={post.id}>
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </li>
            )) }
        </ul>
    )
};