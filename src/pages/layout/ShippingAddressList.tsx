import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import PageHeader from "@/components/layout/PageHeader";
import PolicyTerm from "@/components/ui/PolicyTerm";
import ButtonContainer from '@/components/ui/ButtonContainer';
import AddButton from "@/components/ui/AddButton";

import { ROUTE_PATH } from '@/data/demo';

import edit from "@/assets/icon/likeList/edit.svg";
import checkbox from "@/assets/icon/shippingAddressList/checkbox.svg"
import checkboxActive from "@/assets/icon/shippingAddressList/checkbox-active.svg"

export default function ShippingAddressList() {
  	const navigate = useNavigate();

	const data = {
		name: "古物太郎",
		code: "〒150-0034",
		address: "東京都渋谷区代官山町1-1 Grava代官山4F",
		id: 1
	}

	const [list, setList] = useState([data]);
	const [active, setActive] = useState(data?.id);

	const handleToTop = () => {
		navigate(ROUTE_PATH?.TOP_NO_LOGIN);
	}

	const handleAdd = () => {
		setList([...list, {...data, id: list?.length + 1}]);
	}

	const handleCheck = (id) => {
		setActive(id);
	}
	
	return (
		<div className="shipping-address-list-page flex flex-col items-center w-full h-max min-h-full">
			<PageHeader title="住所一覧"/>
			<div className="container">
				<button className="flex items-center gap-3 w-max ml-auto mb-6">
					<p className="text-[10px] leading-[12px]">編集する</p>
					<img
						src={edit}
						alt="edit"
						className="w-[10px] h-[10px]"
					/>
				</button>
				<div className="flex flex-col gap-4 px-[10px] mb-10">
					{
						list?.map((item, index) => (
							<button 
								className="flex items-center gap-4"
								onClick={() => handleCheck(item?.id)}
								key={index}
							>
								<img 
									src={item?.id === active ? checkboxActive : checkbox}
									alt="checkbox"
									className="w-3 h-3"
								/>
								<div className="flex flex-col items-start text-[13px] leading-[16px] text-neutral-500">
									<p className="mb-1">{item?.name}</p>
									<p className="mb-[6px]">{item?.code}</p>
									<p>{item?.address}</p>
								</div>
							</button>
						))
					}
				</div>
				<AddButton
					onClick={handleAdd}
					className="mb-4"
					label="新しい住所を登録する"
				/>
				<ButtonContainer onClick={handleToTop}>
					更新する
				</ButtonContainer>
			</div>
			<PolicyTerm showMore/>
		</div>
	);
}
