
export const getGifts = async(category) => {
    const url =`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=mPCGn4gOUlRtlxCEeIClie99n3PvJf2A`;
    const res = await fetch(url);
    const {data} = await res.json();

    const gifs = data.map(img=> {
        return{
            id:img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
    
}