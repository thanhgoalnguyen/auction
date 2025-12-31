import { Link } from "react-router-dom";

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
						to="/" 
						className="text-inherit no-underline"
					>
						新規登録
					</Link>
					<Link 
						to="/" 
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
			<div className="page-header flex justify-center gap-[22px] w-full pt-[11px] pb-[15px] text-[11px] leading-[13px] text-white bg-dark-300">
				{handleRenderContent()}
			</div>
		)
	)
}
  