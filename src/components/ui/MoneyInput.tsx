type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	className?: string
	onMoneyChange?: (value: number) => void;
	value?: number
}

export default function MoneyInput({className, value, name, onMoneyChange}: InputProps) {
	const formatDisplay = (val: string | number | undefined) => {
        if (val === undefined || val === null || val === "") return "";
        
        const stringValue = val.toString().replace(/[^\d]/g, "");
        if (!stringValue) return "";

        return stringValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const handleChangeMoney = (e: React.ChangeEvent<HTMLInputElement>) => {
        let rawValue = e.target.value.replace(/[^\d]/g, "");
        if (rawValue.length > 1) {
            rawValue = rawValue.replace(/^0+/, "");
        } else if (rawValue === "") {
            rawValue = "0";
        }

        if (onMoneyChange) {
            const safeValue = rawValue.length > 15 ? rawValue.slice(0, 15) : rawValue;
            onMoneyChange(safeValue === "" ? 0 : parseInt(safeValue, 10));
        }
    };

  	return (
		<div className={`input-container flex flex-col gap-1 w-full ${className || ""}`}>
			<label className="ml-1 text-[11px] leading-[13px] text-neutral-500">開始価格</label>
			<div className="flex items-center gap-1 w-full h-[29px] px-[13px] bg-neutral-300 border border-black rounded-[2px]">
				<p className="text-[9px] leading-[11px] text-black">¥</p>
				<input
				 	value={formatDisplay(value ?? "")} 
					placeholder="0" 
					onChange={handleChangeMoney} 
					type="text" 
					name={name} 
					inputMode="numeric"
					className="grow text-[7px] leading-[8px] text-black text-right bg-transparent outline-none placeholder:text-black"
				/>
			</div>
		</div>
	);
}
