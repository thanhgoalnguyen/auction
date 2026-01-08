import { Link } from "react-router-dom";

import arrowDown from '@/assets/icon/policyTerm/arrow-down.svg';
import logo from "@/assets/icon/header/logo.svg";

type PolicyTermProps = {
	showMore?: boolean,
	hiddenList?: boolean
}

export default function PolicyTerm({showMore, hiddenList}: PolicyTermProps)  {
	const linkPolicyTerm = [
		{
			label: "FutureVintage利用規約",
			link: "/"
		},
		{
			label: "特定商取引に関する表記及び古物営業法に基づく表記",
			link: "/"
		},
		{
			label: "プライバシーポリシー",
			link: "/"
		},
	]
	return (
		<div className="privacy-terms flex flex-col items-center w-full mt-auto">
			<div className="flex flex-col gap-6 w-full max-w-[768px] pb-3 px-[10px]">
				{
					!hiddenList && (
						<div className="flex flex-col gap-[23px]">
							{showMore &&
								<>
									<button className="flex justify-between items-center cursor-pointer">
										<p className="text-[11px] leading-[13px]">FutureVintageについて</p>
										<img 
											src={arrowDown} 
											alt="arrow" 
											className="w-2 h-[5px]"
										/>
									</button>
									<button className="flex justify-between items-center cursor-pointer">
										<p className="text-[11px] leading-[13px]">ヘルプ</p>
										<img 
											src={arrowDown} 
											alt="arrow" 
											className="w-2 h-[5px]"
										/>
									</button>
								</>
							}
						
							<div className="group">
								<label className="flex justify-between items-center pb-4 border-b border-dark-200 cursor-pointer">
									<p className="text-[11px] leading-[13px]">プライバシーと利用規約</p>
									<img 
										src={arrowDown} 
										alt="arrow" 
										className="w-2 h-[5px] transition-transform duration-300 group-has-[input:checked]:[transform:rotateX(180deg)]"
									/>
									<input 
										type="checkbox" 
										className="hidden" 
									/>
								</label>
								<div className="w-full max-h-0 overflow-hidden transition-[max-height] duration-300 group-has-[input:checked]:max-h-[170px]">
									<div className="flex flex-col gap-[29px] w-full pt-[21px] pb-[25px] px-1">
										{
											linkPolicyTerm?.map((item, index) => 	
												<Link 
													to={item?.link} 
													className="text-[11px] leading-[13px]"
													key={index}
												>
													{item?.label}
												</Link>
											)
										}
									</div>
								</div>
							</div>
						</div>
					)
				}
				<p className="text-[8px] leading-[10px]">@Creative & Planning by New Company.2026</p>
			</div>
			<div className="flex justify-center w-full h-[45px] pt-4 bg-dark-300">
				<img
					src={logo}
					alt="logo"
					className="w-full max-w-[121px] aspect-[121/18]"
				/>
			</div>
		</div>
	)
}
  