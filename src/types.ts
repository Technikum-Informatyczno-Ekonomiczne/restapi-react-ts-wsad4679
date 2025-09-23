export interface Country {
    name: {
        common: string;
    };
    region: string;
    capital?: string[];
    population: number;
    flags: {
        svg: string;
    };
}
