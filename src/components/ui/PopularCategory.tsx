import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

import { ROUTE_PATH } from '@/data/demo';

import category1 from "@/assets/img/1.png";
import category2 from "@/assets/img/2.png";
import category3 from "@/assets/img/3.png";
import category4 from "@/assets/img/4.png";
import category5 from "@/assets/img/5.png";
import category6 from "@/assets/img/6.png";

export default function PopularCategory() {
	const listPopularCategory = [
		{
			img: category1,
			name: "ジーンズ",
			link: "/"
		},
		{
			img: category2,
			name: "時計",
			link: "/"
		},
		{
			img: category3,
			name: "ジャケット",
			link: "/"
		},
		{
			img: category4,
			name: "シャツ",
			link: "/"
		},
		{
			img: category5,
			name: "シューズ",
			link: "/"
		},
		{
			img: category6,
			name: "ジャケット",
			link: "/"
		},
		{
			img: category1,
			name: "ジーンズ",
			link: "/"
		},
		{
			img: category2,
			name: "時計",
			link: "/"
		},
	]
	return (
		<div className="popular-category flex flex-col gap-2 w-full">
			<div className="flex justify-between items-end px-3">
				<p className="text-[11px] leading-[13px]">人気のカテゴリー</p>
				<Link 
					to={ROUTE_PATH?.CATEGORY_LIST}
					className="text-[9px] leading-[11px]"
				>
					すべて見る ＞
				</Link>
			</div>
			<div className="w-full">
				<Swiper
					spaceBetween={4}
					slidesPerView={5}
				>
					{
						listPopularCategory?.map((item, index) => 
							<SwiperSlide key={index}>	
								<Link 
									to={item?.link} 
									className="flex flex-col items-center gap-1"
								>
									<img 
										src={item?.img} 
										alt="category" 
										className="w-full aspect-square object-cover rounded-[8px]"
									/>
									<p className="text-[8px] leading-[10px] text-neutral-1200 text-center">{item?.name}</p>
								</Link>
							</SwiperSlide>
						)
					}
				</Swiper>
			</div>
		</div>
	)
}
  