export const fetchJson = async (url: string) => {
    return await (await fetch(url)).json();
}