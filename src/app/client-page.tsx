'use client'

import useFetch from './lib/useFetch';
import { MockType } from './lib/mock-server';

interface Props {
    text: string;
}

export default function HomePage({ text }: Props) {
    const {data} = useFetch<MockType>('api/');
    console.log(`data: ${data?.foo}`);

    return (
        <>
            <div>
                <p>Put your code here!</p>
                <p>Props: {text}</p>
            </div>
            <div>
                <p>Server request output:</p>
                {data?.foo}
            </div>
        </>
    );
}