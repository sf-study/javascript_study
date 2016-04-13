var EventUtil = {
    addHandler : function(element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + type, handler);
        } else {
            element['on' + type] = handler;
        }
    },
    removeHandler : function(element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },
    /*
     * 获得event对象的引用
     */
    getEvent : function(event) {
        return event ? event : window.event;
    },
    /*
     * 返回事件的目标
     */
    getTarget : function(event) {
        return event.target || event.srcElement;
    },
    /*
     * 取消事件的默认行为
     */
    preventDefault : function(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    /*
     * 阻止事件冒泡
     */
    stopPropagation : function(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },
    /*
     * 获得相关元素
     */
    getRelatedTarget:function(){
        if(event.relatedTarget){
            return event.relatedTarget;
        }else if(event.toElement){
            return event.toElement;
        }else if(event.fromElement){
            return event.fromElement;
        }else{
            return null;
        }
    },
    /*
     * 监控mousedown和mouseup的鼠标按下情况
     */
    getButton:function(){
        if(document.implementation.hasFeature('MouseEvents','2.0')){
            return event.button;
        }else{
            switch(event.button){
                case 0:
                case 1:
                case 3: 
                case 5:
                case 7:
                return 0;
                case 2:
                case 6:
                return 2;
                case 4:
                return 1;
            }
        }
    },
    /*
     * 鼠标滚轮事件
     */
    getWheelDelta:function(){
        if(event.wheelDelta){
            return (client.engine.opera&&client.engine.opera<9.5?
                -event.wheelDelta:event.wheelDelta);
        }else{
            return -event.detail*40;
        }
    },
    /*
     * 跨浏览器取得字符编码
     */
    getCharCode:function(){
        if(typeof event.charCode=='number'){
            return event.charCode;
        }else{
            return event.keyCode;
        }
    }
};
var handler = function() {
    alert('clicked');
}; 