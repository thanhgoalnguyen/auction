import PageHeader from "../layout/PageHeader"
import Footer from "../layout/Footer"
import { useRef, useEffect } from "react"

export default function DetailProduct({open, handleOpen, data})  {
	const detailBodyRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if(open) {
			detailBodyRef.current.scrollTo(0, 0);
		}
	}, [open]);
	
	return (
		<div 
			className={`detail-product fixed top-[55px] left-0 z-[2] w-full h-[calc(100vh-55px)] flex flex-col bg-dark-100 transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}
		>
			<div 
				ref={detailBodyRef}
				className="no-scrollbar flex flex-col items-center grow overflow-auto"
			>
				<PageHeader title="商品詳細説明"/>
				<div className="pt-5 pb-[60px] w-full max-w-[768px] px-[17px]">
					<div className="grid grid-cols-[74fr_270fr] gap-3 w-full mb-[33px]">
						<img 
							src={data?.img} 
							alt="product"
							className='w-full aspect-square'
						/>
						<p className="mt-[14px] text-[15px] leading-[18px] text-neutral-600">{data?.name}</p>
					</div>
					<div className="flex flex-col gap-[30px] mb-[41px]">
						<div className="pl-[11px] pb-[5px] border-b border-neutral-300">
							<p className="text-[9px] leading-[11px] text-neutral-700">アイテム説明</p>
						</div>
						<div className="px-3 text-[9px] leading-[11px] text-neutral-600">
							<div className="flex flex-col gap-[5px] mb-[21px]">
								<p>本人サイン入り</p>
								<p>クリストファー・ネメス（CHRISTOPHER NEMETH）の立体裁断テーラー</p>
								<p>ドジャケットです。</p>
							</div>
							<div className="flex flex-col gap-[5px] mb-[21px]">
								<p>ジャケット背面に大きく書かれたサインは、プリントではなくネメス氏本人</p>
								<p>が直筆書いたもの。前オーナーがネメス氏が来日した原宿本店で購入した際</p>
								<p>ネメス氏は惜しくも2010年に亡くなられておりますので、もう2度と手に</p>
								<p>入ることのないスペシャルなアイテムです。</p>
							</div>
							<div className="flex flex-col gap-[5px] mb-[21px]">
								<p>1959年生まれのネメス氏は、キャンバーウェル・カレッジ・オブ・アーツ</p>
								<p>を卒業後、絵画を描く生活を続けながら、服を買う余裕すらない生活を送っ</p>
								<p>ていました。また当時、自分が着たいと思える服も見つからなかったため、</p>
								<p>自ら自分の服を作ることに。そのギミックがユーモアにあふれており、たと</p>
								<p>えば絵画用のキャンバスや、もう使わなくなった郵便配達の袋、古いスーツ</p>
								<p>生地などを再利用し、手縫いで服を完成させていったんです。そのパンクな</p>
								<p>手法がロンドンの若者を熱狂させ、大ブームを巻き起こしました。</p>
							</div>
							<div className="flex flex-col gap-[5px] mb-[32px]">
								<p>1980年代半には拠点を日本の原宿に。ジョン・ガリアーノなどデザイナー</p>
								<p>からの評価が高いことで知られており、最近ではキムジョーンズが手がける</p>
								<p>ルイ・ヴィトンの2015秋冬メンズコレクションにて、クリストファー・ネ</p>
								<p>メスのアイコンであるロープ・モチーフを再解釈しオマージュしたことでも</p>
								<p>大きな話題になりました。</p>
							</div>
							<div className="flex flex-col gap-[5px]">
								<p>【注意事項】</p>
								<p>※寸法には多少の誤差がある可能性がございますのでご注意ください。</p>
								<p>※商品のダメージチェックには細心の注意を払いますが、取扱商品はすべて</p>
								<p>新古または中古品ですのでご了承くださいませ。</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-[14px] mb-[33px]">
						<div className="pl-[11px] pb-[5px] border-b border-neutral-300">
							<p className="text-[9px] leading-[11px] text-neutral-700">アイテム詳細</p>
						</div>
						<div className="flex flex-col gap-[11px] px-3 text-[10px] leading-[12px] text-neutral-700">
							<div className="grid grid-cols-[50fr_207fr] gap-[75px]">
								<p>カテゴリー</p>
								<p>ジャケット/アウター&gt;ジャンバー/ニット</p>
							</div>
							<div className="grid grid-cols-[50fr_207fr] gap-[75px]">
								<p>状態</p>
								<p>目立った傷や汚れなし</p>
							</div>
						</div>
					</div>
					<div className="flex justify-end px-[10px]">
						<button
							onClick={handleOpen}
							className="text-[7px] leading-[8px] text-neutral-600"
						>
							閉じる
						</button>
					</div>
				</div>
			</div>
			<Footer isSubFooter/>
		</div>
	)
}
  