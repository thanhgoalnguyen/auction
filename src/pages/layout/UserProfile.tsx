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
		navigate("/layout/");
	}

	return (
		<div className="user-profile-page flex flex-col items-center w-full h-max min-h-full">
			<PageHeader title="出品者プロフィール"/>
			<div className="container flex flex-col w-full grow">
				<UserProfileInfo isUserProfile className="mb-[25px]"/>
				<div className="flex items-end gap-[42px] px-3 mb-9">
					<div className="flex flex-col gap-[5px] grow h-10 text-[9px] leading-[11px]">
						<p>使用頻度が低くなったブランド衣服などを売ってます。</p>
						<p>最近始めました　わりと気分屋なので一定期間の出品になります</p>
						<p>希少価値の高い物を出品しているので是非ご検討・・・・</p>
					</div>
					<Link
						to="/layout/"
						className="text-[7px] leading-[8px]"
					>
						もっと見る
					</Link>
				</div>
				<div className="flex items-center mb-2 border-b border-neutral-1100">
					<button
						onClick={() => handleChangeType("sell", 8)}
						className={`relative pb-[5px] pl-3 pr-6 text-[9px] leading-[11px] ${type === "sell" ? "" : "text-neutral-1000"}`}
					>
						出品中アイテム（8）
						{type === "sell" && <span className="absolute top-full left-0 w-full h-[1px] bg-neutral-600"></span>}
					</button>
					<button
						onClick={() => handleChangeType("close", 4)}
						className={`relative pb-[5px] pl-3 pr-6 text-[9px] leading-[11px] ${type === "close" ? "" : "text-neutral-1000"}`}
					>
						出品終了アイテム（4）
						{type === "close" && <span className="absolute top-full left-0 w-full h-[1px] bg-neutral-600"></span>}
					</button>
				</div>
				<p className="text-[8px] leading-[10px] mb-3 ml-3">{number > 1 ? number + "items" : number + "item"}</p>
				<div className="grid grid-cols-4 gap-x-1 gap-y-7 mb-6">
					{
						listRecentProduct?.slice(0, number)?.map((item, index) => 
							<ProductPrice
								key={index}
								data={item}
							/>
						)
					}
				</div>
				<div className="px-2 mt-auto">
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
