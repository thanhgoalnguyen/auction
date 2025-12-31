import { Outlet, useLocation,  } from "react-router-dom";
import { useRef, useLayoutEffect } from "react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Layout() {
	const location = useLocation();
	const bodyContainerRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		bodyContainerRef.current.scrollTo(0, 0);
	}, [location.pathname]);

	return (
		<div className="main-layout flex flex-col items-center w-full h-full bg-dark-100">
			<header className="flex justify-center w-full h-max bg-dark-100">
				<Header/>
			</header>
			<div 
				ref={bodyContainerRef} 
				className="relative body-container no-scrollbar flex justify-content grow w-full overflow-auto"
			>
				<Outlet context={bodyContainerRef}/>
			</div>
			<footer className="flex justify-center w-full h-max bg-dark-300">
				<Footer/>
			</footer>
		</div>	
	)
}
