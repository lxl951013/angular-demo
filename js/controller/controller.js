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
	controllers.controller('newsCtrl',function($scope,$http,$rootScope){
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
//		   	  	  	channel_id: 6,
		   	  	  	page:$scope.page++
				}
			}).then(function(data){
				$scope.isLoad=false;
//				console.log(data);
				$scope.arr=$scope.arr.concat(data.data.showapi_res_body.data);
//				console.log($scope.arr);
                $rootScope.news=$scope.arr;
			})		
		};
		$scope.newslist();		
	});
	
	//新闻详情页
	controllers.controller('newsDetailCtrl',function($scope,$rootScope,$state){
//		console.log($rootScope.news);
//		console.log($state.params)

        for(var i=0;i<($rootScope.news).length;i++){
		    		
		    if($state.params.id==$rootScope.news[i].id){
		    	$rootScope.news=$rootScope.news[i];
//		    		console.log($rootScope.news);
		    	//	console.log($scope.news[i].channelId);
		    			
		    		}
		    		
		    	}
	});
	
	
	//美女页
	controllers.controller('meinvCtrl',function($scope,$http,$rootScope){
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
                $rootScope.meinvs=$scope.arr
			})
		};
		$scope.meinvlist();
		
	});
	//美女详情页
	controllers.controller('meinvDetailCtrl',function($scope,$rootScope,$state){
//				console.log($rootScope.meinvs);
//        		console.log($state.params);
             
              for(var i=0;i<($rootScope.meinvs).length;i++){
		    		
		      if($state.params.id==$rootScope.meinvs[i].$$hashKey){
		    	$rootScope.meinvs=$rootScope.meinvs[i];
//		    		console.log($rootScope.meinvs);
		    	//	console.log($scope.meinvs[i].$$hashKey);
		    			
		    		}
		    		
		    	}
	});
	//军事页
	controllers.controller('junshiCtrl',function($scope,$http,$rootScope){
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
		   	  	  	"maxResult":'15',

				}
			}).then(function(data){
				$scope.isLoad=false;
//				console.log(data);
				$scope.arr=$scope.arr.concat(data.data.showapi_res_body.pagebean.contentlist);
//				console.log($scope.arr);
                $rootScope.junshis=$scope.arr;
			})
		};
		$scope.junshilist();
	});
	//军事详情页
	controllers.controller('junshiDetailCtrl',function($scope,$rootScope,$state){
//			    console.log($rootScope.junshis);
//        		console.log($state.params);
          		
          		for(var i=0;i<($rootScope.junshis).length;i++){
		    		
		        if($state.params.id==$rootScope.junshis[i].id){
		    	    $rootScope.junshis=$rootScope.junshis[i];
//		    		console.log($rootScope.junshis);
		    	//	console.log($scope.junshis[i].id);
		    			
		    		}
		    		
		    	}
	});
	
	
	
	
	//娱乐页
	controllers.controller('yuleCtrl',function($scope,$http,$rootScope){
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
                    "num":'15',
				}
			}).then(function(data){
				$scope.isLoad=false;
//				console.log(data);
				$scope.arr=$scope.arr.concat(data.data.showapi_res_body.newslist);
//				console.log($scope.arr);
                $rootScope.yules=$scope.arr;
			})
		};
		$scope.yulelist();
	});	
	//娱乐详情页
	controllers.controller('yuleDetailCtrl',function($scope,$rootScope,$state){
//		        console.log($rootScope.yules);
//        		console.log($state.params);
          		
          		for(var i=0;i<($rootScope.yules).length;i++){
		    		
		        if($state.params.id==$rootScope.yules[i].$$hashKey){
		    	    $rootScope.yules=$rootScope.yules[i];
//		    		console.log($rootScope.yules);
		    	//	console.log($scope.yules[i].id);
		    			
		    		}
		    		
		    	}
	});
})();
