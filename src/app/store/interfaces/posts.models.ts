export interface Posts {
    id?: number;
    stolen_location?: string;
    manufacturer_name?: string;
    date_stolen?: any;
    title?: string;
    description?: string;
    serial?: string;
    url?: string;
    large_img?: string;
    status?: string;
    stolen_coordinates?: number[];
    public_images?: Media[];
}


interface Media {
    medium: string;
}