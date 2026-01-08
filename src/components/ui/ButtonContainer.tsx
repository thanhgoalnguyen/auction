type ButtonKind = 'primary' | 'primary-large' | 'secondary' | 'secondary-small' | 'outline'

type ButtonContainerProps =
	React.ButtonHTMLAttributes<HTMLButtonElement> & {
		children?: React.ReactNode
		kind?: ButtonKind
	}

export default function ButtonContainer({children, className, kind= "primary", ...rest}: ButtonContainerProps) {
	const handleRenderClass = () => {
		let typeClass= "";

		if (kind === "primary") {
			typeClass = "button-primary flex justify-center items-center w-full h-[37px] text-[11px] leading-[13px] text-white bg-red-300 rounded-[2px]";
		} else if (kind === "primary-large") {
			typeClass = "button-primary-large flex justify-center items-center w-full h-[42px] text-[14px] leading-[17px] text-neutral-600 bg-red-300 rounded-[2px]";
		} else if (kind === "outline") {
			typeClass = "button-outline flex justify-center items-center w-full h-[37px] text-[11px] leading-[13px] text-red-200 bg-neutral-200 border border-red-200 rounded-[2px]";
		} else if (kind === "secondary") {
			typeClass = "button-secondary flex justify-center items-center w-full h-[27px] text-[10px] leading-[12px] text-white bg-dark-200 rounded-[2px]";
		} else if (kind === "secondary-small") {
			typeClass = "button-secondary-small flex justify-center items-center w-full h-[22px] text-[10px] leading-[12px] text-white bg-dark-200 rounded-full";
		}

		return typeClass + " " + className;
	}
	
  	return (
		<button 
			className={handleRenderClass()}
			{...rest}
		>
			{children}
		</button>
	);
}
