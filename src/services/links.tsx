import { FacebookLogo, GithubLogo, Laptop, LinkedinLogo } from "@phosphor-icons/react";
import { ReactNode } from "react";

interface LinkType {
    id: number; 
    title: string; 
    anchor: string;
    icon?: ReactNode;
}


export const link: LinkType[] = [
    {
        id: 0, 
        title: 'LinkedIn',
        anchor: 'https://linkedin.com/in/jairotsb/',
        icon: <LinkedinLogo size={22}/>
    }, 
    {
        id: 1, 
        title: 'Facebook', 
        anchor: 'https://facebook.com/jairo.arcy.5', 
        icon: <FacebookLogo size={22}/>
    }, 
    {
        id: 2, 
        title: 'Github', 
        anchor: 'https://github.com/Jairotsb', 
        icon: <GithubLogo size={22}/>
    },
    {
        id: 3, 
        title: 'Portfólio', 
        anchor: 'https://www.jairotunisse.dev', 
        icon: <Laptop size={22}/>
    }
]