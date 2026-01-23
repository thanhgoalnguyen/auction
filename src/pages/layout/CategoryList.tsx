import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

import PageHeader from "@/components/layout/PageHeader";
import PolicyTerm from "@/components/ui/PolicyTerm";

import arrowRight from "@/assets/icon/searchTop/arrow-right.svg";

type CategoryItem = {
    title: string;
    level?: number;
    to?: string;  
    id?: number;
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
			list: listCategory2,
			id: 1
		},
		{
			title: "ベビー・キッズ",
			level: 2,
			list: listCategory2,
			id: 2
		},
		{
			title: "ゲーム・おもちゃ・グッズ",
			level: 2,
			list: listCategory2,
			id: 3
		},
		{
			title: "ホビー・楽器・アート",
			level: 2,
			list: listCategory2,
			id: 4
		},
		{
			title: "チケット",
			level: 2,
			list: listCategory2,
			id: 5
		},
		{
			title: "本・雑誌・漫画",
			level: 2,
			list: listCategory2,
			id: 6
		},
		{
			title: "CD・DVD・ブルーレイ",
			level: 2,
			list: listCategory2,
			id: 7
		},
		{
			title: "スマホ・タブレット・パソコン",
			level: 2,
			list: listCategory2,
			id: 8
		},
		{
			title: "テレビ・オーディオ・カメラ",
			level: 2,
			list: listCategory2,
			id: 9
		},
		{
			title: "生活家電・空調",
			level: 2,
			list: listCategory2,
			id: 10
		},
		{
			title: "スポーツ",
			level: 2,
			list: listCategory2,
			id: 11
		},
		{
			title: "アウトドア・釣り・旅行用品",
			level: 2,
			list: listCategory2,
			id: 12
		},
		{
			title: "コスメ・美容",
			level: 2,
			list: listCategory2,
			id: 13
		},
		{
			title: "食品・飲料・酒",
			level: 2,
			list: listCategory2,
			id: 14
		},
		{
			title: "日用品・その他",
			level: 2,
			list: listCategory2,
			id: 15
		},
		{
			title: "家具・インテリア",
			level: 2,
			list: listCategory2,
			id: 16
		},
		{
			title: "ハンドメイド・手芸",
			level: 2,
			list: listCategory2,
			id: 17
		},
		{
			title: "車・バイク・自転車",
			level: 2,
			list: listCategory2,
			id: 18
		},
	];

	const data = {
		title: "カテゴリー",
		level: 1,
		list: listCategory
	}

	const categoryClass = "flex justify-between items-center h-[46px] pl-[2px] pr-4 border-b border-neutral-300 [&_img]:w-[5px] [&_img]:h-2";

	const [category, setCategory] = useState<CategoryItem>(data);
	const [id, setID] = useState(0);

	const bodyContainerRef = useOutletContext<React.RefObject<HTMLDivElement>>();

	const handleRenderList = (item) => {
		setCategory(item);

		if (item?.level === 2) {
			setID(item?.id);
		}

 		bodyContainerRef?.current?.scrollTo(0, 0);
	}

	const handleBack = () => {
		if (category?.level === 3) {
			const targetCategory = listCategory?.find(x => x?.id === id);
			setCategory(targetCategory);
		} else {
			setCategory(data)
		}
	}

	return (
		<div className="category-list-page flex flex-col items-center w-full h-max min-h-full">
			<PageHeader title={category?.title} showBack={category?.level > 1} handleBack={handleBack}/>
			<div className="container flex flex-col text-[11px] leading-[13px]">
				{category?.level > 1 && (
					<div className={categoryClass}>
						<p>すべて</p>
					</div>
				)}
				{
					category?.list?.map((item, index) => {
						if (item?.to) {
							return (
								<Link to={item.to} className={categoryClass} key={index}>
									<p>{item.title}</p>
									<img src={arrowRight} alt="arrow" />
								</Link>
							);
						}
						return (
							<button 
								className={categoryClass} 
								key={index} 
								onClick={() => handleRenderList(item)}
							>
								<p>{item.title}</p>
								<img src={arrowRight} alt="arrow" />
							</button>
						);
                	})
				}
			</div>
			<PolicyTerm/>
		</div>
	);
}
