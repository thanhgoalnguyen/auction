import PageHeader from "@/components/layout/PageHeader";
import SliderProduct from "@/components/ui/SliderProduct";
import ButtonContainer from "@/components/ui/ButtonContainer";
import Seller from "@/components/ui/Seller";
import TimeTable from "@/components/ui/TimeTable";

import avatar from "@/assets/icon/userProfile/avatar.svg";
import product6 from "@/assets/img/6.png";
import product7 from "@/assets/img/7.png";
import product9 from "@/assets/img/9.png";
import productImg from "@/assets/img/30.png";

export default function RoomDetail() {
	const data = {
		name: "W&LT / Psychedelic Knit Vest",
		bid: "30,000",
		like: 32,
		list: [productImg, productImg, productImg, productImg],
		entry: 4
	};

	const seller = {
		avatar: avatar,
		name: "Mami’s Closet"
	};

	const timeTable = [
		{
			img: product9,
			name: "Noir kei ninomiya クロスエンブレム",
			bid: "1,400",
			time: "19:00頃〜"
		},
		{
			img: product7,
			name: "アーティザナル トロンプルイユ",
			bid: "16,000",
			time: "19:10頃〜"
		},
		{
			img: product6,
			name: "DRIES VAN NOTEN スタッズ",
			bid: "22,000",
			time: "19:20頃〜"
		},
		{
			img: productImg,
			name: "W&LT / Psychedelic Knit Vest",
			bid: "30,000",
			time: "19:30頃〜"
		},
	]

	return (
		<div className="item-detail-page flex flex-col items-center w-full h-max min-h-full">
			<PageHeader title="商品詳細"/>
			<div className="container flex flex-col">
				<SliderProduct data={data} isRoom className="mb-[54px]"/>
				<Seller data={seller} className="mb-[33px]"/>
				<TimeTable className="mb-[65px]" list={timeTable}/>
				<ButtonContainer>
					2026年3月26日19:00頃〜　配信開始
				</ButtonContainer>
			</div>
		</div>
	);
}
