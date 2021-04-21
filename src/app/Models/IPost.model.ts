export interface IPost {
    id: number;
    address: string;
    description: string;
    media: Media;
    occurred_at: any;
    updated_at: number;
    title: string;
    type: string;

}

interface Media {
    image_url: string;
    image_url_thumb: string;
}