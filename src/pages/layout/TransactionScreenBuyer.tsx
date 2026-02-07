import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import PageHeader from "@/components/layout/PageHeader";
import StepList from '@/components/ui/transactionScreenBuyer/StepList';
import TransactionDetail from '@/components/ui/transactionScreenBuyer/TransactionDetail';
import Step2 from '@/components/ui/transactionScreenBuyer/Step2';
import Step3 from '@/components/ui/transactionScreenBuyer/Step3';
import Step4 from '@/components/ui/transactionScreenBuyer/Step4';
import Step5 from '@/components/ui/transactionScreenBuyer/Step5';

import { ROUTE_PATH } from '@/data/demo';

export default function TransactionScreenBuyer() {
	const listStep = [
		{
			component: "",
			id: 1,
			title: "落札",
			value: "step-1",
			first: true
		},
		{
			component: Step2,
			id: 2,
			title: "決済済",
			value: "step-2"

		},
		{
			component: Step3,
			id: 3,
			title: "発送済",
			value: "step-3"

		},
		{
			component: Step4,
			id: 4,
			title: "受取済",
			value: "step-4"

		},
		{
			component: Step5,
			id: 5,
			title: "取引完了",
			value: "step-5",
			last: true
		},
	];

	const [searchParams, setSearchParams] = useSearchParams();
	const navigate = useNavigate();

	const step = searchParams.get('step');
	const currentStep = listStep?.find((item) => item?.value === step);
    const StepComponent = currentStep?.component;

	useEffect(() => {
        if (!step || !currentStep) {
            navigate(ROUTE_PATH?.TOP_LOGIN);
        } else if (step === "step-1") {
            navigate(ROUTE_PATH?.PURCHASE_CONFIRMATION);
        }
    }, [step, currentStep, navigate]);

	return (
		<div className="transaction-screen-buyer-page page-container flex flex-col items-center w-full h-max">
			<PageHeader title="取引画面"/>
			<div className="container flex flex-col">
				<button className="ml-auto mb-1 text-[10px] leading-[12px] cursor-pointer">
					戻る
				</button>
				<StepList listStep={listStep} currentStep={currentStep}/>
				<div className="w-full mb-8">
					{currentStep && <StepComponent/>}
				</div>
				<TransactionDetail type="buyer"/>
			</div>
		</div>
	);
}
