export default function Seller({data, className}) {
	return (
		<div className={`seller flex flex-col gap-[15px] px-[15px] ${className}`}>
			<div className="pb-[5px] pl-[11px] border-b border-neutral-300">
				<p className="text-[9px] leading-[11px] text-neutral-700">出品者</p>
			</div>
			<div className="flex gap-4">
				<img 
					src={data?.avatar} 
					alt="avatar"
					className='w-full max-w-[43px] aspect-square rounded-full'
				/>
				<p className="mt-[10px] text-[16px] leading-[19px] text-neutral-600">{data?.name}</p>
			</div>
		</div>
	);
}
