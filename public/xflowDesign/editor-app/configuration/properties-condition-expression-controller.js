var KisBpmConditionExpressionCtrl = [ '$scope', '$modal', function($scope, $modal) {
    // Config for the modal window
    var opts = {
        template:  'editor-app/configuration/properties/condition-expression-popup.html?version=' + Date.now(),
        scope: $scope
    };

    // Open the dialog
    $modal(opts);
}];

var KisBpmConditionExpressionPopupCtrl = [ '$scope', '$translate', '$http', function($scope, $translate, $http) {
    var token = EDITOR.UTIL.getParameterByName('token');

    $scope.conditions = [
        {label:">",value:"gt"},
        {label:"=",value:"eq"},
        {label:"<",value:"lt"},
        {label:">=",value:"geq"},
        {label:"<=",value:"leq"},
        {label:"≠",value:"neq"}
    ];

    $scope.options = [];
    $scope.dicts = [];

    //2017-08-22 11:04:36 customer condition list
    $scope.conditionList = [];
    $scope.logicConditions = [
        {label:"无",value:""},
        {label:"并且",value:"and"},
        {label:"或者",value:"or"}
    ];
    $http({method: 'GET', url: baseUrl + "/Access/option/listByModelId",headers:{"access_token":token},params:{modelId:$scope.modelData.modelId}}).
    success(function (data, status, headers, config) {
        var temp = [];
        for(var k in data){
            if(data[k].type==1){
                temp.push(data[k]);
            }
        }
        $scope.options = temp;
    }).error(function (data, status, headers, config) {
        console.log('Error loading model with id ' + modelId + ' ' + data);
    });

    $scope.getDicts = function(condition){
        $http({method: 'GET', url: baseUrl + "/Access/listByGroupCode",headers:{"access_token":token},params:{code:condition.dictGroup}}).
        success(function (data, status, headers, config) {
            $scope.dicts[condition.fieldName] = data;
        }).error(function (data, status, headers, config) {
            console.log('Error loading model with id ' + modelId + ' ' + data);
        });
    };
    $scope.addCondition = function(){
        var condition = {
            fieldName:"",
            fieldLabel:"",
            selectType:"1",
            scope:"",
            scopeLabel:"",
            dictGroup:"",
            dictName:"",
            value:"",
            valueLabel:"",
            leftParentheses:false,
            rightParentheses:false,
            logic:"",
            logicName:null
        };
        $scope.conditionList.push(condition);
    };

    // Put json representing condition on scope
    if ($scope.property.value !== undefined && $scope.property.value) {
        $scope.conditionList = $scope.property.value;
        angular.forEach($scope.conditionList, function(data,index,array){
            $scope.getDicts(data);
        });
    } else {
        $scope.addCondition();
    }


    $scope.optionChange = function(condition){
        angular.forEach($scope.options, function(data,index,array){
            if(data.fieldName === condition.fieldName){
                condition.fieldLabel = data.name;
                condition.selectType = data.selectType;
                if(data.selectType==="2"){
                    condition.dictGroup = data.dictGroup;
                    $scope.getDicts(condition);
                }
                return;
            }
        });
    };

    $scope.scopeChange = function(condition){
        angular.forEach($scope.conditions, function(data,index,array){
            if(data.value === condition.scope){
                condition.scopeLabel = data.label;
                return;
            }
        });
    };

    $scope.getLogicLabel = function(value){
        var label = '';
        angular.forEach($scope.logicConditions, function(data,index,array){
            if(data.value===value){
                label = data.label;
                return;
            }
        });
        return label;
    };

    /**
     * 改变括号
     * @param direction
     * @param condition
     */
    $scope.changeParentheses = function(direction,condition){
        if(direction==="left"){
            condition.leftParentheses = !condition.leftParentheses;
        }else if(direction==="right"){
            condition.rightParentheses = !condition.rightParentheses;
        }
    };

    $scope.removeCondition = function(index){
        $scope.conditionList.splice(index,1);
    };

	
    $scope.save = function() {
        var error = 0;//0：正确|1、存在条件未填写|2、逻辑条件错误
        angular.forEach($scope.conditionList, function(data,index,array) {
            if (data.selectType === "2") {
                angular.forEach($scope.dicts[data.fieldName], function (dict, index, array) {
                    if (dict.code === data.value) {
                        data.dictName = dict.name;
                        return;
                    }
                });
            } else {
                if (!data.fieldName || !data.scope || !data.value) {
                    error = 1;
                }
            }
            data.logicName = $scope.getLogicLabel(data.logic);
            if (index === $scope.conditionList.length - 1) {
                data.logic = "";
                data.logicName = "";
            }else{
                if(!data.logic){
                    error = 2;
                }
            }
            if (data.selectType === "1" && error === 0) {
                var reg =/^([1-9]\d*|0)(\.\d*[1-9])?$/;
                if (!reg.test(data.value)){
                    data.value="";
                    error = 3;
                }
            }

        });

        if(error === 1){
            alert("存在未填写的条件，请检查!");
            return;
        }else if(error ===2){
            alert("逻辑条件错误，请检查!");
            return;
        }else if(error === 3){
            alert("逻辑条件错误，请输入正确的数字类型!");
            return;
        }

        $scope.property.value = $scope.conditionList;
        $scope.updatePropertyInModel($scope.property);
        $scope.close();
    };

    // Close button handler
    $scope.close = function() {
    	$scope.property.mode = 'read';
    	$scope.$hide();
    };
}];