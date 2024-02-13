import React from 'react';
import {Metadata} from "next";

async function getData(id: string) {
    const response = await fetch(`https://jsonplaceholders.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60
        }
    });

    if (!response.ok) throw new Error('Unable to fetch posts!');

    return response.json()
}

type Props = {
    params: {
        id: string
    }
}

export async function generateMetadata({
   params: { id }
}: Props): Promise<Metadata> {
    const post = await getData(id);

    return {
        title: post.title,
    }
}

export default async function Post ({ params: { id } }: Props) {
    const post = await getData(id);

    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </>
    )
};
