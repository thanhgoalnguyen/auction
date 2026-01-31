import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

import PageHeader from "@/components/layout/PageHeader";

import product23 from "@/assets/img/23.png";
import arrowRight from "@/assets/icon/searchTop/arrow-right.svg";
import favorite from "@/assets/icon/postedItemList/favorite.svg";
import comment from "@/assets/icon/postedItemList/comment.svg";
import seen from "@/assets/icon/postedItemList/seen.svg";

type CategoryItem = {
    title: string;
    level?: number;
    to?: string;  
    id?: number;
    list?: CategoryItem[];
}

export default function PostedItemList() {
	const tagList = [
		{
			title: "出品中",
			id: 1
		},
		{
			title: "取引中",
			id: 2
		},
		{
			title: "売却済み",
			id: 3
		},
		{
			title: "販売履歴",
			id: 4
		},
	];

	const dataList = [
		{
			id: 1,
			list: [ 
				{
					name: "アーティザナル　トロンプルイユ",
					money: "9,600",
					favorite: 2,
					cmt: 4,
					seen:24,
					time: "1分前に更新",
					link: "/layout",
					img: product23
				},
			]
		},
		{
			id: 2,
			list: [ 
				{
					name: "アーティザナル　トロンプルイユ",
					money: "9,600",
					favorite: 2,
					cmt: 4,
					seen:24,
					time: "1分前に更新",
					link: "/layout",
					img: product23
				},
				{
					name: "アーティザナル　トロンプルイユ",
					money: "9,600",
					favorite: 2,
					cmt: 4,
					seen:24,
					time: "1分前に更新",
					link: "/layout",
					img: product23
				},
			]
		},
		{
			id: 3,
			list: [ 
				{
					name: "アーティザナル　トロンプルイユ",
					money: "9,600",
					favorite: 2,
					cmt: 4,
					seen:24,
					time: "1分前に更新",
					link: "/layout",
					img: product23
				},
				{
					name: "アーティザナル　トロンプルイユ",
					money: "9,600",
					favorite: 2,
					cmt: 4,
					seen:24,
					time: "1分前に更新",
					link: "/layout",
					img: product23
				},
			]
		},
		{
			id: 4,
			list: [ 
				{
					name: "アーティザナル　トロンプルイユ",
					money: "960",
					favorite: 2,
					cmt: 4,
					seen:24,
					time: "1分前に更新",
					link: "/layout",
					img: product23
				},
				{
					name: "アーティザナル　トロンプルイユ",
					money: "600",
					favorite: 2,
					cmt: 4,
					seen:24,
					time: "1分前に更新",
					link: "/layout",
					img: product23
				},
				{
					name: "アーティザナル　トロンプルイユ",
					money: "9,6000",
					favorite: 2,
					cmt: 4,
					seen:24,
					time: "1分前に更新",
					link: "/layout",
					img: product23
				},
			]
		},
	]
	const [id, setID] = useState(1);
	const [list, setList] = useState(dataList?.[0]?.list);

	const handleChangeTag = (newID) => {
		const newList = dataList?.find((item) => item?.id === newID);

		setID(newID);
		setList(newList?.list)
	}

	return (
		<div className="post-item-list-page page-container flex flex-col items-center w-full h-max">
			<PageHeader title="出品した商品"/>
			<div className="container flex flex-col gap-5">
				<div className="grid grid-cols-4 w-full border-b border-neutral-300">
					{
						tagList?.map((item) => {
							const isActive = id === item?.id;

							return  (
								<button
									onClick={() => handleChangeTag(item?.id)}
									className={`relative flex justify-center pb-2 text-[11px] leading-[13px] ${isActive ? "text-red-200" : "text-neutral-600"}`}
								>
									{item?.title}
									{
										isActive && (
											<span className="absolute bottom-0 left-0 translate-y-[1px] w-full h-[2px] bg-red-200"></span>
										)
									}
								</button>
							)
						})
					}
				</div>
				<div>
					<div className="w-full pl-3 pb-5 border-b border-neutral-300">
						<p className="text-[11px] leading-[13px] text-neutral-600">{list?.length}</p>
					</div>
					{
						list?.map((item, index) => (
							<Link 
								key={index}
								to={item?.link}
								className="flex justify-between items-center gap-[10px] py-5 px-3 border-b border-neutral-300"
							>
								<img src={item?.img} alt="product" className="w-[70px] h-[70px]"/>
								<div className="grow">
									<p className="mb-[6px] text-[13px] leading-[16px] text-neutral-600">{item?.name}</p>
									<div className="flex items-center gap-[10px] mb-2 text-[11px] leading-[13px] text-neutral-600">
										<p>¥</p>
										<p>{item?.money}円</p>
									</div>
									<div className="flex items-center gap-6 mb-[6px] text-[9px] leading-[11px] text-neutral-600">
										<div className="flex items-center gap-1">
											<img src={favorite} alt="favorite" className="w-[9px] h-2"/>
											<p>{item?.favorite}</p>
										</div>
										<div className="flex items-center gap-1">
											<img src={comment} alt="comment" className="w-[11px] h-2"/>
											<p>{item?.cmt}</p>
										</div>
										<div className="flex items-center gap-1">
											<img src={seen} alt="seen" className="w-[11px] h-[7px]"/>
											<p>{item?.seen}</p>
										</div>
									</div>
									<p className="text-[10px] leading-[12px] text-neutral-600">{item?.time}</p>
								</div>
								<img src={arrowRight} alt="arrow" className="w-[5px] h-2"/>
							</Link>
						))
					}
				</div>
			</div>
		</div>
	);
}
