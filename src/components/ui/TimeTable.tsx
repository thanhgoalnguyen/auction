export default function TimeTable({list, className}) {
	return (
		<div className={`time-table flex flex-col gap-[11px] px-[15px] ${className}`}>
			<div className="pb-[5px] pl-[11px] border-b border-neutral-300">
				<p className="text-[9px] leading-[11px] text-neutral-700">タイムテーブル</p>
			</div>
			<div className="flex flex-col gap-4 pl-[9px] pr-[38px]">
				{
					list?.map((item, index) =>
						<div
							key={index}
							className="grid grid-cols-[72fr_224fr] items-center gap-[17px]"
						>
							<img 
								src={item?.img} 
								alt="product"
								className='aspect-square'
							/>
							<div className="flex flex-col gap-[14px]">
								<p className="text-[13px] leading-[16px] text-neutral-600">{item?.name}</p>
								<div className="flex items-end">
									<p className="mr-[18px] text-[8px] leading-[10px] text-neutral-600">最低落札価格：</p>
									<p className="text-[10px] leading-[12px] text-red-100">¥{item?.bid}</p>
									<p className="ml-auto text-[14px] leading-[17px] text-neutral-600">{item?.time}</p>
								</div>
							</div>
						</div>
					)
				}
		
			</div>
		</div>
	);
}
