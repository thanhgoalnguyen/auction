import { useNavigate } from 'react-router-dom';

import PageHeader from "@/components/layout/PageHeader";
import ButtonContainer from '@/components/ui/ButtonContainer';

import camera from "@/assets/icon/post/camera.svg";

import { ROUTE_PATH } from '@/data/demo';

export default function Post() {
  	const navigate = useNavigate();

	const handleToTop = () => {
		navigate(ROUTE_PATH?.TOP_NO_LOGIN);
	}

	const handleToPostItem = () => {
		navigate(ROUTE_PATH?.POST_ITEM);
	}

	return (
		<div className="post-page page-container flex flex-col items-center w-full h-max">
			<PageHeader title="出品"/>
			<div className="container flex flex-col gap-7">
				<ButtonContainer 
					onClick={handleToTop}
					className="flex items-center gap-2 h-[46px]"
				>
					<img
						src={camera}
						alt="camera"
						className="w-[15px] h-[11px]"
					/>
					<p>出品する</p>
				</ButtonContainer>
				<ButtonContainer onClick={handleToPostItem}>
					オークションルームを作成する
				</ButtonContainer>
			</div>
		</div>
	);
}
