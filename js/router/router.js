//路由模块
;
(function(){
	var routers = angular.module("router", []);
	routers.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
		//第一层ui-view的逻辑
		$stateProvider.state("index", {
				url: "/index",
				templateUrl: "template/index.html",
				controller: "indexCtrl"
			})
		    //新闻
		    .state("index.news", {
				url: "/news",
				templateUrl: "template/news.html",
				controller: "newsCtrl"
			})
		    //美女
			.state("index.meinv", {
				url: "/meinv",
				templateUrl: "template/meinv.html",
				controller: "meinvCtrl"
			})
			//军事
			.state("index.junshi", {
				url: "/junshi",
				templateUrl: "template/junshi.html",
				controller: "junshiCtrl"
			})
			//yule
			.state("index.yule", {
				url: "/yule",
				templateUrl: "template/yule.html",
				controller: "yuleCtrl"
			})
			//新闻详情页
			.state("newsDetail", {
				url: "/newsDetail/:id",
				templateUrl: "directives/newsDetail.html",
				controller: "newsDetailCtrl"
			})
			//美女详情页
			.state("meinvDetail", {
				url: "/meinvDetail/:id",
				templateUrl: "directives/meinvDetail.html",
				controller: "meinvDetailCtrl"
			})
			//军事详情页
			.state("junshiDetail", {
				url: "/junshiDetail/:id",
				templateUrl: "directives/junshiDetail.html",
				controller: "junshiDetailCtrl"
			})
			//娱乐详情页
			.state("yuleDetail", {
				url: "/yuleDetail/:id",
				templateUrl: "directives/yuleDetail.html",
				controller: "yuleDetailCtrl"
			});
        //默认显示
		$urlRouterProvider.when("", "/index")
	}])
})();
