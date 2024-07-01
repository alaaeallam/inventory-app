import Logo from "@/components/global/Logo";
import { Headset, Mail, MapPin } from "lucide-react";

export const footer={
    logo:<Logo/>,
    summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laudantium modi voluptates necessitatibus tempore illum quibusdam quia corrupti consequatur unde voluptate veritatis cumque quae consequuntur, est similique neque pariatur sapiente?",
    contacts:[
        {
            label:"+201555225553",
            icon:Headset,
            
        },
        {
            label:"Office@stockify.com",
            icon:Mail,
            
        },
        {
            label:"NewYork William st, B24",
            icon:MapPin,
            
        }
    ],
    navigation:[
        {
            title :'Getting Started',
            links:[
                {
                    title:'Introduction',
                    path:'/itroduction'
                },
                {
                    title:'Documentation',
                    path:'/documentation'
                },
                {
                    title:'API',
                    path:'/api-docs'
                },
                {
                    title:'Usage',
                    path:'/usage'
                },
                {
                    title:'Global',
                    path:'/global'
                },
            ],
        },
        {
            title :'Company',
            links:[
                {
                    title:'About us',
                    path:'/about-us'
                },
                {
                    title:'Careers',
                    path:'/careers'
                },
                {
                    title:'Community',
                    path:'/community'
                },
                {
                    title:'Customers',
                    path:'/customers'
                },
                {
                    title:'Contact us',
                    path:'/contact-us'
                },
                {
                    title:'Blogs',
                    path:'/blogs'
                },
            ],
        },
        {
            title :'Partner',
            links:[
                {
                    title:'For Individual',
                    path:'/for-individual'
                },
                {
                    title:'For Freelancers',
                    path:'/for-freelancers'
                },
                {
                    title:'For Teams',
                    path:'/for-teams'
                },
                {
                    title:'For Enterprice',
                    path:'/for-enterprice'
                },
                
            ],
        },
        {
            title :'Resources',
            links:[
                {
                    title:'Support',
                    path:'/support'
                },
                {
                    title:'Security',
                    path:'/security'
                },
                {
                    title:'Help Center',
                    path:'/help-center'
                },
                {
                    title:'Prefernces',
                    path:'/prefernces'
                },
                {
                    title:'Privacy Policy',
                    path:'/privacy-policy'
                },
            ],
        },
    ]
}