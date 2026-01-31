import { Outlet, useLocation,  } from "react-router-dom";
import { useRef, useLayoutEffect } from "react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PolicyTerm from "@/components/ui/PolicyTerm";

import { HIDDEN_FOOTER, HIDDEN_POLICY_TERM, SHOW_MORE_POLICY_TERM, HIDDEN_LIST_POLICY_TERM, HIDDEN_COPYRIGHT_POLICY_TERM } from "@/data/demo";

export default function Layout() {
	const location = useLocation();
	const bodyContainerRef = useRef<HTMLDivElement>(null);

	const isHiddenFooter = HIDDEN_FOOTER?.includes(location.pathname);
	const isHiddenPolicyTerm = HIDDEN_POLICY_TERM?.includes(location.pathname);
	const isShowMorePolicyTerm = SHOW_MORE_POLICY_TERM?.includes(location.pathname);
	const isHiddenListPolicyTerm = HIDDEN_LIST_POLICY_TERM?.includes(location.pathname);
	const isHiddenCopyrightPolicyTerm = HIDDEN_COPYRIGHT_POLICY_TERM?.includes(location.pathname);

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
				className="relative body-container no-scrollbar flex flex-col items-center grow w-full overflow-auto"
			>
				<Outlet context={bodyContainerRef}/>
				{
					!isHiddenPolicyTerm && (
						<PolicyTerm showMore={isShowMorePolicyTerm} hiddenCopyRight={isHiddenCopyrightPolicyTerm} hiddenList={isHiddenListPolicyTerm}/>
					)
				}
			</div>
			{
				!isHiddenFooter && (
					<footer className="w-full">
						<Footer/>
					</footer>
				)
			}
		</div>	
	)
}
