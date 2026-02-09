import { useState } from "react"

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: React.ReactNode
    className?: string
    maxLength?: number
	onTextChange?: (value: string) => void;
	value?: string
}

export default function Textarea({className, label, placeholder, maxLength, onTextChange, value, ...rest}: TextareaProps) {
	const [length, setLength] = useState(value ? value?.length : 0);

	const handleChange = (event) => {
		const value = event?.target?.value;

		if (maxLength) {
			setLength(value?.length);
		}

		onTextChange(value)
	}

	return (
		<div className={`flex flex-col gap-1 ${className}`}>
			<div className='ml-1 text-[11px] leading-[13px] text-neutral-500'>{label}</div>
			<textarea 
				{...rest}
				value={value}
				placeholder={placeholder}
				maxLength={maxLength}
				onChange={handleChange}
				className="w-full h-[117px] py-3 px-2 mb-[6px] text-[9px] leading-[11px] text-black bg-neutral-300 rounded-[2px] outline-none resize-none placeholder:text-black"
			>
			</textarea>
			{
				maxLength && (
					<div className="flex justify-end w-full px-1">
						<p className='text-[7px] leading-[8px] text-neutral-700'>{length}/{maxLength}</p>
					</div>
				)
			}
		</div>
	);
}
