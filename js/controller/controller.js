//组件逻辑
;
(function(){
	var controllers = angular.module('controller',[]);
	
	controllers.controller('indexCtrl',['$scope',function($scope){
		   $scope.name="long";
		   $scope.item=0;
		   $scope.dianji=function(num){
		   	   $scope.item=num;
		   }
	}]);
	
	//新闻页
	controllers.controller('newsCtrl',function($scope,$http){
		$scope.title="新闻";
		$scope.bool=true;
		
		$scope.searchName = "";
		//搜索框
		$scope.isShowSearchBar = false;
		$scope.showSearchBar = function(){
	        $scope.isShowSearchBar = true;
		}
		//清空搜索框
		$scope.searchClear=function(){
		   	$scope.searchName = "";
		}
		
		//新闻列表加载
		$scope.page=0;
		$scope.arr=[];
		//加载覆盖 条件
		$scope.isLoad=false;
		
		$scope.newslist=function(){
			$scope.isLoad=true;
			$http({
				url:"http://route.showapi.com/1369-1",
				method:'GET',
				params:{					
		   	  	  	"showapi_appid": '38971',
		   	  	  	"showapi_sign": '82c3ab13d16840a19f36a553a20cf71b',
		   	  	  	"page":'1',
				}
			}).then(function(data){
				$scope.isLoad=false;
//				console.log(data);
				$scope.arr=$scope.arr.concat(data.data.showapi_res_body.data);
//				console.log($scope.arr);
			})
		};
		$scope.newslist();
		
	});
	//美女页
	controllers.controller('meinvCtrl',function($scope,$http){
		$scope.title="美女";
		$scope.bool=true;
		
		//美女列表加载
		$scope.page=0;
		$scope.arr=[];
		//加载覆盖 条件
		$scope.isLoad=false;
		$scope.meinvlist=function(){
			$scope.isLoad=true;
			$http({
				url:"http://route.showapi.com/197-1",
				method:'GET',
				params:{					
		   	  	  	"showapi_appid": '38971',
		   	  	  	"showapi_sign": '82c3ab13d16840a19f36a553a20cf71b',
		   	  	  	"page":'1',
		   	  	  	"num":'20',
		   	  	  	"ran":'1',
				}
			}).then(function(data){
				$scope.isLoad=false;
//				console.log(data);
				$scope.arr=$scope.arr.concat(data.data.showapi_res_body.newslist);
//				console.log($scope.arr);
			})
		};
		$scope.meinvlist();
		
	});
	//军事页
	controllers.controller('junshiCtrl',function($scope,$http){
		$scope.title="军事";
		$scope.bool=true;		
		//军事列表加载
		$scope.page=0;
		$scope.arr=[];
		//加载覆盖 条件
		$scope.isLoad=false;
		
		$scope.junshilist=function(){
			$scope.isLoad=true;
			$http({
				url:"http://route.showapi.com/109-35",
				method:'GET',
				params:{					
		   	  	  	"showapi_appid": '38971',
		   	  	  	"showapi_sign": '82c3ab13d16840a19f36a553a20cf71b',
		   	  	  	"page":'1',
		   	  	  	"channelName":'',
		   	  	  	'title': '军事',
		   	  	  	"needContent":'1',
		   	  	  	"needHtml":'1',
		   	  	  	"needAllList":'1',
		   	  	  	"maxResult":'10',

				}
			}).then(function(data){
				$scope.isLoad=false;
//				console.log(data);
				$scope.arr=$scope.arr.concat(data.data.showapi_res_body.pagebean.contentlist);
				console.log($scope.arr);
			})
		};
		$scope.junshilist();
	});
	//娱乐页
	controllers.controller('yuleCtrl',function($scope,$http){
		$scope.title="娱乐";
		$scope.bool=true;
		//娱乐列表加载
		$scope.page=0;
		$scope.arr=[];
		//加载覆盖 条件
		$scope.isLoad=false;
		
		$scope.yulelist=function(){
			$scope.isLoad=true;
			$http({
				url:"http://route.showapi.com/198-1",
				method:'GET',
				params:{					
		   	  	  	"showapi_appid": '38971',
		   	  	  	"showapi_sign": '82c3ab13d16840a19f36a553a20cf71b',
		   	  	  	"page":'1',
                    "num":'10',
				}
			}).then(function(data){
				$scope.isLoad=false;
//				console.log(data);
				$scope.arr=$scope.arr.concat(data.data.showapi_res_body.newslist);
//				console.log($scope.arr);
			})
		};
		$scope.yulelist();
	});
})();
