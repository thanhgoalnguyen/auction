import SellerReview from "./SellerReview";
import BuyerReview from "./BuyerReview";

const Step5 = () => {
    return (
        <div className="flex flex-col gap-3 w-full">
			<SellerReview/>
			<BuyerReview/>
		</div>
    );
};

export default Step5;