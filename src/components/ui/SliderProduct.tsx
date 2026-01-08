import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import heart from '@/assets/icon/itemDetail/heart.svg';
import prev from '@/assets/icon/itemDetail/prev.svg';
import next from '@/assets/icon/itemDetail/next.svg';
import DetailProduct from './DetailProduct';

type Data = {
	name: string,
	bid: string,
	like: number,
	list: string[],
	entry: number
}

type SliderProductProps = {
	isRoom?: boolean,
	data: Data,
	className: string
}

export default function SliderProduct({isRoom, data, className}: SliderProductProps)  {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(!open);
	}

	return (
		<div className={`flex flex-col ${className}`}>
			<div className="w-full px-[58px] mb-6">
				<div 
					className="relative
						[&_.swiper-pagination]:static [&_.swiper-pagination]:flex [&_.swiper-pagination]:justify-center [&_.swiper-pagination]:gap-4 [&_.swiper-pagination]:h-1 [&_.swiper-pagination]:mt-[17px]
						[&_.swiper-pagination-bullet]:block [&_.swiper-pagination-bullet]:w-1 [&_.swiper-pagination-bullet]:h-1 [&_.swiper-pagination-bullet]:!m-0 [&_.swiper-pagination-bullet]:bg-dark-400 [&_.swiper-pagination-bullet]:opacity-100
						[&_.swiper-pagination-bullet-active]:!bg-neutral-700
					"
				>
					<Swiper
						modules={[Navigation, Pagination]}
						spaceBetween={0}
						slidesPerView={1}
						pagination={{ clickable: true }}
						navigation={{
							nextEl: '.my-custom-next-button',
							prevEl: '.my-custom-prev-button',
						}}
					>
						{
							data?.list?.map((item, index) =>
								<SwiperSlide key={index}>
									<img 
										src={item} 
										alt="item"
										className='w-full aspect-[254/338]'
									/>
								</SwiperSlide>
							)
						}
					</Swiper>
					<button className="my-custom-prev-button absolute top-1/2 right-full -translate-y-1/2 translate-x-[-17px] w-[18px] h-[18px]">
						<img 
							src={prev} 
							alt="prev"
							className="w-full h-full"
						/>
					</button>
					<button className="my-custom-next-button absolute top-1/2 left-full -translate-y-1/2 translate-x-[17px] w-[18px] h-[18px]">
						<img 
							src={next} 
							alt="next"
							className="w-full h-full"
						/>
					</button>
				</div>
			</div>
			<div className="flex flex-col gap-2 w-full px-7">
				<p className="text-[16px] leading-[19px] text-neutral-600">{data?.name}</p>
				{
					isRoom ? (
						<div className="flex items-center gap-8">
							<p className="text-[8px] leading-[10px] text-neutral-600">出品点数：</p>
							<p className="text-[14px] leading-[17px] text-red-100">{data?.entry}点</p>
						</div>
					) : (
					<div className="flex items-center">
						<p className="mr-2 text-[8px] leading-[10px] text-neutral-600">最低落札価格：</p>
						<p className="mr-2 text-[14px] leading-[17px] text-red-100">¥{data?.bid}</p>
						<p className="text-[7px] leading-[8px] text-neutral-600">（税別）送料別途</p>
						<div className="flex items-center gap-1 ml-auto">
							<img 
								src={heart} 
								alt="heart"
								className='w-[9px] h-2'
							/>
							<p className="text-[7px] leading-[8px] text-neutral-600">{data?.like}</p>
						</div>
					</div>
					)
				}
			</div>
			{
				isRoom ? (
					<div className='w-full mt-12'>
						<div className='pb-1 pl-2 mb-8 border-b border-neutral-300'>
							<p className='text-[9px] leading-[11px] text-neutral-700'>オークションルームの説明</p>
						</div>
						<div className='w-full px-3 text-[11px] leading-[13px] text-neutral text-neutral-700'>
							<div className="flex flex-col gap-1 mb-5">
								<p>クリストファー・ネメス（CHRISTOPHER NEMETH）の立体裁断テーラー</p>
								<p>ドジャケットの他、3点出品しています。</p>
							</div>
							<div className="flex flex-col gap-1 mb-5">
								<p>メイン商品のジャケットはジャケット背面に大きく書かれたサインがあり、</p>
								<p>プリントではなくネメス氏本人が直筆書いたもの。前オーナーがネメス氏が</p>
								<p>来日した原宿本店で購入した際ネメス氏は惜しくも2010年に亡くなられて</p>
								<p>おりますので、もう2度と手に入ることのないスペシャルなアイテムです。</p>
							</div>
							<div className="flex flex-col gap-1 mb-5">
								<p>その他のアイテムも大変貴重な商品を出品していますのでオークション参加</p>
								<p>をご検討ください。</p>
							</div>
							<div className="flex flex-col gap-1 mb-5">
								<p>オークション開始価格</p>
								<p>400円スタート</p>
								<p>16,000円スタート</p>
								<p>22,000円スタート</p>
								<div className='flex items-center gap-5 mb-6'>
									<p>Psychedelic Knit Vest　：　</p>
									<p>30,000円スタート</p>
								</div>
							</div>
							<p className='mb-[42px]'>ビットレートは標準設定です。</p>
							<div className='flex items-center gap-[77px] mb-[18px]'>
								<p>開催予定時刻</p>
								<p>2026年3月26日19:00〜</p>
							</div>
							<div className='flex items-center gap-[77px]'>
								<p>終了予定時刻</p>
								<p>2026年3月26日19:40〜</p>
							</div>
						</div>
					</div>
				) : (
					<>
						<div className='flex flex-col gap-5 w-full px-[18px] mt-9 mb-10 text-[9px] leading-[11px] text-neutral-600'>
							<div className='flex flex-col gap-1'>
								<p>24awで同じ柄のタートルネックが非常に注目されていました。</p>
								<p>定価は70000前半ほどだったかと思います。</p>
							</div>
							<p>数回使用も趣味が変わったため出品いたします。</p>
							<div className="flex flex-col gap-1">
								<p>サイズ：M</p>
								<p>着丈：63cm</p>
								<p>肩幅：66cm</p>
								<p>身幅：74cm</p>
								<p>袖丈：59cm</p>
								<div className='flex justify-between items-center'>
									<p>...</p>
									<button 
										onClick={handleOpen}
										className='text-[7px] leading-[8px]'
									>
										もっと見る
									</button>
								</div>
							</div>
						</div>
						<div className='w-full'>
							<div className='pb-1 px-3 mb-2 border-b border-neutral-300'>
								<p className='text-[9px] leading-[11px] text-neutral-700'>商品の情報</p>
							</div>
							<div className='w-full px-[13px] text-[11px] leading-[13px] text-neutral text-neutral-700'>
								<div className='grid grid-cols-[88fr_187fr] items-center gap-[55px] mb-[23px]'>
									<p>カテゴリー</p>
									<div className='flex flex-col gap-[6px]'>
										<p>ファッション　＞</p>
										<p>レディース　＞</p>
										<p>トップス　＞</p>
										<p>ジャケット　＞</p>
										<p>長袖　＞</p>
									</div>
								</div>
								<div className='grid grid-cols-[88fr_187fr] items-center gap-[55px] mb-4'>
									<p>商品の状態</p>
									<div className='flex flex-col gap-1'>
										<p>目立った傷や汚れは無し</p>
										<p className='text-[8px] leading-[10px]'>細かな使用感・傷・汚れはあるが、目立たない</p>
									</div>
								</div>
								<div className='grid grid-cols-[88fr_187fr] items-center gap-[55px] mb-[18px]'>
									<p>配送料の負担</p>
									<p>送料別途（落札者負担）</p>
								</div>
								<div className='grid grid-cols-[88fr_187fr] items-center gap-[55px] mb-4'>
									<p>配送元地域</p>
									<p>東京都</p>
								</div>
								<div className='grid grid-cols-[88fr_187fr] items-center gap-[55px]'>
									<p>入札開始予定時間</p>
									<p>2026年3月26日19:00〜</p>
								</div>
							</div>
						</div>
					</>
				)
			}
			<DetailProduct
				open={open}
				handleOpen={handleOpen}
				data={data}
			/>
		</div>
	)
}
  