import PageHeader from "@/components/layout/PageHeader";
import PolicyTerm from "@/components/ui/PolicyTerm";
import FollowListItem from "@/components/ui/FollowListItem";

import follow1 from "@/assets/img/31.png";
import follow2 from "@/assets/img/32.png";
import follow3 from "@/assets/img/33.png";

export default function FollowList() {
	const followList = [
		{
			img: follow1,
			name: "佐藤美加",
			link: "/layout",
		},
		{
			img: follow2,
			name: "meangirls",
			link: "/layout",
		},
		{
			img: follow3,
			name: "ponta",
			link: "/layout",
		},
	]

	return (
		<div className="follow-list-page flex flex-col items-center w-full h-max min-h-full">
			<PageHeader title="フォローリスト"/>
			<div className="container">
				{
					followList?.map((item, index) => 
						<FollowListItem isFirst={index === 0} data={item} key={index}/>
					)
				}
			</div>
			<PolicyTerm hiddenList hiddenCopyRight/>
		</div>
	);
}
