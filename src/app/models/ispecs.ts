export interface Ispecs {
    projectId : number;
    title: string;
    subTitle: string;
    icon: string;
    description: string;
    features: Map<string,string>;
    tech: string;
    arch: Map<string,string>;
    logos: Map<string,string>;
    screenshots: string[];
}
