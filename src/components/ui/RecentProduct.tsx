import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

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
		navigate('/');
	}

	return (
		<div className="recent-product flex flex-col gap-[11px] w-full px-[6px] mb-[38px]">
			<div className="flex justify-between items-center pl-[9px] pr-[13px]">
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
								<Link 
									to={item?.link}
									className="relative"
								>
									<img 
										src={item?.img} 
										alt="product" 
										className="relative z-0 w-full aspect-square"
									/>
									<div className="absolute bottom-[6px] right-0 flex justify-end min-w-[49px] px-2 bg-white bg-opacity-70">
										<p className="text-[8px] leading-[10px]">¥{item?.money}</p>
									</div>
								</Link>
							</SwiperSlide>
						)
					}
				</Swiper>
			</div>
		</div>
	)
}
  