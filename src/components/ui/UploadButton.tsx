import camera from "@/assets/icon/uploadButton/camera.svg";

type UploadButtonProps = {
	hiddenIcon?: boolean
	className?: string
}

export default function UploadButton({hiddenIcon, className, ...rest}: UploadButtonProps) {
	return (
		<label
				className={`flex justify-center items-center gap-2 w-full h-[27px] text-[11px] leading-[13px] text-red-200 border border-red-200 rounded-[4px] cursor-pointer ${className}`}
			>
				{
					!hiddenIcon && (
						<img src={camera} alt="camera" className="w-[15px] h-[11px]"/>
					)
				}
				<p>画像を選択する</p>
				<input 
					type="file" 
					multiple 
					accept="image/*" 
					hidden 
					{...rest}
				/>
			</label>
	);
}
