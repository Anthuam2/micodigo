export const getImagen = async () => {
    try {
        const apiKey = "3d2Id8LaZfQRQhfbF06mmSL1pZW41DsZ";
        const resp = await fetch(
            `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
        );
        const { data } = await resp.json();

        const { url } = data.images.original;
        return url;
    } catch (error) {
        console.error(error);
        return "no se encontro la imagen";
    }
};

getImagen();
