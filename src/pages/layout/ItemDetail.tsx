import PageHeader from "@/components/layout/PageHeader";
import SliderProduct from "@/components/ui/SliderProduct";
import Seller from "@/components/ui/Seller";
import AuctionRoom from "@/components/ui/AuctionRoom";
import ProductFromSeller from "@/components/ui/ProductFromSeller";
import RecommendThisProduct from "@/components/ui/RecommendThisProduct";
import ButtonContainer from "@/components/ui/ButtonContainer";

import productImg from "@/assets/img/30.png";
import avatar from "@/assets/icon/userProfile/avatar.svg";
import product6 from "@/assets/img/6.png";
import product7 from "@/assets/img/7.png";
import product8 from "@/assets/img/8.png";
import product9 from "@/assets/img/9.png";

export default function ItemDetail() {
	const data = {
		name: "W&LT / Psychedelic Knit Vest",
		bid: "30,000",
		like: 32,
		list: [productImg, productImg, productImg, productImg, productImg],
		entry: 4,
		img: productImg
	};

	const seller = {
		avatar: avatar,
		name: "Mami’s Closet"
	};

	const auctionRoom = {
		img: product6,
		name: "Mami’s Monthly オークションvol.01",
		time: "配信開始　３月26日　19：00〜"
	};

	const listProductFromSeller = [
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

	const listRecommendThisProduct = [
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
	];

	return (
		<div className="item-detail-page page-container flex flex-col items-center w-full h-max">
			<PageHeader title="商品詳細"/>
			<div className="container flex flex-col">
				<SliderProduct data={data} className="mb-[49px]"/>
				<Seller data={seller} className="mb-9"/>
				<AuctionRoom data={auctionRoom}/>
				<ProductFromSeller list={listProductFromSeller}/>
				<RecommendThisProduct list={listRecommendThisProduct}/>
				<ButtonContainer>
					2026年3月26日19:00頃〜　配信開始
				</ButtonContainer>
			</div>
		</div>
	);
}
