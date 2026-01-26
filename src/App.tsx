import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { dummyUsers, dummySessionEntity } from "./data/mock-data";

import Layout from "./layouts/Layout.tsx";

import TopNoLogin from "@/pages/layout/TopNoLogin.tsx";
import TopLogin from "./pages/layout/TopLogin.tsx";
import LikeList from "./pages/layout/LikeList.tsx";
import SearchTop from "./pages/layout/SearchTop.tsx";
import UserRegistration from "./pages/layout/UserRegistration";
import Login from "./pages/layout/Login.tsx";
import RegistrationEmailSent from "./pages/layout/RegistrationEmailSent.tsx";
import CategoryList from "./pages/layout/CategoryList.tsx";
import SearchResult from "./pages/layout/SearchResult.tsx";
import MyPage from "./pages/layout/MyPage.tsx";
import UserProfile from "./pages/layout/UserProfile.tsx";
import OtherProfile from "./pages/layout/OtherProfile.tsx";
import ItemDetail from "./pages/layout/ItemDetail.tsx";
import RoomDetail from "./pages/layout/RoomDetail.tsx";
import FollowList from "./pages/layout/FollowList.tsx";
import ViewHistory from "./pages/layout/ViewHistory.tsx";
import WonItemList from "./pages/layout/WonItemList.tsx";
import PersonalInformationSetting from "./pages/layout/PersonalInformationSetting.tsx";
import UserProfileSetting from "./pages/layout/UserProfileSetting.tsx";
import ShippingAddressList from "./pages/layout/ShippingAddressList.tsx";
import EmailPasswordSetting from "./pages/layout/EmailPasswordSetting.tsx";
import ShippingAddressRegistration from "./pages/layout/ShippingAddressRegistration.tsx";
import Post from "./pages/layout/Post.tsx";
import PostItem from "./pages/layout/PostItem.tsx";

import { ROUTE_PATH } from "./data/demo.ts";

function App() {
	// dummy data for "success" page.
	// const organizer = dummyUsers.get(1);
	// const sessionEntity = dummySessionEntity;

	//   document.addEventListener('contextmenu', event => event.preventDefault())
	return (
		<Router>
			<Routes>
				<Route element={<Layout />}>
					<Route path={ROUTE_PATH?.TOP_NO_LOGIN} element={<TopNoLogin />} />
					<Route path={ROUTE_PATH?.TOP_LOGIN} element={<TopLogin />} />
					<Route path={ROUTE_PATH?.LIKE_LIST} element={<LikeList />} />
					<Route path={ROUTE_PATH?.SEARCH_TOP} element={<SearchTop />} />
					<Route
						path={ROUTE_PATH?.USER_REGISTRATION}
						element={<UserRegistration />}
					/>
					<Route path={ROUTE_PATH?.LOGIN} element={<Login />} />
					<Route
						path={ROUTE_PATH?.REGISTRATION_EMAIL_SENT}
						element={<RegistrationEmailSent />}
					/>
					<Route path={ROUTE_PATH?.CATEGORY_LIST} element={<CategoryList />} />
					<Route path={ROUTE_PATH?.SEARCH_RESULT} element={<SearchResult />} />
					<Route path={ROUTE_PATH?.MY_PAGE} element={<MyPage />} />
					<Route path={ROUTE_PATH?.USER_PROFILE} element={<UserProfile />} />
					<Route path={ROUTE_PATH?.OTHER_PROFILE} element={<OtherProfile />} />
					<Route path={ROUTE_PATH?.ITEM_DETAIL} element={<ItemDetail />} />
					<Route path={ROUTE_PATH?.ROOM_DETAIL} element={<RoomDetail />} />
					<Route path={ROUTE_PATH?.FOLLOW_LIST} element={<FollowList />} />
					<Route path={ROUTE_PATH?.VIEW_HISTORY} element={<ViewHistory />} />
					<Route path={ROUTE_PATH?.WON_ITEM_LIST} element={<WonItemList />} />
					<Route
						path={ROUTE_PATH?.PERSONAL_INFORMATION_SETTING}
						element={<PersonalInformationSetting />}
					/>
					<Route
						path={ROUTE_PATH?.USER_PROFILE_SETTING}
						element={<UserProfileSetting />}
					/>
					<Route
						path={ROUTE_PATH?.SHIPPING_ADDRESS_LIST}
						element={<ShippingAddressList />}
					/>
					<Route
						path={ROUTE_PATH?.EMAIL_PASSWORD_SETTING}
						element={<EmailPasswordSetting />}
					/>
					<Route
						path={ROUTE_PATH?.SHIPPING_ADDRESS_REGISTRATION}
						element={<ShippingAddressRegistration />}
					/>
					<Route path={ROUTE_PATH?.POST} element={<Post />} />
					<Route path={ROUTE_PATH?.POST_ITEM} element={<PostItem />} />
				</Route>
			</Routes>
			{/* <Routes>
        <Route
          path = "/"
          element = {<Splash/>}
        />

        <Route
          path = "/host"
          element = {<HostTest/>}
        />
        <Route
          path = "/audience"
          element = {<AudienceTest/>}
        />

        <Route element = {<BareShell/>}>
          <Route
            path = "login"
            element = {<Login/>}
          />
        </Route>
        <Route element = {<DemoLayout/>}>
          <Route
            path = "/"
            element = {<Home/>}
          />
          <Route
            path = "/login"
            element = {<Login/>}
          />
          <Route
            path = "/user-registration"
            element = {<UserRegistration/>}
          />
          <Route
            path = "/registration-email-sent"
            element = {<RegistrationEmailSent/>}
          />
          <Route
            path = "/auth/activate/:uid/:token"
            element = {<Activate/>}
          />
          
          <Route
            path = "home"
            element = {<Home/>}
          />
          <Route
            path = "rooms"
            element = {<Rooms/>}
          />
          <Route
            path = "rooms/:roomId"
            element = {<RoomDetail/>}
          />
          <Route
            path = "auction/:id"
            element = {<Auction/>}
          />
          <Route
            path = "studio"
            element = {<LiveStudio/>}
          />
          <Route
            path = "studio/start"
            element = {<StartAuction/>}
          />
          <Route
            path = "profile"
            element = {<Profile/>}
          />
          <Route
            path = "checkout"
            element = {<Checkout/>}
          />
          <Route
            path = "result"
            element = {<AuctionResult/>}
          />
          <Route
            path = "success"
            element = {<SuccessfulBidder sessionEntity={sessionEntity} organizer={organizer} />}
          />
          <Route
            path = "*"
            element = {<Navigate
              to = "/"
              replace
            />}
          />
        </Route>


        <Route
          path = "/layout/user-registration"
          element = {<LayoutUserRegistration/>}
        />


        <Route
          path = "*"
          element = {<Navigate
            to = "/"
            replace
          />}
        />
      </Routes> */}
		</Router>
	);
}

export default App;
