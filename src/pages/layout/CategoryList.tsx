import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

import PageHeader from "@/components/layout/PageHeader";
import PrivacyTerms from "@/components/ui/PrivacyTerms";

import arrowRight from "@/assets/icon/searchTop/arrow-right.svg";

type CategoryItem = {
	title: string;
	level?: number;
	to?: string;  
	list?: CategoryItem[];
}

export default function CategoryList() {
	const listCategory3 = [
		{
			title: "自動車本体",
			to: "/",

		},
		{
			title: "タイヤ・ホイール",
			to: "/",

		},
		{
			title: "カーナビ",
			to: "/",

		},
		{
			title: "カーオーディオ",
			to: "/",

		},
		{
			title: "ETC車載器",
			to: "/",

		},
		{
			title: "パーツ",
			to: "/",

		},
		{
			title: "アクセサリー",
			to: "/",

		},
		{
			title: "セーフティ",
			to: "/",

		},
		{
			title: "カーオーディオ",
			to: "/",

		},
	];

	const listCategory2 = [
		{
			title: "車",
			level: 3,
			list: listCategory3
		},
		{
			title: "バイク",
			level: 3,
			list: listCategory3
		},
		{
			title: "自転車",
			level: 3,
			list: listCategory3
		},
	];

	const listCategory = [
		{
			title: "ファッション",
			level: 2,
			list: listCategory2
		},
		{
			title: "ベビー・キッズ",
			level: 2,
			list: listCategory2
		},
		{
			title: "ゲーム・おもちゃ・グッズ",
			level: 2,
			list: listCategory2
		},
		{
			title: "ホビー・楽器・アート",
			level: 2,
			list: listCategory2
		},
		{
			title: "チケット",
			level: 2,
			list: listCategory2
		},
		{
			title: "本・雑誌・漫画",
			level: 2,
			list: listCategory2
		},
		{
			title: "CD・DVD・ブルーレイ",
			level: 2,
			list: listCategory2
		},
		{
			title: "スマホ・タブレット・パソコン",
			level: 2,
			list: listCategory2
		},
		{
			title: "テレビ・オーディオ・カメラ",
			level: 2,
			list: listCategory2
		},
		{
			title: "生活家電・空調",
			level: 2,
			list: listCategory2
		},
		{
			title: "スポーツ",
			level: 2,
			list: listCategory2
		},
		{
			title: "アウトドア・釣り・旅行用品",
			level: 2,
			list: listCategory2
		},
		{
			title: "コスメ・美容",
			level: 2,
			list: listCategory2
		},
		{
			title: "食品・飲料・酒",
			level: 2,
			list: listCategory2
		},
		{
			title: "日用品・その他",
			level: 2,
			list: listCategory2
		},
		{
			title: "家具・インテリア",
			level: 2,
			list: listCategory2
		},
		{
			title: "ハンドメイド・手芸",
			level: 2,
			list: listCategory2
		},
		{
			title: "車・バイク・自転車",
			level: 2,
			list: listCategory2
		},
	];

	const categoryClass = "flex justify-between items-center h-[46px] pl-[2px] pr-[15px] border-b border-neutral-300 [&_img]:w-[5px] [&_img]:h-2";

	const [title, setTitle] = useState("カテゴリー");
	const [level, setLevel] = useState(1);
	const [list, setList] = useState<CategoryItem[]>(listCategory);

	const bodyContainerRef = useOutletContext<React.RefObject<HTMLDivElement>>();

	const handleRenderList = (item) => {
		setLevel(item?.level);
		setTitle(item?.title);
		setList(item?.list);
		bodyContainerRef?.current?.scrollTo(0, 0);
	}

	return (
		<div className="category-list flex flex-col items-center w-full h-max min-h-full">
			<PageHeader title={title}/>
			<div className="flex flex-col w-full max-w-[768px] pb-[58px] px-3 text-[11px] leading-[13px]">
				{level > 1 && (
					<div className={categoryClass}>
						<p>すべて</p>
					</div>
				)}
				{
					list?.map((item, index) => {
						if (item?.to) {
							return (
								<Link to={item.to} className={categoryClass} key={`${level}-${index}`}>
									<p>{item.title}</p>
									<img src={arrowRight} alt="arrow" />
								</Link>
							);
						}
						return (
							<button 
								className={categoryClass} 
								key={`${level}-${index}`} 
								onClick={() => handleRenderList(item)}
							>
								<p>{item.title}</p>
								<img src={arrowRight} alt="arrow" />
							</button>
						);
                	})
				}
			</div>
			<PrivacyTerms/>
		</div>
	);
}
