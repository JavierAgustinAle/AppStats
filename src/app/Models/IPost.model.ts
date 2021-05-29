export interface IPost {
    id: number;
    address: string;
    description: string;
    media: Media;
    occurred_at: any;
    updated_at: number;
    title: string;
    type: string;
    source: Source;

}

interface Media {
    image_url: string;
    image_url_thumb: string;
}

interface Source {
    name: string;
    html_url: string;
    api_url: string;
}
