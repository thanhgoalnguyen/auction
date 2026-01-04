import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

import ProductPrice from "./ProductPrice";

export default function ProductFromSeller({list}) {
	return (
		<div className="flex flex-col gap-[17px] px-3 mb-[39px]">
			<div className="w-full px-[7px]">
				<div className="flex justify-between items-center pb-[5px] pl-[11px] pr-3 border-b border-neutral-300">
					<p className="text-[9px] leading-[11px] text-neutral-700">この出品者の商品</p>
					<Link 
						to="/"
						className="text-[7px] leading-[8px] text-neutral-600"
					>
						すべて見る ＞
					</Link>
				</div>
			</div>
			<div className="w-full">
				<Swiper
					spaceBetween={4}
					slidesPerView={4}
				>
					{
						list?.map((item, index) => 
							<SwiperSlide key={index}>	
								<ProductPrice data={item}/>
							</SwiperSlide>
						)
					}
				</Swiper>
			</div>
		</div>
	);
}
