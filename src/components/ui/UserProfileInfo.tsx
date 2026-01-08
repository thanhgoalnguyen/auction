import { useNavigate} from "react-router-dom";

import ButtonContainer from "@/components/ui/ButtonContainer";

import avatar from "@/assets/icon/userProfile/avatar.svg";
import defaultAvatar from "@/assets/icon/userProfile/defaultAvatar.svg";
import star from "@/assets/icon/myPage/star.svg";
import blonze from "@/assets/icon/myPage/blonze.svg"

type CategoryItem = {
	isUserProfile?: boolean;
	className?: string;
}

export default function UserProfileInfo({isUserProfile, className} : CategoryItem) {
	const navigate = useNavigate();

	const defaultInfo = {
		avatar: defaultAvatar,
		name: "Future Vintage",
		star: 0,
		quantity: 0,
		follower: 0,
		follow: 0
	};

	const userInfo = {
		avatar: avatar,
		name: "Mami’s Closet",
		star: 4.2,
		quantity: 31,
		follower: 89,
		follow: 6
	}

	const data = isUserProfile ? userInfo : defaultInfo;

	const handleFollow = () => {
		navigate("/");
	};

	const handleEdit = () => {
		navigate("/");
	}

	return (
		<div className={`grid grid-cols-[70fr_276fr] items-center gap-[14px] ${className}`}>
			<img 
				src={data?.avatar} 
				alt="avatar"
				className='w-full aspect-square rounded-full'
			/>
			<div className="flex flex-col gap-2">
				<p className="text-[15px] leading-[18px]">{data?.name}</p>
				<div className="flex w-full">
					<div className="flex items-center gap-1 mr-7">
						<img 
							src={star} 
							alt="star"
							className='w-4 h-[15px]'
						/>
						<p className="w-[18px] text-[12px] leading-[15px] text-right">{data?.star}</p>
					</div>
					<div className="flex items-center gap-2">
						<img 
							src={blonze} 
							alt="blonze"
							className='w-[14px] h-4'
						/>
						<p className="text-[12px] leading-[15px]">Blonze</p>
					</div>
					{isUserProfile ? (
						<ButtonContainer
							className="max-w-[105px] ml-auto"
							kind="secondary-small"
							onClick={handleFollow}
						>
							Follow
						</ButtonContainer>
					) : (
						<ButtonContainer
							className="max-w-[125px] ml-auto"
							kind="secondary-small"
							onClick={handleEdit}
						>
							プロフィールを編集
						</ButtonContainer>
					)}
				</div>
				<div className="flex items-center gap-3">
					<div className="flex items-center gap-3">
						<p className="text-[10px] leading-[12px]">{data?.quantity}</p>
						<p className="text-[6px] leading-[7px] text-neutral-700">出品数</p>
					</div>
					<div className="flex items-center gap-3">
						<p className="text-[10px] leading-[12px]">{data?.follower}</p>
						<p className="text-[6px] leading-[7px] text-neutral-700">フォロワー</p>
					</div>
						<div className="flex items-center gap-3">
						<p className="text-[10px] leading-[12px]">{data?.follow}</p>
						<p className="text-[6px] leading-[7px] text-neutral-700">フォロー</p>
					</div>
				</div>
			</div>
		</div>
	);
}
