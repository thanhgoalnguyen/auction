type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	className?: string
}

export default function MoneyInput({className, value, name, ...rest}: InputProps) {
  	return (
		<div className={`input-container flex flex-col gap-1 ${className}`}>
			<label className="ml-1 text-[11px] leading-[13px] text-neutral-500">開始価格</label>
			<div className="flex items-center gap-1 w-full h-[29px] px-[13px] bg-neutral-300 border border-black rounded-[2px]">
				<p className="text-[9px] leading-[11px] text-black">¥</p>
				<input {...rest} type="number" value={value} name={name} className="grow text-[7px] leading-[8px] text-black text-right bg-transparent outline-none placeholder:text-black"/>
			</div>
		</div>
	);
}
