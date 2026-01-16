import { useState } from "react";

import PageHeader from "@/components/layout/PageHeader";
import PolicyTerm from "@/components/ui/PolicyTerm";
import LikeListItem from "@/components/ui/LikeListItem";

import checkbox from "@/assets/icon/likeList/checkbox.svg";
import edit from "@/assets/icon/likeList/edit.svg";
import product1 from "@/assets/img/10.png";
import product2 from "@/assets/img/11.png";

export default function LikeList() {
	const [isEdit, setIsEdit] = useState(false);

	const listLkeList = [
		{
			img: product1,
			name: "balenciaga ストンパーブーツ",
			money: "1,200",
			isRed: true
		},
		{
			img: product2,
			name: "Noir kei ninomiya ラッフルスカート",
			money: "9,500"
		},
	]

	const handleSetEdit = () => {
		setIsEdit(!isEdit);
	}

	return (
		<div className="like-list flex flex-col items-center w-full h-max min-h-full">
			<PageHeader title="いいね！一覧"/>
			<div className="container flex flex-col gap-4">
				<div className="flex justify-between items-center px-3 text-[10px] leading-[12px]">
					<label className="flex items-center gap-2 cursor-pointer">
						<img 
							src={checkbox} 
							alt="checkbox" 
							className="w-2 h-2"
						/>
						<p>出品中のみ表示</p>
					</label>
					<button
						onClick={handleSetEdit}
					 	className="flex items-center gap-3"
					>
						<p>{isEdit ? "完了する" : "編集する"}</p>
						{!isEdit && (
							<img
								src={edit}
								alt="edit"
								className="w-[10px] h-[10px]"
							/>
						)}
					</button>
				</div>
				<div className="flex flex-col gap-[10px]">
					<div className="pb-1 pl-3 border-b border-neutral-300">
						<p className="text-[12px] leading-[15px]">全ての商品</p>
					</div>
					<div className="flex flex-col gap-[10px]">
						{
							listLkeList?.map((item, index) =>
								<LikeListItem 
									isEdit={isEdit} 
									data={item} 
									key={index}
								/>
							)
						}
					</div>
				</div>
			</div>
			<PolicyTerm/>
		</div>
	);
}
