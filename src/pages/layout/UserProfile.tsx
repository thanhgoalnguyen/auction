import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import PageHeader from "@/components/layout/PageHeader";
import PolicyTerm from "@/components/ui/PolicyTerm";
import ButtonContainer from "@/components/ui/ButtonContainer";
import UserProfileInfo from "@/components/ui/UserProfileInfo";
import ProductPrice from "@/components/ui/ProductPrice";

import product6 from "@/assets/img/6.png";
import product7 from "@/assets/img/7.png";
import product8 from "@/assets/img/8.png";
import product9 from "@/assets/img/9.png";

export default function UserProfile() {
	const navigate = useNavigate();
	const [type, setType] = useState('sell');
	const [number, setNumber] = useState(8);

	const listRecentProduct = [
		{
			img: product6,
			money: "22,000",
			link: "/"
		},
		{
			img: product7,
			money: "16,000",
			link: "/"
		},
		{
			img: product8,
			money: "800",
			link: "/"
		},
		{
			img: product9,
			money: "1,400",
			link: "/"
		},
			{
			img: product6,
			money: "22,000",
			link: "/"
		},
		{
			img: product7,
			money: "16,000",
			link: "/"
		},
		{
			img: product8,
			money: "800",
			link: "/"
		},
		{
			img: product9,
			money: "1,400",
			link: "/"
		},
	];

	const handleChangeType = (type, number) => {
		setType(type);
		setNumber(number);
	}

	const handleLoadMore = () => {
		navigate("/");
	}

	return (
		<div className="user-profile flex flex-col items-center w-full h-max min-h-full">
			<PageHeader title="出品者プロフィール"/>
			<div className="flex flex-col w-full grow max-w-[768px] pt-7 pb-[58px]">
				<UserProfileInfo isUserProfile className="mb-[25px]"/>
				<div className="flex items-end gap-[42px] px-[25px] mb-[38px]">
					<div className="flex flex-col gap-[5px] grow h-10 text-[9px] leading-[11px] text-neutral-500">
						<p>使用頻度が低くなったブランド衣服などを売ってます。</p>
						<p>最近始めました　わりと気分屋なので一定期間の出品になります</p>
						<p>希少価値の高い物を出品しているので是非ご検討・・・・</p>
					</div>
					<Link
						to="/"
						className="text-[7px] leading-[8px] text-neutral-500"
					>
						もっと見る
					</Link>
				</div>
				<div className="w-full px-[17px] mb-2">
					<div className="flex items-center border-b border-neutral-1100">
						<button
							onClick={() => handleChangeType("sell", 8)}
							className={`relative pb-[5px] pl-[11px] pr-[23px] text-[9px] leading-[11px] ${type === "sell" ? "text-neutral-500" : "text-neutral-1000"}`}
						>
							出品中アイテム（8）
							{type === "sell" && <span className="absolute top-full left-0 w-full h-[1px] bg-neutral-500"></span>}
						</button>
						<button
							onClick={() => handleChangeType("close", 4)}
							className={`relative pb-[5px] pl-[11px] pr-[23px] text-[9px] leading-[11px] ${type === "close" ? "text-neutral-500" : "text-neutral-1000"}`}
						>
							出品終了アイテム（4）
							{type === "close" && <span className="absolute top-full left-0 w-full h-[1px] bg-neutral-500"></span>}
						</button>
					</div>
				</div>
				<p className="text-[8px] leading-[10px] text-neutral-500 mb-3 ml-[29px]">{number > 1 ? number + "items" : number + "item"}</p>
				<div className="grid grid-cols-4 gap-x-1 gap-y-[29px] px-[7px] mb-[23px]">
					{
						listRecentProduct?.slice(0, number)?.map((item, index) => 
							<ProductPrice
								key={index}
								data={item}
							/>
						)
					}
				</div>
				<div className="px-4 mt-auto">
					<ButtonContainer
						kind="secondary"
						onClick={handleLoadMore}
					>
						もっと見る
					</ButtonContainer>
				</div>
			</div>
			<PolicyTerm/>
		</div>
	);
}
