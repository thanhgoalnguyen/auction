import { useState } from "react";

import PageHeader from "@/components/layout/PageHeader";
import PrivacyTerms from "@/components/ui/PrivacyTerms";

import checkbox from "@/assets/icon/likeList/checkbox.svg";
import edit from "@/assets/icon/likeList/edit.svg";
import trash from "@/assets/icon/likeList/trash.svg";
import product1 from "@/assets/img/10.png";
import product2 from "@/assets/img/11.png";

export default function LikeList() {
	const [isEdit, setIsEdit] = useState(false);

	const listLkeList = [
		{
			img: product1,
			name: "balenciaga ストンパーブーツ",
			money: "1,200"
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
			<div className="flex flex-col gap-[17px] w-full max-w-[768px] pt-7 pb-[58px] px-4">
				<div className="flex justify-between items-center pl-[13px] pr-1 text-[10px] leading-[12px]">
					<label className="flex items-center gap-[9px] cursor-pointer">
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
					<div className="pb-[5px] pl-[13px] border-b border-neutral-300">
						<p className="text-[12px] leading-[15px]">全ての商品</p>
					</div>
					<div className="flex flex-col gap-[10px]">
						{
							listLkeList?.map((item, index) =>
								<div 
									key="index"
									className="grid grid-cols-[84fr_241fr] gap-[18px] items-center pb-[7px] pl-[6px] pr-[7px] border-b border-neutral-300"
								>
									<img
										src={item?.img}
										alt="product"
										className="aspect-square"
									/>
									<div className="flex flex-col gap-[17px]">
										<p className="text-[13px] leading-[16px]">{item?.name}</p>
										<div className="flex justify-between items-center gap-1">
											<div className="flex items-center gap-[27px] text-[10px] leading-[12px]">
												<p>最低落札価格：</p>
												<p>¥{item?.money}</p>
											</div>
											<button className={!isEdit && "invisible"}>
												<img 
													src={trash} 
													alt="trash" 
													className="w-[10px] h-[14px]"
												/>
											</button>
										</div>
									</div>
								</div>
							)
						}
					</div>
				</div>
			</div>
			<PrivacyTerms/>
		</div>
	);
}
