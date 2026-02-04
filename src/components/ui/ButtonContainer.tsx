type ButtonKind = 'primary' | 'primary-large' | 'secondary' | 'secondary-small' | 'outline'

type ButtonContainerProps =
	React.ButtonHTMLAttributes<HTMLButtonElement> & {
		children?: React.ReactNode
		kind?: ButtonKind
		isUpload?: boolean
	}

export default function ButtonContainer({children, className, kind= "primary", isUpload, ...rest}: ButtonContainerProps) {
	const handleRenderClass = () => {
		let typeClass= "";

		if (kind === "primary") {
			typeClass = "relative button-primary flex justify-center items-center gap-[6px] w-full h-[37px] text-[11px] leading-[13px] text-white bg-red-300 rounded-[2px]";
		} else if (kind === "primary-large") {
			typeClass = "relative button-primary-large flex justify-center items-center gap-[6px] w-full h-[42px] text-[14px] leading-[17px] text-neutral-600 bg-red-300 rounded-[2px]";
		} else if (kind === "outline") {
			typeClass = "relative button-outline flex justify-center items-center gap-[6px] w-full h-[37px] text-[11px] leading-[13px] text-red-200 bg-neutral-200 border border-red-200 rounded-[2px]";
		} else if (kind === "secondary") {
			typeClass = "relative button-secondary flex justify-center items-center gap-[6px] w-full h-[27px] text-[10px] leading-[12px] text-white bg-dark-200 rounded-[2px]";
		} else if (kind === "secondary-small") {
			typeClass = "relative button-secondary-small flex justify-center items-center gap-[6px] w-full h-[22px] text-[10px] leading-[12px] text-white bg-dark-200 rounded-full";
		}

		return typeClass + " " + className;
	}
	
  	return (
		<button 
			className={handleRenderClass()}
			{...rest}
		>
			{children}
			{
				isUpload && (
					<input 
						type="file" 
						multiple 
						accept=".jpg, .jpeg, .png, .webp"
						className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" 
					/>
				)
			}
		</button>
	);
}
