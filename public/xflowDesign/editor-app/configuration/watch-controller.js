
var UserRoleWatchCtrl = [ '$scope', '$translate', '$http', function($scope, $translate, $http) {

    $scope.data = {};
    $scope.dataList= [];
    $scope.cols = [0,1,2,3];
    $scope.loadding = false;
    var token = EDITOR.UTIL.getParameterByName('token');
    function getQueryString() {
        var qs = location.search.substr(1), // 获取url中"?"符后的字串
            args = {}, // 保存参数数据的对象
            items = qs.length ? qs.split("&") : [], // 取得每一个参数项,
            item = null,
            len = items.length;

        for(var i = 0; i < len; i++) {
            item = items[i].split("=");
            var name = decodeURIComponent(item[0]),
                value = decodeURIComponent(item[1]);
            if(name) {
                args[name] = value;
            }
        }
        return args;
    }
    //把$scope.watchData.username改成了$scope.watchData.userName
    if($scope.watchData.loginName){//username改为loginName
        if($scope.watchData.username==undefined){
            $scope.watchData.username = $scope.watchData.name;
        }
        $scope.data = {
            id:$scope.watchData.id || $scope.watchData.value,
            username:$scope.watchData.username,
            loginName:$scope.watchData.loginName
        };
        $scope.loadding = true;
        $http({method: 'GET', url: baseUrl+"/Access/userRole",headers:{"access_token":token},params:{userId:$scope.data.id}}).success(function (data, status, headers, config) {
            $scope.dataList = data;
            $scope.loadding = false;
        }).error(function (data, status, headers, config) {
            $scope.loadding = false;
            console.log('Something went wrong when fetching stencil items:' + JSON.stringify(data));
        });
    }else{
        $scope.data = {
            id:$scope.watchData.id,
            name:$scope.watchData.name
        };
        var qs = getQueryString();
        $scope.loadding = true;
        $http({method: 'GET', url: baseUrl+"/Access/roleSpecialUser",headers:{"access_token":token},params:{roleId:$scope.data.id,corpId:qs["corpId"]}}).success(function (data, status, headers, config) {
            $scope.dataList = data;
            $scope.loadding = false;
        }).error(function (data, status, headers, config) {
            $scope.loadding = false;
            console.log('Something went wrong when fetching stencil items:' + JSON.stringify(data));
        });
    }
	
    $scope.save = function() {

        $scope.close();
    };

    // Close button handler
    $scope.close = function() {
    	$scope.$hide();
    };
}];