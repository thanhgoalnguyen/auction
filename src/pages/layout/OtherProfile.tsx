import PageHeader from "@/components/layout/PageHeader";
import PolicyTerm from "@/components/ui/PolicyTerm";
import UserProfileInfo from "@/components/ui/UserProfileInfo";

import empty from "@/assets/icon/userProfile/empty.svg";

export default function OtherProfile() {
	return (
		<div className="user-profile flex flex-col items-center w-full h-max min-h-full">
			<PageHeader title="マイプロフィール"/>
			<div className="container">
				<UserProfileInfo className="mb-7"/>
				<div className="flex flex-col items-center">
					<div className="w-full pb-[14px] px-3 border-b border-neutral-300">
						<p className="text-[9px] leading-[11px]">自己紹介文は登録されていません</p>
					</div>
					<div className="flex flex-col items-center gap-[7px] w-full py-[85px]">
						<img 
							src={empty} 
							alt="empty" 
							className="w-[46px] aspect-square"
						/>
						<p className="text-[8px] leading-[10px]">no items</p>
					</div>
					<p className="text-[9px] leading-[11px]">現在、出品された商品はありません</p>
				</div>
			</div>
			<PolicyTerm hiddenList/>
		</div>
	);
}
