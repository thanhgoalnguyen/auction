import { Link } from "react-router-dom";

import { ROUTE_PATH } from "@/data/demo";

import arrowRight from "@/assets/icon/searchTop/arrow-right.svg";

type PageHeaderProps = {
	isTopPage?: boolean
	isAuth?: boolean
	title?: string
	handleBack?: Function
	showBack?: boolean
}

export default function PageHeader({ isTopPage = false, isAuth = false, title = "", handleBack, showBack }: PageHeaderProps) {
	const handleRenderContent = () => {
		if (isTopPage) {
			if (isAuth) {
				return <p>Welcome Back</p>;
			} else {
				return <>
					<Link 
						to={ROUTE_PATH?.USER_REGISTRATION} 
						className="text-inherit no-underline"
					>
						新規登録
					</Link>
					<Link 
						to={ROUTE_PATH?.LOGIN} 
						className="text-inherit no-underline"
					>
						ログイン
					</Link>
				</>;
			}
		} else {
			return <p>{title}</p>;
		}
	}

	return (
		(isTopPage || title) && (
			<div className={`page-header flex justify-center w-full h-[39px] text-[11px] leading-[13px] text-white bg-dark-300 ${isTopPage && !isAuth && "sticky top-0 z-[2]"}`}>
				<div className="relative flex justify-center items-center gap-[22px] w-full max-w-[768px] h-full px-[10px]">
					{handleRenderContent()}
					{
						showBack && (
							<button onClick={() => handleBack()} className="absolute top-1/2 left-[10px] translate-y-[-50%]">
								<img src={arrowRight} alt="arrow" className="[transform:rotateY(180deg)]" />
							</button>
						)
					}
				</div>
			</div>
		)
	)
}
  