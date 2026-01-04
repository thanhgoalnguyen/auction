export default function AuctionRoom({data}) {
	return (
		<div className="auction-room flex flex-col gap-5 px-[17px] mb-[25px]">
			<div className="pb-[5px] pl-[11px] border-b border-neutral-300">
				<p className="text-[9px] leading-[11px] text-neutral-700">オークションルーム</p>
			</div>
			<div className="flex items-center gap-6 px-[9px]">
				<img 
					src={data?.img} 
					alt="avatar"
					className='w-full max-w-[50px] aspect-[50/48]'
				/>
				<div className="flex flex-col gap-[10px] text-[9px] leading-[11px] text-neutral-600">
					<p>{data?.name}</p>
					<p>{data?.time}</p>
				</div>
			</div>
		</div>
	);
}
