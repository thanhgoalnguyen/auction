import PageHeader from "@/components/layout/PageHeader";
import WonItemListItem from "@/components/ui/WonItemListItem";

import product1 from "@/assets/img/10.png";

export default function WonItemList() {
	const wonItemList = [
		{
			img: product1,
			name: "balenciaga ストンパーブーツ",
			time: "2026/01/18 20:30",
			link: "/layout"
		},
	]

	return (
		<div className="won-item-list-page page-container flex flex-col items-center w-full h-max">
			<PageHeader title="落札した商品"/>
			<div className="container">
				{
					wonItemList?.map((item, index) => 
						<WonItemListItem isFirst={index === 0} data={item} key={index}/>
					)
				}
			</div>
		</div>
	);
}
