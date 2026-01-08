import PageHeader from "@/components/layout/PageHeader";
import PopularCategory from "@/components/ui/PopularCategory";
import RecentProduct from "@/components/ui/RecentProduct";
import RecommendProduct from "@/components/ui/RecommendProduct";
import PolicyTerm from "@/components/ui/PolicyTerm";

export default function TopNoLogin() {
	return (
		<div className="top-no-login flex flex-col items-center w-full h-max min-h-full">
			<PageHeader isTopPage/>
			<div className="container flex flex-col gap-8">
				<PopularCategory/>
				<RecentProduct/>
				<RecommendProduct/>
			</div>
			<PolicyTerm/>
		</div>
	);
}
