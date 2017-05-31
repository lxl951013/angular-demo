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
				url: "/newsDetail",
				templateUrl: "template/newsDetail.html",
				controller: "newsDetailCtrl"
			});
        //默认显示
		$urlRouterProvider.when("", "/index")
	}])
})();
