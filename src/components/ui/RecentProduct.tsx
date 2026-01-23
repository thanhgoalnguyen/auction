import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

import ProductPrice from "./ProductPrice";

import product6 from "@/assets/img/6.png";
import product7 from "@/assets/img/7.png";
import product8 from "@/assets/img/8.png";
import product9 from "@/assets/img/9.png";

export default function RecentProduct() {
	const navigate = useNavigate();

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

	const handleClickDelete = () => {
		navigate('/layout/');
	}

	return (
		<div className="recent-product flex flex-col gap-2 w-full">
			<div className="flex justify-between items-center px-3">
				<p className="text-[11px] leading-[13px]">最近閲覧した商品</p>
				<button 
					onClick={handleClickDelete} 
					className="text-[9px] leading-[11px]"
				>
					すべて削除する
				</button>
			</div>
			<div className="w-full">
				<Swiper
					spaceBetween={4}
					slidesPerView={4}
				>
					{
						listRecentProduct?.map((item, index) => 
							<SwiperSlide key={index}>
								<ProductPrice
									data={item}
								/>
							</SwiperSlide>
						)
					}
				</Swiper>
			</div>
		</div>
	)
}
  