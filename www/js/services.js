angular.module('starter.services', [])
.factory("bannerData",function(){ //主页 - 头部轮播
	obj=[
		{id:1,imgsrc:"img/banner1.png"},
		{id:3,imgsrc:"img/banner2.png"},
		{id:3,imgsrc:"img/banner3.png"}
	]
	return obj;
})
.factory("hotData",function(){ //主页 - 人气推荐
	obj=[
			[
				{id:1,imgsrc:"img/product/1.png",protitle:"四川雅江野生松茸",price:288},
				{id:2,imgsrc:"img/product/2.png",protitle:"生态放养河田鸡",price:168},
			],
			[
				{id:3,imgsrc:"img/product/3.png",protitle:"传统手作绿豆糕",price:36},
				{id:4,imgsrc:"img/product/4.png",protitle:"味蕾爆破巧克力",price:68},
			],
			[
				{id:5,imgsrc:"img/product/5.png",protitle:"黑凤梨酥",price:118},
				{id:6,imgsrc:"img/product/6.png",protitle:"农家手作磐素面",price:39},
			],
			[
				{id:7,imgsrc:"img/product/7.jpg",protitle:"活力早餐月套餐",price:329},
				{id:8,imgsrc:"img/product/8.png",protitle:"手削藕粉桂花糖蜜",price:90},
			]
	]
	return obj;
})
.factory("detailData",function(){ //商品详情页 - 基本信息
	obj=[
		[{
			id:1,
			avatar:"img/tx.jpg",
			author:"黄彭",
			identity:"福丽滋创始人",
			title:"珍馐妙物秋之旬味 四川雅江野生松茸",
			price:"298 - 668",
			detailedImg:"img/detailsimg/1.jpg"
		}],
		[{
			id:2,
			avatar:"img/tx.jpg",
			author:"北村",
			identity:"北村自然生活馆创始人",
			title:"会飞的世界名鸡 生态放养河田鸡",
			price:"168 - 328",
			detailedImg:"img/detailsimg/2.jpg"
		}],
		[{
			id:3,
			avatar:"img/tx.jpg",
			author:"傅栾",
			identity:"物喜创始人",
			title:"寻回儿时的味道 古法手作绿豆糕",
			price:"36 - 76",
			detailedImg:"img/detailsimg/3.jpg"
		}],
		[{
			id:4,
			avatar:"img/tx.jpg",
			author:"ViVi",
			identity:"V+H Lab品牌",
			title:"浓缩一世酸甜苦辣 纯可可脂味蕾爆破硬质巧克力",
			price:"168 - 328",
			detailedImg:"img/detailsimg/4.jpg"
		}],
		[{
			id:5,
			avatar:"img/tx.jpg",
			author:"沈宏非",
			identity:"《舌尖上的中国》总顾问",
			title:"一款无厘头的表白利器 自愈力爆棚的黑凤梨酥",
			price:"118",
			detailedImg:"img/detailsimg/5.jpg"
		}],
		[{
			id:6,
			avatar:"img/tx.jpg",
			author:"傅栾",
			identity:"物喜创始人",
			title:"凝聚山里的阳光空气和水分 农家纯手作磐安素面",
			price:"39",
			detailedImg:"img/detailsimg/6.jpg"
		}],
		[{
			id:7,
			avatar:"img/tx.jpg",
			author:"Lilian",
			identity:"Duo&Li创始人",
			title:"美好一天从元气早餐开始DUO&LI活力早餐月套餐",
			price:"329",
			detailedImg:"img/detailsimg/7.jpg"
		}],
		[{
			id:8,
			avatar:"img/tx.jpg",
			author:"赵黎明",
			identity:"三家村削藕手艺人",
			title:"纯手工是它们的灵魂 追溯童年美味 手削藕粉桂花糖蜜组合",
			price:"90",
			detailedImg:"img/detailsimg/8.jpg"
		}]
	]
	return obj;
})
