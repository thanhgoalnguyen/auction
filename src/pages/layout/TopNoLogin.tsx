import PageHeader from "@/components/layout/PageHeader";
import PopularCategory from "@/components/ui/PopularCategory";
import RecentProduct from "@/components/ui/RecentProduct";
import RecommendProduct from "@/components/ui/RecommendProduct";

export default function TopNoLogin() {
	return (
		<div className="top-no-login-page page-container flex flex-col items-center w-full h-max">
			<PageHeader isTopPage/>
			<div className="container flex flex-col gap-8">
				<PopularCategory/>
				<RecentProduct/>
				<RecommendProduct/>
			</div>
		</div>
	);
}
