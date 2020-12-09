
/*
 * Assignment
 */
var KisBpmAssignmentCtrl = [ '$scope', '$modal','$http', function($scope, $modal) {
    // Config for the modal window
    var opts = {
        template:  'editor-app/configuration/properties/assignment-popup.html?version=' + Date.now(),
        scope: $scope,
        backdrop: 'static',
        keyboard: false
    };

    // Open the dialog
    $modal(opts);
}];

var KisBpmAssignmentPopupCtrl = [ '$scope','$http','$q','$timeout','$modal', function($scope,$http, $q,$timeout,$modal) {
    var token = EDITOR.UTIL.getParameterByName('token');
    $scope.rolesCols = [0,1,2,3];

	$scope.roles = [];

    $scope.passObj = {
        userNumber:0,
        roleUserNumber:0,
        repeatUserNumber:0
    };

    $scope.slider = {
        value: 0,
        options: {floor: 0, ceil: 0}
    };
    $scope.assignment = {};
    $scope.assignment.userChooseType = -1;
    $scope.assignment.candidateUsers = [];
    $scope.assignment.candidateGroups = [];

    $scope.assignmentOld = {};

    $scope.getPassPercent = function(){
        var selectNumber = $scope.passObj.userNumber + $scope.passObj.roleUserNumber - $scope.passObj.repeatUserNumber;
        return parseInt($scope.slider.value / selectNumber * 100)/100;
    };

    $scope.watchAction = function(data) {
        $scope.watchData = data;
        var opts = {
            template:  'editor-app/configuration/properties/watch-popup.html?version=' + Date.now(),
            scope: $scope,
            backdrop: 'static'
        };
        $modal(opts);
    };

    /**
     * 重新计算slider的值
     */
    $scope.calculateSlider = function(){
        var selectNumber = $scope.passObj.userNumber + $scope.passObj.roleUserNumber - $scope.passObj.repeatUserNumber;
        if(selectNumber >= 0){
            $scope.slider.options.ceil = selectNumber;
            if($scope.slider.value > selectNumber){
                $scope.slider.value = 0;
            }
        }else{
            $scope.slider.value = 0;
            $scope.slider.options.ceil = 0;
        }

        $timeout(function () {
            $scope.$broadcast('rzSliderForceRender');
        });
    };

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
    var qs = getQueryString();

    $scope.calculateRolesUsers = function(){
        if(!$scope.assignment.candidateGroups || $scope.assignment.candidateGroups.length===0){
            $scope.passObj.roleUserNumber = 0;
            $scope.passObj.repeatUserNumber = 0;
            $scope.calculateSlider();
            return;
        }
        var ids = [];
        var candidateGroups = $scope.assignment.candidateGroups;
        angular.forEach(candidateGroups, function(data, key){
            ids.push(data.value);
        });

        // var deferred = $q.defer();
        $http({method: 'POST', url: baseUrl+"/Access/listByRoleIds",headers:{"access_token":token},params:{ids:ids,type:'bytter',corpId:qs["corpId"]}}).success(function (data, status, headers, config) {
            $scope.passObj.roleUserNumber = data.length;
            var tempNumber = 0;
            angular.forEach($scope.assignment.candidateUsers, function(userData, key){
                angular.forEach(data, function(userId, key){
                    if(userData.value===userId){
                        tempNumber++;
                    }
                });
            });
            $scope.passObj.repeatUserNumber = tempNumber;
            // deferred.resolve();
            $scope.calculateSlider();
        }).error(function (data, status, headers, config) {
            console.log('Something went wrong when fetching stencil items:' + JSON.stringify(data));
        });
        // deferred.promise;

    };
    // Put json representing assignment on scope
    if ($scope.property.value !== undefined && $scope.property.value !== null
        && $scope.property.value.assignment !== undefined
        && $scope.property.value.assignment !== null) {
        if($scope.property.value.assignment.passNumber){
            $scope.slider.value = $scope.property.value.assignment.passNumber;
        }
        $scope.assignment = $scope.property.value.assignment;
        angular.copy($scope.assignment, $scope.assignmentOld);

        if($scope.property.value.assignment.candidateUsers && $scope.property.value.assignment.candidateUsers.length!==0){

            var userIds = [];
            angular.forEach($scope.property.value.assignment.candidateUsers, function(data, key){
                userIds.push(data.value);
            });
            //设置已选用户数量
            $scope.passObj.userNumber = $scope.property.value.assignment.candidateUsers.length;
            $http({method: 'POST', url: baseUrl+"/Access/listByUserIds",headers:{"access_token":token},params:{ids:userIds}}).success(function (data, status, headers, config) {
                angular.forEach($scope.property.value.assignment.candidateUsers, function(tempA, keyA){
                    var userId = tempA.value;
                    angular.forEach(data, function(tempB, keyB){
                        if(userId === tempB.id){
                            tempA.username = tempB.username;
                            tempA.loginName = tempB.loginName;
                            tempA.corpName = tempB.corpName;
                            $scope.assignment.candidateUsers[keyA] = tempA;
                        }
                    });
                });
            });

        }else{
            $scope.assignment = $scope.property.value.assignment;
        }
        //计算用户选择数量
        $scope.calculateRolesUsers();
    }

    $scope.removeAssigneeUserValue = function() {
        var temp =[];
        for(var key in $scope.assignment){
        	if(key!=="assignee" && key!=="assigneeName"){
        		temp[key] = $scope.assignment[key];
			}
		}
        $scope.assignment = temp;
    };
    //检查用户是否选择
    $scope.checkUserSelected = function(user){
        var flag = false;
        angular.forEach($scope.assignment.candidateUsers, function(data, key){
            if(data.value===user.id){
                flag = true;
                return;
            }
        });
        return flag;
    };
    $scope.checkRoleSelected = function(role){
        var flag = false;
        angular.forEach($scope.assignment.candidateGroups, function(data, key){
            if(data.value===role.id){
                flag = true;
                return;
            }
        });
        return flag;
    };


    $http({method: 'GET', url: baseUrl+"/Access/specialRole",headers:{"access_token":token},params:{corpId:qs["corpId"]}}).success(function (data, status, headers, config) {
        $scope.roles = data;
    }).error(function (data, status, headers, config) {
        console.log('Something went wrong when fetching stencil items:' + JSON.stringify(data));
    });

    // Click handler for + button after enum value
    var userValueIndex = 1;
    $scope.addCandidateUserValue = function(index,user) {
        // $scope.assignment.candidateUsers.push({value: user.id,name:user.username});
        //授权一个人
		if($scope.assignment.userChooseType===0){
            $scope.assignment.assignee = user.id;
            $scope.assignment.assigneeName = user.username;
		}else {

		    //授权多人
            var flag = true;
            angular.forEach($scope.assignment.candidateUsers, function(data, key){
                if (data.value == user.id) {
                    flag = false;
                    $scope.assignment.candidateUsers.splice(key, 1);
                    //设置已选用户
                    $scope.passObj.userNumber--;
                    return;
                }
            });
            if (flag) {
            	var userObj = {value: user.id, name: user.username,loginName:user.loginName,corpName:user.corpName};
            	if(!$scope.assignment.candidateUsers){
                    $scope.assignment.candidateUsers = [];
                    $scope.assignment.candidateUsers.push(userObj);

				}else{
                    $scope.assignment.candidateUsers.splice(index + 1, 0, userObj);
                }
                userValueIndex++;
                //设置已选用户
                $scope.passObj.userNumber++;
            }
            $scope.calculateRolesUsers();
        }

    };

    // Click handler for - button after enum value
    $scope.removeCandidateUserValue = function(index) {
        $scope.assignment.candidateUsers.splice(index, 1);
        $scope.passObj.userNumber--;
        $scope.calculateRolesUsers();
    };

    var groupValueIndex = 1;
    $scope.addCandidateGroupValue = function(index,role) {
        var flag = true;
        angular.forEach($scope.assignment.candidateGroups, function(data, key){
            if (data.value == role.id) {
                flag = false;
                $scope.assignment.candidateGroups.splice(key, 1);
                return;
            }
        });

        if (flag) {
            var roleObj = {value: role.id, name: role.name};
            if(!$scope.assignment.candidateGroups){
                $scope.assignment.candidateGroups = [];
                $scope.assignment.candidateGroups.push(roleObj);
            }else{
                $scope.assignment.candidateGroups.splice(index + 1, 0, roleObj);
            }
            groupValueIndex++;
        }
        $scope.calculateRolesUsers();
    };

    // Click handler for - button after enum value
    $scope.removeCandidateGroupValue = function(index) {
        $scope.assignment.candidateGroups.splice(index, 1);
        $scope.calculateRolesUsers();
    };

    $scope.save = function() {
        if($scope.slider.value === 0){
            parent.layer.alert("请配置最少审批人数",{icon:2});
            return;
        }

        $scope.property.value = {};

        $scope.assignment.assignee = "${assignee}";
        $scope.assignment.passNumber = $scope.slider.value;
        $scope.assignment.passPercent = $scope.getPassPercent();

        angular.copy($scope.assignment, $scope.assignmentOld);

        $scope.property.value.assignment = $scope.assignment;

        $scope.updatePropertyInModel($scope.property);

        $scope.close();
    };

    // Close button handler
    $scope.close = function() {
        angular.copy($scope.assignmentOld, $scope.assignment);
    	$scope.property.mode = 'read';
    	$scope.$hide();
    };

}];