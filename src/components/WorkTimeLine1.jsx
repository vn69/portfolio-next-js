"use client";
import Image from "next/image";
import ArrowUp from "/public/icons/arrow_up.svg";

export default function WorkTimeLine(props) {
    const clickToLink = () => {
        if (props.link) {
            window.open(props.link, "_blank");
        }
    }

    return (
        <div onClick={clickToLink} className={`
        p-4 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:shadow-none hover:bg-slate-800/50 bg-slate-800/50 lg:bg-transparent transition duration-100 rounded-md flex gap-1 group mb-4
        ${props.link ? 'cursor-pointer' : ''} ${!props.project ? 'flex-col md:flex-row' : ''}`}>
            {
                props.project ? (
                    <div className="text-lg min-w-[136px]">
                        <Image src={props?.imageUrl} width={120} height={80} alt="project" className="object-cover h-[80px] rounded-sm" />
                    </div>
                ) : (
                    <div className="min-w-[136px]">
                        <div className="text-slate-200 text-lg mb-1 group-hover:text-teal-300">{props.company}</div>
                        <div className="">{props.time}</div>
                    </div>
                )
            }
            <div className="">
                {props.details?.map((detail, index) => (
                    <div key={index} className="mb-6">
                        <h3 className="text-slate-200 text-lg flex-1 group-hover:text-teal-300 mb-1">
                            {detail.title}
                            {(props.link && props.project) && (
                                <ArrowUp className="w-5 inline-block group-hover:text-teal-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-200"/>
                            )}
                        </h3>
                        { detail?.description?.length > 1 && (
                            <ul className="list-disc ml-4">
                                {detail.description.map((desc, index) => (
                                    <li key={index}>{desc}</li>
                                ))}
                            </ul>
                        )}
                        { detail?.description?.length == 1 && (
                            <ul className="">
                                {detail.description.map((desc, index) => (
                                    <li key={index}>{desc}</li>
                                ))}
                            </ul>
                        )}
                        <div className="mt-2 flex flex-wrap">
                            { detail?.tags?.length > 0 &&  detail.tags.map((tag, index) => (
                                <span key={index} className="text-teal-300 rounded-full bg-teal-900/30 py-1 px-3 mr-1 mb-1">{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}