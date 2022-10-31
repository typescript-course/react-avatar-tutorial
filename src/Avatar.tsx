export const FALLBACK_AVATAR_URL = "https://cataas.com/cat/says/hello%20world!"
export const FALLBACK_AVATAR_ALT_TEXT = "@hello-cat"

type AvatarProps = {
    /** the url of an image to render for the Avatar. */
    url?: string;
    /** the alt text to use for the url image. */
    alt?: string;
}

// NOTES
// if onError is called, use fallback url and alt text
// 1. useState
// 2. update src and alt when onError is called

function Avatar({url = FALLBACK_AVATAR_URL, alt = FALLBACK_AVATAR_ALT_TEXT}: AvatarProps) {
    return <img src={url} alt={alt} onError={() => console.log("TODO - implement me")}/>
}

export default Avatar