import { Link } from "react-router-dom";

export default function ProductPrice({data}) {
	return (
		<Link 
			to={data?.link}
			className="relative"
		>
			<img 
				src={data?.img} 
				alt="product" 
				className="relative z-0 w-full aspect-square"
			/>
			<div className="absolute bottom-[6px] right-0 flex justify-end min-w-[49px] px-2 bg-white bg-opacity-70">
				<p className="text-[8px] leading-[10px] text-black">¥{data?.money}</p>
			</div>
		</Link>
	)
}
  