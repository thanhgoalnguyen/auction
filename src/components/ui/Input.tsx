import { useState } from "react"

import showPass from "@/assets/icon/input/showPass.svg";
import hidePass from "@/assets/icon/input/hidePass.svg";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	label?: string
	className?: string
	showPasswordIcon?: boolean,
	type?: string,
	maxLength?: number,
	title?: string
}

export default function Input({className, value, name, label, placeholder, type = "text", showPasswordIcon, maxLength, title, ...rest}: InputProps) {
	const [currentType, setCurrentType] = useState(type);
	const [length, setLength] = useState(0);

	const handleChangeType = () => {
		setCurrentType(currentType === "password" ? "text" : "password");
	}

	const handleChange = (event) => {
		if (maxLength) {
			const value = event?.target?.value;
			setLength(value?.length);
		}
	}

  	return (
		<div className={`input-container flex flex-col gap-[6px] ${className}`}>
			<div className='flex flex-col gap-1'>
				{
					label && (
						<label className='ml-1 text-[11px] leading-[13px] text-neutral-500'>{label}</label>
					)
				}
				<div className="flex items-center gap-1 w-full h-[29px] px-[13px] bg-neutral-300 border border-black rounded-[2px]">
					<input {...rest} onChange={handleChange} type={currentType} maxLength={maxLength} value={value} name={name} placeholder={placeholder} className='grow text-[7px] leading-[8px] text-black bg-transparent outline-none placeholder:text-black'/>
					{
						(type === "password" && showPasswordIcon) && (
							<button onClick={handleChangeType}>
								<img 
									src={currentType === "password" ? hidePass : showPass}
									alt="icon pass"
									className="w-[13px] h-2"
								/>
							</button>
						)
					}
				</div>
			</div>
			{
				(title || maxLength) && (
					<div className="flex justify-between items-center px-1 text-[7px] leading-[8px] text-neutral-500">
						{
							title && (
								<p>{title}</p>
							)
						}
						{
							maxLength && (
								<p className="input-max-length ml-auto">{length}/{maxLength}</p>
							)
						}
					</div>
				)
			}
		</div>
	);
}
