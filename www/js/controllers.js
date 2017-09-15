angular.module('starter.controllers', [])
//首页Ctrl
.controller('homeCtrl', function($scope,$timeout,hotData,bannerData,$ionicLoading){
	$scope.goDetail = function(id){
		window.location="#/tab/detail/"+id;
	}

	//轮播功能
	$timeout(function(){
		var mySwiper = new Swiper('#home_carousel',{
			slidesPerView : 'auto',
			autoplay: 15000,
			centeredSlides : true,
			watchSlidesProgress: true,
			spaceBetween : 30,
			pagination : '.swiper-pagination',
			initialSlide: 1,
			onProgress: function(swiper){
				for (var i = 0; i < swiper.slides.length; i++){
				  var slide = swiper.slides[i];
				  var progress = slide.progress;
					  scale = 1 - Math.min(Math.abs(progress * 0.2), 1);
				  es = slide.style;
					es.opacity = 1 - Math.min(Math.abs(progress/2),1);
						es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = 'translate3d(0px,0,'+(-Math.abs(progress*150))+'px)';
				}
			},
			 onSetTransition: function(swiper, speed) {
				for (var i = 0; i < swiper.slides.length; i++) {
						es = swiper.slides[i].style;
						es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = speed + 'ms';
				}
			}
		});
	},(500))//轮播END

	//数据加载,上拉加载,下拉刷新
	$scope.hotData = hotData;
	$scope.bannerData = bannerData;
	$scope.arr=[];
	$scope.arr.push($scope.hotData[0],$scope.hotData[1]);
	$scope.index = 1;
	$scope.hasmore=true;
	$scope.doRefresh=function(){
		$timeout(function(){
			$scope.arr.splice(0,$scope.arr.length);
			$scope.arr.push($scope.hotData[0],$scope.hotData[1]);
			$scope.hasmore = true;
			$scope.index = 1;
			$scope.$broadcast('scroll.refreshComplete');
		},1000)
	}
	$scope.loadMore=function(){
		$scope.index++;
		hotload()
	}
	function hotload(){
		var index = $scope.index;
		console.log(index)
		if(index == $scope.hotData.length){
			$scope.hasmore = false;
		}else{
			$scope.hasmore = true;
			$scope.arr.push($scope.hotData[index])
			$scope.$broadcast('scroll.infiniteScrollComplete');
		}
	}

})//首页CtrlEnd

//志趣Ctrl
.controller('interestCtrl', function($scope){})

//购物车Ctrl
.controller('shopcarCtrl', function($scope){
	//编辑按钮功能
	$scope.redact=false;
	$scope.redact_btn=function(){
		if($scope.txtWidthToggle){
			$scope.txtWidth={width:"7rem"}
		}else{
			$scope.txtWidth={width:"3.5rem"}
		}
		$scope.redact=!$scope.redact;
		$scope.txtWidthToggle=!$scope.txtWidthToggle
	}

	$(".select_hook").click(function(){//选择图标切换
		if($(this).attr("stat") == "true"){
			$(this).attr("class","select_hook icon ion-ios-circle-outline")
			$(this).attr("stat","false")
		}else if($(this).attr("stat") == "false"){
			$(this).attr("class","select_hook icon ion-ios-checkmark")
			$(this).attr("stat","true")
		}
	});
	$(".redact .add").click(function(){
		var mun = parseInt($(this).prev().html())
		mun++;
		$(this).prev().html(mun)
		$(this).parent().prev().children('.detail_price').children('.muns').html(mun)

	})
	$(".redact .minus").click(function(){
		var mun = parseInt($(this).next().html())
		if(mun <= 1){return}else{
			mun--;
			$(this).next().html(mun)
			$(this).parent().prev().children('.detail_price').children('.muns').html(mun)
		}
	})

	$(".summation_in").html(123)















})//购物车CtrlEnd

//我的Ctrl
.controller('mineCtrl', function($scope){})//我的CtrlEnd

// 商品详情Ctrl
.controller('detailCtrl',function($scope,$ionicModal,$rootScope,$ionicHistory,$timeout,$stateParams,detailData,pickData){
	$scope.id=$stateParams.myId
	//轮播
	var mySwiper = new Swiper('#detail_carousel', {autoplay: 5000,})
	//返回上页
	$scope.goBack=function(){
		$ionicHistory.goBack();
	};
	$scope.detailData = detailData[$scope.id-1];
	$scope.pickData = pickData[$scope.id-1];
	console.log($scope.pickData)

 	$ionicModal.fromTemplateUrl('my-modal.html', {
	    scope: $scope,
	    animation: 'slide-in-up'
	}).then(function(modal) {
	    $scope.modal = modal;
	});
	$scope.openModal = function() {
	    $scope.modal.show();
	};
	$scope.closeModal = function() {
	    $scope.modal.hide();
	};

	$scope.pick_param_txt=function(){
		console.log($(this).html())
	}





}).directive('hideTabs', function($rootScope){//隐藏底部Tabs(商品详情页)
	return {
		restrict: 'A',
		link: function(scope, element, attributes) {
			scope.$on('$ionicView.beforeEnter', function() {
				scope.$watch(attributes.hideTabs, function(value){
					$rootScope.hideTabs = value;
				});
			});
			scope.$on('$ionicView.beforeLeave', function() {
				$rootScope.hideTabs = false;
			});
		}
	}
})//商品详情Ctrl
