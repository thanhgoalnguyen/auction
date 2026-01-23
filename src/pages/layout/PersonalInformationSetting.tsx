import { Link } from "react-router-dom";

import PageHeader from "@/components/layout/PageHeader";
import PolicyTerm from "@/components/ui/PolicyTerm";

import { ROUTE_PATH } from "@/data/demo";

export default function PersonalInformationSetting() {
	const personalInformationSettingList = [
		{
			label: "プロフィール設定",
			link: ROUTE_PATH?.USER_PROFILE_SETTING
		},
		{
			label: "住所一覧",
			link: ROUTE_PATH?.SHIPPING_ADDRESS_LIST
		},
		{
			label: "メール・パスワード",
			link: ROUTE_PATH?.EMAIL_PASSWORD_SETTING
		},
	]

	return (
		<div className="personal-information-setting-page flex flex-col items-center w-full h-max min-h-full">
			<PageHeader title="個人情報設定"/>
			<div className="container text-[11px] leading-[13px]">
				<div 
					className="flex items-center w-full pb-2 border-b border-neutral-300"
				>
					<p className="text-neutral-700">アカウント</p>
				</div>
				{
					personalInformationSettingList?.map((item, index) => 
						<Link 
							to={item?.link}
							key={index}
							className="flex items-center w-full h-[45px] px-[2px] border-b border-neutral-300"
						>
							<p>{item?.label}</p>
						</Link>
					)
				}
			</div>
			<PolicyTerm showMore/>
		</div>
	);
}
