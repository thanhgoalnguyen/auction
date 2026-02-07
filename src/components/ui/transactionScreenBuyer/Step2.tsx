import truck from "@/assets/icon/transactionScreenBuyer/truck.svg";

const Step2 = () => {
    return (
        <div className="flex flex-col gap-[6px] py-[10px] px-5 bg-neutral-1400 border border-black rounded-[8px]">
			<div className="flex items-center gap-[6px]">
				<img src={truck} alt="truck" className="w-[19px] h-[11px]"/>
				<p className="text-[11px] leading-[13px] text-neutral-500">発送をお待ちください</p>
			</div>
			<p className="text-[9px] leading-[11px] text-neutral-700">出品者からの発送通知をお待ちください</p>
		</div>
    );
};

export default Step2;