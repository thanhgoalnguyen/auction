import { Fragment } from 'react';

const StepList = ({listStep, currentStep}) => {
    return (
  		<div className="flex flex-col gap-9 pb-[23px] mb-4">
			<p className="text-[11px] leading-[13px] text-neutral-500">取引状況</p>
			<div className="flex items-center w-full px-7">
				{
					listStep?.map((item) => {
						const activeItem = !item?.first && item?.value === currentStep?.value;
						const isPass = currentStep?.id > item?.id;
						const isFirstItem = item?.first;
						const isLastItem = item?.last;
						const itemClass = isFirstItem || activeItem || isPass ? "bg-red-300" : "bg-neutral-800";
						const textClass = isLastItem ? "text-neutral-600" : (activeItem ? "text-red-300" : "text-neutral-700");
						let lineClass = "w-0";

						if (activeItem) {
							lineClass = "w-1/2";
						} else if (isPass) {
							lineClass = "w-full";
						}

						return (
							<Fragment key={item?.id} >
								<div className={`relative min-w-[14px] h-[14px] rounded-full ${itemClass}`}>
									{
										activeItem && (
											<span className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] w-[23px] h-[23px] border-[2px] border-red-300 rounded-full"></span>
										)
									}
									<p className={`absolute top-full left-1/2 translate-y-[10px] translate-x-[-50%] w-max text-[11px] leading-[13px] ${textClass}`}>{item?.title}</p>
								</div>
								{
									!isLastItem && (
										<div className="relative flex-1 h-[3px] bg-neutral-800">
											<div className="absolute top-0 left-0 z-0 w-[calc(100%+1px)] h-full bg-neutral-800"></div>
											<div className={`relative z-[1] h-full bg-red-300 ${lineClass}`}></div>
										</div>
									)
								}
							</Fragment>
						)
					})
				}
			</div>
		</div>
    );
};

export default StepList;