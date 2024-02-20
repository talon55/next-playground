'use client'

interface Props {
    time: string;
}

export default function HomePage({ time }: Props) {
    return <div>The current time is: {time}</div>;
}
