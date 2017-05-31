//组件、命令模块
;
(function(){
	//定义组件模块名称
	var directives=angular.module('directive',[]);
	//公共头部组件
    directives.directive('xheader',function(){
		return {
		   		templateUrl:'directives/xheader.html'	
		}
	});
	//公共尾部组件
    directives.directive('xfooter',function(){
		return {
		   		templateUrl:'directives/xfooter.html'	
		}
	});
	//新闻页搜索框组件
	directives.directive('xsearch',function(){
		return {
		   		templateUrl:'directives/xsearch.html'	
		}
	});
	//新闻页轮播图组件
    directives.directive('lunbotu',function(){
		return {
		   		templateUrl:'directives/lunbotu.html',
		   		link:function(scope,ele,attr){
		   		   var swiper = new Swiper('.swiper-container', {
					    pagination: '.swiper-pagination',
					    paginationClickable: true
				   });	
		   		}
		   		
		}
	});
	//新闻列表组件
    directives.directive('newslist',function(){
		return {
		   		templateUrl:'directives/newslist.html'	
		}
	});
	
	//美女页列表组件
    directives.directive('meinvlist',function(){
		return {
		   		templateUrl:'directives/meinvlist.html'
		}
	});
	
	//军事页列表组件
    directives.directive('junshilist',function(){
		return {
		   		templateUrl:'directives/junshilist.html'
		}
	});
	
	//娱乐页列表组件
    directives.directive('yulelist',function(){
		return {
		   		templateUrl:'directives/yulelist.html'
		}
	});
		
	
})();
