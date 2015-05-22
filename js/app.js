var app=angular.module("app",[]);
app.controller("Controller",["$scope",function($scope){
	$scope.check=true;
}])
app.directive('toggle',function(){
  var directive={
    link:function($scope,element,attrs){
      $scope.label=attrs.label;
      $scope.updateModel=function(){
        debugger;
        $scope.onChange({value:$scope.checkBoxModal});
      }
    },
    restrict:'EA',
    scope:{
      checkBoxModal:'=ngModel',
      onChange:'&ngChange'
    },
    template:"<div class='toggle-button'><label>{{label}}<input type='checkbox' ng-model='checkBoxModal' ng-change='updateModel()'><span class='toggle'></span></label></div>"
  }
  return directive;
})