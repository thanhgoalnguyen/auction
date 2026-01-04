import PageHeader from "@/components/layout/PageHeader";
import LikedProduct from "@/components/ui/LikedProduct";
import PopularCategory from "@/components/ui/PopularCategory";
import RecentProduct from "@/components/ui/RecentProduct";
import RecommendProduct from "@/components/ui/RecommendProduct";
import PolicyTerm from "@/components/ui/PolicyTerm";

export default function TopLogin() {
	return (
		<div className="top-login flex flex-col items-center w-full h-max min-h-full">
			<PageHeader isTopPage isAuth/>
			<div className="w-full max-w-[768px] pt-[18px] pb-[58px]">
				<LikedProduct/>
				<PopularCategory/>
				<RecentProduct/>
				<RecommendProduct/>
			</div>
			<PolicyTerm/>
		</div>
	);
}
