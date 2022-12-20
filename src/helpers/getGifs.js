const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=JAcbKrAVdb8CEEQbDV06U84q6IsUoM8o&q=${category}&limit=5`;

    const resp = await fetch(url);
    const {data} = await resp.json()

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    // console.log(data);
    return gifs
}

export {getGifs}