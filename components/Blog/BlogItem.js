import Head from 'next/head'
import Image from 'next/image'

export default function BlogItem() {
    return (
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
            <Image
                 className="h-48 w-full object-cover" 
                 alt="Image 1"
                 src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
            />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                        <a href="#" className="hover:underline"> Article </a>
                    </p>
                    <a href="#" className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">Boost your conversion rate</p>
                        <p className="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.</p>
                    </a>
                </div>
                <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                        <a href="#">
                            <span className="sr-only">Roel Aufderehar</span>
                            <Image
                                alt="Image 2"
                                className="h-10 w-10 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            />
                        </a>
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                            <a href="#" className="hover:underline"> Roel Aufderehar </a>
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                            <time dateTime="2020-03-16"> Mar 16, 2020 </time>
                            <span aria-hidden="true"> &middot; </span>
                            <span> 6 min read </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
