import arrow from "@/assets/icon/dropdown/arrow.svg";

type DropdownProps = React.InputHTMLAttributes<HTMLInputElement> & {
	label?: string
	className?: string
	placeholder?: string
}

export default function Dropdown({className, label, placeholder, ...rest}: DropdownProps) {
  	return (
		<div className={`dropdown-container flex flex-col gap-1 ${className}`}>
			{
				label && (
					<label className='ml-1 text-[11px] leading-[13px] text-neutral-500'>{label}</label>
				)
			}
			<div className="flex justify-between items-center gap-1 w-full h-[29px] px-[13px] bg-neutral-300 border border-black rounded-[2px]">
				<p className="text-[7px] leading-[8px] text-black">{placeholder}</p>
				<img 
					src={arrow}
					alt="arrow"
					className="w-[5px] h-2"
				/>
			</div>
		</div>
	);
}
