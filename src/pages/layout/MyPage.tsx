import { useState } from "react";

import { Link } from "react-router-dom";

import PageHeader from "@/components/layout/PageHeader";
import PolicyTerm from "@/components/ui/PolicyTerm";
import MyPageNavigation from "@/components/ui/MyPageNavigation";
import LogOutModal from "@/components/ui/LogOutModal";

import avatar from "@/assets/icon/myPage/avatar.svg";
import star from "@/assets/icon/myPage/star.svg";
import blonze from "@/assets/icon/myPage/blonze.svg"
import arrowRight from "@/assets/icon/searchTop/arrow-right.svg";

export default function MyPage() {
	const [open, setOpen] = useState(false);

	const listProgress = [
		{
			label: "星５",
			value: 31,
			percent: 80
		},
		{
			label: "星4",
			value: 6,
			percent: 30
		},
		{
			label: "星3",
			value: 1,
			percent: 5
		},
		{
			label: "星2",
			value: 0,
			percent: 0
		},
		{
			label: "星1",
			value: 0,
			percent: 0
		},
	];

	const productManagementList = [
		{
			label: "いいね！一覧",
			link: "/",
		},
		{
			label: "閲覧履歴",
			link: "/",
		},
		{
			label: "フォローリスト",
			link: "/",
		},
		{
			label: "出品した商品",
			link: "/",
		},
		{
			label: "落札した商品",
			link: "/",
		},
	];

	const settingList = [
		{
			label: "個人情報設定",
			link: "/",
		},
	];

	const policyTermsList = [
		{
			label: "利用規約等",
			link: "/",
		},
		{
			label: "プライバシーポリシー等",
			link: "/",
		},
	];

	const handleOpen = () => {
		console.log(44);
		setOpen(!open);
	};
 
	return (
		<div className="my-page-page flex flex-col items-center w-full h-max min-h-full">
			<PageHeader title="マイページ"/>
			<div className="container flex flex-col gap-7 text-[11px] leading-[13px]">
				<div className="flex justify-center items-center gap-9 px-5">
					<div className="flex flex-col items-center gap-2">
						<img 
							src={avatar} 
							alt="avatar"
							className='w-full max-w-[79px] aspect-square'
						/>
						<p className="text-[15px] leading-[18px] text-neutral-600">Y.Sara1985</p>
					</div>
					<div className="flex items-center gap-4">
						<div className="flex flex-col gap-2">
							<div className="flex justify-between items-center gap-3 w-full">
								<div className="flex items-center gap-1">
									<img 
										src={star} 
										alt="star"
										className='w-4 h-[15px]'
									/>
									<p className="text-[12px] leading-[15px]">4.2</p>
								</div>
								<p className="text-[6px] leading-[7px]">/ 38件の評価</p>
								<div className="flex items-center gap-2">
									<img 
										src={blonze} 
										alt="blonze"
										className='w-[14px] h-4'
									/>
									<p className="text-[12px] leading-[15px]">Blonze</p>
								</div>
							</div>
							<div className="flex flex-col gap-1">
								{listProgress?.map((item, index) => 
									<div className="flex items-center gap-1" key={index}>
										<p className="w-[14px] text-[7px] leading-[8px] text-neutral-600 text-left">{item?.label}</p>
										<div className="w-[58px] h-[5px] border border-neutral-800">
											<div style={{ width: item?.percent + '%' }} className="h-full bg-red-400"></div>
										</div>
										<p className="text-[5px] leading-[6px] text-neutral-600">{item?.value}</p>
									</div>
								)}
							</div>
							<div className="flex justify-between items-center w-full">
								<div className="flex items-center gap-3">
									<p className="text-[10px] leading-[12px] text-neutral-600">６</p>
									<p className="text-[6px] leading-[7px] text-neutral-700">出品数</p>
								</div>
								<div className="flex items-center gap-3">
									<p className="text-[10px] leading-[12px] text-neutral-600">16</p>
									<p className="text-[6px] leading-[7px] text-neutral-700">フォロワー</p>
								</div>
								<div className="flex items-center gap-3">
									<p className="text-[10px] leading-[12px] text-neutral-600">4</p>
									<p className="text-[6px] leading-[7px] text-neutral-700">フォロー</p>
								</div>
							</div>
						</div>
						<Link to="/layout/">
							<img 
								src={arrowRight} 
								alt="arrow"
								className='w-[5px] h-[8px]'
							/>
						</Link>
					</div>
				</div>
				<div className="flex flex-col gap-9 w-full">
					<MyPageNavigation 
						title="商品管理" 
						list={productManagementList} 
					/>
					<MyPageNavigation 
						title="設定" 
						list={settingList} 
					/>
					<MyPageNavigation 
						title="規約・ポリシー" 
						list={policyTermsList} 
					/>
					<button
						onClick={handleOpen}
						className="flex items-center w-full py-4 pl-[2px] border-b border-t border-neutral-300"
					>
						<p className="text-[11px] leading-[13px] text-neutral-600">ログアウト</p>
					</button>
				</div>
			</div>
			<PolicyTerm showMore/>
			<LogOutModal open={open} handleOpen={handleOpen}/>
		</div>
	);
}
