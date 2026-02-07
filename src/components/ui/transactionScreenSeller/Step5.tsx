import SellerReview from "./SellerReview";
import BuyerReview from "./BuyerReview";

const Step5 = () => {
    return (
        <div className="flex flex-col gap-[14px] w-full">
			<SellerReview/>
			<BuyerReview/>
		</div>
    );
};

export default Step5;