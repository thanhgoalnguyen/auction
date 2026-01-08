import { Link, useLocation } from 'react-router-dom';

import { ROUTE_PATH } from '@/data/demo';

import logo from "@/assets/icon/header/logo.svg";
import search from "@/assets/icon/header/search.svg";

export default function Header() {
	const location = useLocation();
	const isRenderSearch = location?.pathname !== ROUTE_PATH?.SEARCH_TOP;

	return (
		<div className="relative flex justify-center items-center w-full max-w-[768px] pt-[22px] pb-[17px] [&_img]:w-full [&_img]:h-full">
			<Link 
				to={ROUTE_PATH?.TOP_NO_LOGIN} 
				className="w-full max-w-[103px] aspect-[103/16]"
			>
				<img 
					src={logo} 
					alt="logo"
					className='w-full h-full'
				/>
			</Link>
			{
				isRenderSearch && (
					<Link 
						to={ROUTE_PATH?.SEARCH_TOP}
						className="absolute top-[23px] right-[17px] w-4 h-4"
					>
						<img 
							src={search} 
							alt="search"
							className='w-full h-full'
						/>
					</Link>
				)
			}
		</div>
	)
}
