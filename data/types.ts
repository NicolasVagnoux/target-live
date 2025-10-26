export type Concert = {
    title: string,
    date: string,
    location: string,
    description: string,
    image: string,
    link: string,
    star: boolean
}

export type Artist = {
    id: number,
    name: string,
    image: string,
    logo: string,
    style: string,
    musicians: string,
    description: string,
    link: string,
    video: string
}