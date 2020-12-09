'use strict';
activitiModeler.directive('tree', function () {
    var corpId = EDITOR.UTIL.getParameterByName('corpId');
    var token = EDITOR.UTIL.getParameterByName('token');
    return {
        require: '?ngModel',
        restrict: 'A',
        link: function ($scope,element, attrs, ngModel) {
            var setting = {
                data: {
                    simpleData: {
                        enable: true
                    }
                },
                callback: {
                    onClick: function (event, treeId, treeNode) {
                        jQuery.ajax({url:baseUrl + "/Access/listByCorpId",
                            type:'get',
                            data:{corpId:treeNode.id},
                            headers:{"access_token":token},
                            dataType:'JSON',
                            success:function (nodes) {
                                var temp = [];
                                angular.forEach(nodes, function(data, key){
                                    data["corpName"] = treeNode.name;
                                    temp.push(data);
                                });
                                $scope.users = temp;
                                $scope.$apply();
                            }
                        });
                        /*jQuery.get({"access_token":token},baseUrl + "/Access/listByCorpId",{corpId:treeNode.id},function(nodes){
                            var temp = [];
                            angular.forEach(nodes, function(data, key){
                                data["corpName"] = treeNode.name;
                                temp.push(data);
                            });
                            $scope.users = temp;
                            $scope.$apply();

                        },"JSON");*/
                    }
                }
            };

           jQuery.ajax({url:baseUrl + "/Access/tree",
               type:'get',
               data:{corpId:corpId},
               headers:{"access_token":token},
               dataType:'JSON',
               success:function (nodes) {
                   var temp = [];
                   angular.forEach(nodes, function(data, key){
                       data["name"] = "("+data.code+") "+data.name;
                       temp.push(data);
                   });
                   var ztree = jQuery.fn.zTree.init(element, setting, temp);
                   ztree.expandAll(true);
               }
           });

           /* jQuery.get(baseUrl + "/Access/tree",{corpId:corpId},{"access_token":token},function(nodes){
                var temp = [];
                angular.forEach(nodes, function(data, key){
                    data["name"] = "("+data.code+") "+data.name;
                    temp.push(data);
                });
                var ztree = jQuery.fn.zTree.init(element, setting, temp);
                ztree.expandAll(true);
            },"JSON");*/
        }
    };
});  