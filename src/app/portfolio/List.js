import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

export default function List({ images, blogData}) {
    return (
    <Fragment>
        <div className="bg-neutral-50">
        <div className="container py-20 xl:px-[10rem] 2xl:px-[15rem]" id="team">
            <div className="grid gap-y-5">
            {/* Blog Posts */}
            <div className="pt-12">
                <div className="grid gap-y-10 lg:grid-cols-3 gap-x-8">
                {Object.keys(blogData).map((key, index) => {
                    const blog = blogData[key];
                    return (
                        <div key={key}>
                            {/* <Link href={blog.link}> */}
                                {/* <div className="cursor-pointer"> */}
                                    <Image 
                                        src={images[index]} 
                                        alt="Picture of the author" 
                                        width={500} 
                                        height={500} 
                                        className="rounded hover:duration-300 hover:scale-105" 
                                    />
                                    {/* <div className="pt-4 grid gap-y-1 text-neutral-900">
                                        <div className="text-lg font-bold capitalize">{blog.name}</div>
                                        <div className="text-sm font-light">{blog.sentence}</div>
                                    </div> */}
                                {/* </div> */}
                            {/* </Link> */}
                        </div>
                    );
                })}
                </div>
            </div>
            </div>
        </div>
        </div>
    </Fragment>
    );
}
