const fetcher = (args: RequestInfo | URL) => fetch(args).then((res) => res.json());

export default fetcher;
