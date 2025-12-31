import PageHeader from "@/components/layout/PageHeader";
import PopularCategory from "@/components/ui/PopularCategory";
import RecentProduct from "@/components/ui/RecentProduct";
import RecommendProduct from "@/components/ui/RecommendProduct";
import PrivacyTerms from "@/components/ui/PrivacyTerms";

export default function TopNoLogin() {
	return (
		<div className="top-no-login flex flex-col items-center w-full h-max min-h-full">
			<PageHeader isTopPage/>
			<div className="w-full max-w-[768px] pt-[18px] pb-[58px]">
				<PopularCategory/>
				<RecentProduct/>
				<RecommendProduct/>
			</div>
			<PrivacyTerms/>
		</div>
	);
}
