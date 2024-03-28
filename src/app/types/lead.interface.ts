import { Content } from "./content.interface";

export interface ImageRenditions {
    xs: String;
    lg: String;
    alt: String;
}

export interface Lead {
    image: ImageRenditions;
    content: Content;
};