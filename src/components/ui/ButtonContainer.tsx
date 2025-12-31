type ButtonKind = 'primary' | 'secondary' | 'outline' | 'secondary-small'

type ButtonContainerProps =
	React.ButtonHTMLAttributes<HTMLButtonElement> & {
		children?: React.ReactNode
		kind?: ButtonKind
	}

export default function ButtonContainer({children, className, kind= "primary", ...rest}: ButtonContainerProps) {
	const handleRenderClass = () => {
		let typeClass= "";

		if (kind === "primary") {
			typeClass = "button-primary flex justify-center items-center w-full h-[37px] text-[11px] leading-[13px] text-white bg-red-300";
		} else if (kind === "outline") {
			typeClass = "button-outline flex justify-center items-center w-full h-[37px] text-[11px] leading-[13px] text-red-200 bg-neutral-200 border border-red-200";
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
