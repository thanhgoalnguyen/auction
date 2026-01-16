import { Link } from "react-router-dom";

import { ROUTE_PATH } from "@/data/demo";

type PageHeaderProps = {
	isTopPage?: boolean
	isAuth?: boolean
	title?: string
}

export default function PageHeader({ isTopPage = false, isAuth = false, title = "" }: PageHeaderProps) {
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
			<div className={`page-header flex justify-center gap-[22px] w-full pt-[11px] pb-[15px] text-[11px] leading-[13px] text-white bg-dark-300 ${isTopPage && !isAuth && "sticky top-0 z-[2]"}`}>
				{handleRenderContent()}
			</div>
		)
	)
}
  