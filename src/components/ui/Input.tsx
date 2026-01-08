type InputProps =
	React.InputHTMLAttributes<HTMLInputElement> & {
		label?: string
		className?: string
		children?: React.ReactNode
	}


export default function Input({children, className, value, name, label, placeholder}: InputProps) {
  	return (
		<div className={`input-container flex flex-col gap-[6px] ${className}`}>
			<div className='flex flex-col gap-1'>
				{
					label && (
						<p className='ml-1 text-[11px] leading-[13px]'>{label}</p>
					)
				}
				<input value={value} name={name} placeholder={placeholder} className='w-full h-[29px] px-[13px] text-[7px] leading-[8px] text-black bg-neutral-300 border border-black outline-none rounded-[2px] placeholder:text-black'/>
			</div>
			{
				children && (
					<div className="flex justify-between items-center pl-1 pr-[6px] text-[7px] leading-[8px]">
						{children}
					</div>
				)
			}
		</div>
	);
}
