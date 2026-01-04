import { useState } from "react";

import PageHeader from "@/components/layout/PageHeader";
import PolicyTerm from "@/components/ui/PolicyTerm";
import SearchTopItem from "@/components/ui/SearchTopItem";

import remove from "@/assets/icon/searchTop/remove.svg";
import search from "@/assets/icon/searchTop/search.svg";

export default function SearchTop() {
	const [searchText, setSearchText] = useState("");

	const listSearchText = [
		{
			title: "メンズ",
			link: "/"			
		},
		{
			title: "メンズTシャツ",
			link: "/"			
		},
		{
			title: "メンズ財布",
			link: "/"			
		},
		{
			title: "メンズショルダーバック",
			subTitle: "メンズショルダーバック",
			link: "/"			
		},
		{
			title: "メンズネックレス",
			link: "/"			
		},
		{
			title: "メンズジャケット",
			link: "/"			
		},
		{
			title: "メンズパンツ",
			link: "/"			
		},
		{
			title: "メンズジーンズ",
			link: "/"			
		},
		{
			title: "メンズジーンズ",
			link: "/"			
		},
	]

	const handleRemoveSearch = () => {
		setSearchText("");
	}

	const handleChangeSearchText = (event) => {
		setSearchText(event.target.value);
	}

	return (
		<div className="search-top flex flex-col items-center w-full h-max min-h-full">
			<PageHeader title="検索"/>
			<div className="flex flex-col gap-[17px] w-full max-w-[768px] pt-[14px] pb-[58px] px-4">
				<div className="flex items-center gap-3">
					<button
						onClick={handleRemoveSearch} 
						className="w-[11px] h-[11px]"
					>
						<img
							src={remove}
							alt="remove"
							className="w-full h-full"
						/>
					</button>
					<div className={`flex items-center gap-[5px] grow h-8 px-[13px] border ${searchText?.length > 0 ? "border-dark-200" : "bg-neutral-800 border-neutral-800"}`}>
						<img
							src={search}
							alt="search"
							className="w-3 h-3"
						/>
						<input
							className="grow text-[12px] leading-[15px] text-neutral-600 bg-transparent outline-none placeholder:text-neutral-600"
							placeholder="何をお探しですか？"
							value={searchText}
							onChange={handleChangeSearchText}
						/>
					</div>
				</div>
				{searchText?.length > 0 ? (
					<div>
						{
							listSearchText?.map((item, index) => 
								<SearchTopItem
									key={index}
									index={index}
									data={item}
								>
								</SearchTopItem>
							)
						}
					</div>
					) : (
					<div className="pt-3 pb-[6px] pl-[11px] border-b border-neutral-300">
						<p className="text-[9px] leading-[11px] text-neutral-700">
							カテゴリー
						</p>
					</div>
				)}
			</div>
			<PolicyTerm/>
		</div>
	);
}
