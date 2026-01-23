import plus from "@/assets/icon/addButton/plus.svg"

type AddButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	label?: string
	className?: string
}

export default function AddButton ({label, className, ...rest}: AddButtonProps) {
	return (
		<button 
			{...rest}
			className={`flex items-center gap-4 ml-[10px] ${className}`}
		>
			<img
				src={plus}
				alt="plus"
				className="w-3 h-3"
			/>
			<p className="text-[13px] leading-[16px] text-red-200">{label}</p>
		</button>
	)
}