import HomePage from "./home-page";

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the revalidation time has passed or if a request comes in
async function getTime(): Promise<string> {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const time = new Date().toISOString();
    // By returning { props: { time } }, the HomePage component
    // will receive `time` as a prop at build time
    return time;
}

export default async function Page() {
    const time = await getTime();
    
    return <HomePage time={time}/>;
}
