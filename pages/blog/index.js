import Head from 'next/head'
import Image from 'next/image'

import Layout from '../../components/layout'
import Pagination from '../../components/Blog/pagination'
import BlogItem from '../../components/Blog/BlogItem'


export default function Blog() {
    return (
        <Layout>
            <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                <div className="absolute inset-0">
                    <div className="bg-white h-1/3 sm:h-2/3"></div>
                </div>
                <div className="relative max-w-7xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">AlphaValley Blog</h2>
                        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Musings about startup funding, technology, pitch decks, and more.</p>
                    </div>
                    <div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
                        <BlogItem />
                        <BlogItem />
                        <BlogItem />
                        <BlogItem />
                        <BlogItem />
                        <BlogItem />
                    </div>
                    <Pagination />
                </div>
            </div>
        </Layout>
    )
}
