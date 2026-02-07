import fastTruck from "@/assets/icon/transactionScreenBuyer/fast-truck.svg";

const Step3 = () => {
    return (
		<div className="flex flex-col gap-[6px] py-[10px] px-5 bg-neutral-1400 border border-black rounded-[8px]">
			<div className="flex items-center gap-[6px]">
				<img src={fastTruck} alt="truck" className="w-[21px] h-[11px]"/>
				<p className="text-[11px] leading-[13px] text-neutral-500">商品を発送済です</p>
			</div>
			<p className="text-[9px] leading-[11px] text-neutral-700">落札者の受け取り連絡をおまち下さい。</p>
		</div>
    );
};

export default Step3;