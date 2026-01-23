import PageHeader from "@/components/layout/PageHeader";
import PolicyTerm from "@/components/ui/PolicyTerm";
import ViewHistoryItem from "@/components/ui/ViewHistoryItem";

import product1 from "@/assets/img/10.png";
import product2 from "@/assets/img/11.png";
import product12 from "@/assets/img/12.png";
import product13 from "@/assets/img/13.png";
import product14 from "@/assets/img/14.png";
import product15 from "@/assets/img/15.png";

export default function ViewHistory() {
	const viewHistoryList = [
		{
			img: product1,
			name: "balenciaga ストンパーブーツ",
			money: "1,200",
			link: "/layout"
		},
		{
			img: product2,
			name: "Noir kei ninomiya ラッフルスカート",
			money: "9,500",
			link: "/layout"
		},
		{
			img: product12,
			name: "DRIES VAN NOTEN スタッズ",
			money: "6,000",
			link: "/layout"
		},
		{
			img: product13,
			name: "W&LT / Psychedelic Knit Vest",
			money: "12,000",
			link: "/layout"
		},
		{
			img: product14,
			name: "アーティザナル トロンプルイユ",
			money: "9,200",
			link: "/layout"
		},
		{
			img: product15,
			name: "Archive Denim Half Coat",
			money: "38,000",
			link: "/layout"
		},
	]

	return (
		<div className="view-history-page flex flex-col items-center w-full h-max min-h-full">
			<PageHeader title="閲覧履歴"/>
			<div className="container">
				{
					viewHistoryList?.map((item, index) => 
						<ViewHistoryItem isFirst={index === 0} data={item} key={index}/>
					)
				}
			</div>
			<PolicyTerm showMore/>
		</div>
	);
}
