import { Link, useLocation } from 'react-router-dom';

import { SUB_FOOTER_ROUTE } from '@/data/demo';

import home from '@/assets/icon/footer/home.svg';
import camera from '@/assets/icon/footer/camera.svg';
import profile from '@/assets/icon/footer/profile.svg';

type FooterProps = {
	isSubFooter?: boolean;
};

export default function Footer({ isSubFooter= false }: FooterProps) {
  	const location= useLocation();

  	const isRenderMainFooter= !SUB_FOOTER_ROUTE?.includes(location.pathname) && !isSubFooter;

	const listFooter = [
		{
			label: 'ホーム',
			img: home,
			link: '/',
			class: 'max-w-[34px] aspect-[34/29]',
		},
		{
			label: '出品',
			img: camera,
			link: '/',
			class: 'max-w-[28px] aspect-[28/24]',
		},
		{
			label: 'マイページ',
			img: profile,
			link: '/',
			class: 'max-w-[15px] aspect-[15/30]',
		},
	];

	return (
		<div className="flex justify-center w-full h-max bg-dark-300">
			{
				isRenderMainFooter ? (
					<div className="flex justify-between items-end w-full max-w-[768px] h-[72px] pb-[23px] px-11">
						{listFooter.map((item) => (
							<Link
								key={item.label}
								to={item.link}
								className="flex flex-col items-center gap-[5px]"
							>
								<img
								src={item.img}
								alt={item.label}
								className={`w-full ${item.class}`}
								/>
								<p className="text-[8px] leading-[10px] text-white">
								{item.label}
								</p>
							</Link>
						))}
					</div>
				) : (
					<div className='flex items-end w-full max-w-[768px] h-[117px] pb-[14px] px-[10px]'>
						<p className='text-[8px] leading-[10px] text-white'>@Creative & Planning by New Company.2026</p>
					</div>
				)
			}
		</div>
	)
}
