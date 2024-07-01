import Footer from '@/components/global/Footer'
import ShopHeadeer from '@/components/global/ShopHeader'
import React, { ReactNode } from 'react'

export default function Layout({children}:{children:ReactNode}){
    return <div>
        <ShopHeadeer/>
        {children}
        <Footer/>
        </div>
}